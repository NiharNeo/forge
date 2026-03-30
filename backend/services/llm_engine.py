import json
import asyncio
from typing import Dict, Any
from openai import OpenAI

class LLMEngine:
    def __init__(self, api_key: str = None):
        self.api_key = api_key
        self.client = OpenAI(
            base_url="https://integrate.api.nvidia.com/v1",
            api_key=api_key
        )

    async def generate(self, compiled_prompt: str) -> str:
        # Using Llama 3.1 405B Instruct for high-quality architecture
        try:
            completion = self.client.chat.completions.create(
                model="meta/llama-3.1-405b-instruct",
                messages=[{"role": "user", "content": compiled_prompt}],
                temperature=0.2,
                top_p=0.7,
                max_tokens=4096,
                stream=False
            )
            
            response_text = completion.choices[0].message.content
            
            # Extracts JSON from potential markdown wrapping
            if "```json" in response_text:
                json_str = response_text.split("```json")[1].split("```")[0].strip()
            elif "```" in response_text:
                json_str = response_text.split("```")[1].split("```")[0].strip()
            else:
                json_str = response_text.strip()
                
            # Basic validation
            json.loads(json_str)
            return json_str
            
        except Exception as e:
            print(f"NVIDIA Generation Error: {e}")
            # Fallback to a structured error or raw string
            return json.dumps({"error": str(e), "files": {}})
