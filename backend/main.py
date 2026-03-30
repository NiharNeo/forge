import os
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
NVIDIA_API_KEY = os.getenv("NVIDIA_API_KEY")

from fastapi.staticfiles import StaticFiles

app = FastAPI(title="Forge AI API", version="1.0.0")

# Serve frontend static files
app.mount("/static", StaticFiles(directory="frontend"), name="static")

@app.get("/")
async def read_index():
    from fastapi.responses import FileResponse
    return FileResponse("frontend/index.html")

@app.get("/customizer")
async def read_customizer():
    from fastapi.responses import FileResponse
    return FileResponse("frontend/customizer.html")

# Enable CORS for frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from services.github_analyzer import GitHubAnalyzer
from services.style_extractor import StyleExtractor
from services.prompt_compiler import PromptCompiler
from services.llm_engine import LLMEngine
from models import GenerateRequest, GenerateResponse, DevDNA, StyleDNA

# Simulated state for the session
session_state = {
    "dev_dna": None,
    "style_dna": None
}

@app.get("/")
async def root():
    return {"message": "Forge AI Style Engine Backend is Online"}

@app.post("/analyze/github")
async def analyze_github(repo_url: str):
    # In a real app, this would clone the repo to a temp dir
    # For simulation, we'll use the local Desktop/Forge dir
    path = "/Users/niharchavan/Desktop/Forge" 
    analyzer = GitHubAnalyzer(path)
    dna = analyzer.analyze()
    session_state["dev_dna"] = dna
    return dna

@app.post("/generate/code", response_model=GenerateResponse)
async def generate_code(request: GenerateRequest):
    compiler = PromptCompiler()
    prompt = compiler.compile(
        intent=request.intent,
        customizer=request.customizer,
        dev_dna=request.dev_dna or session_state["dev_dna"],
        style_dna=request.style_dna or session_state["style_dna"]
    )
    
    # Initialize engine with NVIDIA API Key
    engine = LLMEngine(api_key=NVIDIA_API_KEY)
    code = await engine.generate(prompt)
    
    return GenerateResponse(
        id="gen_" + str(os.urandom(4).hex()),
        code=code,
        preview_url="http://localhost:8000/preview/last"
    )

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
