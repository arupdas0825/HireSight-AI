from fastapi import APIRouter, UploadFile, File, HTTPException
import aiofiles
import os

router = APIRouter()

UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

from app.services.parser_service import ParserService

@router.post("/")
async def upload_resume(file: UploadFile = File(...)):
    if not file.filename.endswith(('.pdf', '.docx', '.txt')):
        raise HTTPException(status_code=400, detail="Invalid file type")
    
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    
    # Save the file
    async with aiofiles.open(file_path, 'wb') as out_file:
        content = await file.read()
        await out_file.write(content)

    # Extract text
    extracted_text = ""
    try:
        if file.filename.endswith('.pdf'):
            extracted_text = await ParserService.extract_text_from_pdf(file_path)
        else:
            # For .txt files, just read the content
            with open(file_path, 'r', encoding='utf-8') as f:
                extracted_text = f.read()
    except Exception as e:
        print(f"Extraction failed: {e}")
        # We still return success of upload, but with empty extraction if it fails
    
    return {
        "filename": file.filename,
        "extracted_text": extracted_text,
        "status": "success"
    }
