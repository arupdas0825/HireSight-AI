from fastapi import APIRouter
from pydantic import BaseModel
from app.services.ai_service import AIService
from app.services.ats_service import ATSService

router = APIRouter()

class AnalysisRequest(BaseModel):
    resume_text: str
    job_description: str

@router.post("/")
async def analyze_resume(request: AnalysisRequest):
    # Orchestrate services
    ai_results = await AIService.analyze(request.resume_text, request.job_description)
    ats_results = await ATSService.validate(request.resume_text)
    
    return {
        "success": True,
        "data": {
            "ai": ai_results,
            "ats": ats_results
        }
    }
