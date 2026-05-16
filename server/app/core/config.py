from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List
import os

class Settings(BaseSettings):
    PROJECT_NAME: str = "HireSight AI"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api"
    
    # CORS
    CORS_ORIGINS: List[str] = ["*"]
    
    # AI API Keys
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")
    
    model_config = SettingsConfigDict(case_sensitive=True, env_file=".env")

settings = Settings()
