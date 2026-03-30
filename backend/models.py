from pydantic import BaseModel
from typing import List, Optional, Dict, Any

class Intent(BaseModel):
    type: str  # e.g., SaaS, Portfolio, Dashboard
    audience: str  # e.g., Developers, Consumers, Enterprise
    goal: str

class DevDNA(BaseModel):
    stack: str
    framework: str
    styling: str
    naming: str  # PascalCase, camelCase, kebab-case
    structure: List[str]
    patterns: Dict[str, str]

class StyleDNA(BaseModel):
    colors: Dict[str, str]
    typography: Dict[str, str]
    layout: str
    components: List[str]
    visual_traits: Dict[str, Any]

class CustomizerState(BaseModel):
    aesthetic: str
    density: int
    playful: int
    contrast: int
    motion: int
    tone: List[str]
    layout: str
    typography: str
    colors: str

class GenerateRequest(BaseModel):
    intent: Intent
    dev_dna: Optional[DevDNA] = None
    style_dna: Optional[StyleDNA] = None
    customizer: CustomizerState

class GenerateResponse(BaseModel):
    id: str
    code: str
    preview_url: Optional[str] = None
