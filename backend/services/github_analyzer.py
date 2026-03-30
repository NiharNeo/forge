import os
import re
import json
from typing import List, Dict, Any, Optional

class GitHubAnalyzer:
    def __init__(self, repo_path: str):
        self.repo_path = repo_path

    def analyze(self) -> Dict[str, Any]:
        dna = {
            "stack": self._detect_stack(),
            "framework": self._detect_framework(),
            "styling": self._detect_styling(),
            "naming": self._detect_naming_convention(),
            "structure": self._detect_folder_structure(),
            "patterns": self._detect_component_patterns()
        }
        return dna

    def _detect_stack(self) -> str:
        if os.path.exists(os.path.join(self.repo_path, "package.json")):
            return "JavaScript/TypeScript"
        if os.path.exists(os.path.join(self.repo_path, "requirements.txt")) or \
           os.path.exists(os.path.join(self.repo_path, "pyproject.toml")):
            return "Python"
        return "Unknown"

    def _detect_framework(self) -> str:
        pkg_json_path = os.path.join(self.repo_path, "package.json")
        if os.path.exists(pkg_json_path):
            with open(pkg_json_path, 'r') as f:
                content = f.read()
                if "next" in content: return "Next.js"
                if "react" in content: return "React"
                if "vue" in content: return "Vue"
                if "svelte" in content: return "Svelte"
        return "Vanilla"

    def _detect_styling(self) -> str:
        pkg_json_path = os.path.join(self.repo_path, "package.json")
        if os.path.exists(pkg_json_path):
            with open(pkg_json_path, 'r') as f:
                content = f.read()
                if "tailwindcss" in content: return "Tailwind CSS"
                if "styled-components" in content: return "Styled Components"
                if "sass" in content or "scss" in content: return "Sass"
        return "CSS Modules / Vanilla CSS"

    def _detect_naming_convention(self) -> str:
        # Sample files to detect naming
        for root, dirs, files in os.walk(self.repo_path):
            for file in files:
                if file.endswith(('.ts', '.tsx', '.js', '.jsx')):
                    if re.match(r'^[A-Z][a-zA-Z0-9]+\.', file):
                        return "PascalCase"
                    if re.match(r'^[a-z][a-zA-Z0-9]+\.', file):
                        return "camelCase"
                    if "-" in file:
                        return "kebab-case"
        return "camelCase"  # Default

    def _detect_folder_structure(self) -> List[str]:
        structure = []
        for item in os.listdir(self.repo_path):
            if os.path.isdir(os.path.join(self.repo_path, item)) and not item.startswith("."):
                structure.append(item)
        return structure

    def _detect_component_patterns(self) -> Dict[str, str]:
        patterns = {}
        # Simple heuristic for component patterns
        if "components" in os.listdir(self.repo_path):
            comp_dir = os.path.join(self.repo_path, "components")
            if os.path.isdir(comp_dir):
                subdirs = [d for d in os.listdir(comp_dir) if os.path.isdir(os.path.join(comp_dir, d))]
                if "ui" in subdirs or "common" in subdirs:
                    patterns["organization"] = "Atomic/Modular"
                else:
                    patterns["organization"] = "Flat"
        return patterns
