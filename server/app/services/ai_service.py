class AIService:
    @staticmethod
    async def analyze(resume_text: str, job_description: str):
        # Production-safe mock for AI analysis logic
        # In production, this would integrate with Groq/OpenAI
        return {
            "score": 82,
            "summary": "The candidate shows strong technical proficiency in backend systems.",
            "strengths": ["FastAPI expertise", "System design knowledge"],
            "weaknesses": ["Lacks frontend experience", "No mention of cloud scaling"]
        }
