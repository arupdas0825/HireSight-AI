import pdfplumber

class ParserService:
    @staticmethod
    async def extract_text_from_pdf(file_path: str):
        try:
            text = ""
            with pdfplumber.open(file_path) as pdf:
                if not pdf.pages:
                    return ""
                for page in pdf.pages:
                    extracted = page.extract_text()
                    if extracted:
                        text += extracted + "\n"
            return text
        except Exception as e:
            print(f"Error parsing PDF: {e}")
            raise Exception("Failed to extract text from the provided PDF file. The file may be corrupt or encrypted.")
