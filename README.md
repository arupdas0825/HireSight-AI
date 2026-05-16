# HireSight AI 🚀
### Premium AI-Powered ATS Resume Intelligence Platform

HireSight AI is an enterprise-grade SaaS platform designed to bridge the gap between candidates and Applicant Tracking Systems (ATS). Using advanced NLP and machine learning, HireSight AI provides deep insights into resume performance, keyword optimization, and semantic job matching.

![HireSight AI Preview](https://img.shields.io/badge/Status-In_Development-blueviolet?style=for-the-badge)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Vite](https://img.shields.io/badge/Frontend-Vite_JS-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Python](https://img.shields.io/badge/Language-Python_3.12+-3776AB?style=for-the-badge&logo=python&logoColor=white)

---

## ✨ Key Features

- **🔍 Intelligent ATS Analysis**: Detects how well your resume is parsed by modern enterprise ATS systems.
- **📈 Real-time Scoring**: Provides a compatibility score based on specific job descriptions.
- **🧠 AI-Driven Insights**: Identifies missing keywords, strengths, and weaknesses using LLM intelligence.
- **📄 High-Fidelity Parsing**: Extracts text from complex PDF layouts with semantic structure preservation.
- **⚡ Async Architecture**: Built on a scalable, asynchronous FastAPI backend for high-concurrency processing.
- **🎨 Premium UI/UX**: A sleek, dark-themed, glassmorphic interface designed for a seamless user experience.

---

## 🛠️ Technology Stack

### **Frontend**
- **Core**: Vanilla JavaScript (ES6+)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Modern CSS (Custom Design System, Glassmorphism)

### **Backend**
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **Validation**: [Pydantic v2](https://docs.pydantic.dev/)
- **Server**: [Uvicorn](https://www.uvicorn.org/)
- **Parsing**: `pdfplumber` for robust PDF text extraction

### **AI & NLP** (Engineered for scalability)
- **Intelligence**: Integrated with OpenAI / Groq API support
- **Processing**: `spaCy` & `scikit-learn` for semantic similarity and keyword analysis

---

## 🚀 Getting Started

### **Prerequisites**
- **Node.js**: v18+
- **Python**: v3.11+
- **Git**

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/arupdas0825/HireSight-AI.git
   cd hiresight-ai
   ```

2. **Setup Environment Variables**
   Create a `.env` file in the `server` directory:
   ```env
   OPENAI_API_KEY=your_api_key_here
   GROQ_API_KEY=your_api_key_here
   PORT=5000
   ```

3. **Install All Dependencies**
   The root project includes a unified installer for both Frontend and Backend:
   ```bash
   npm run install-all
   ```

### **Development**

Launch both the Vite frontend and FastAPI backend concurrently:
```bash
npm run dev
```

- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000`
- **API Documentation**: `http://localhost:5000/docs` (Swagger UI)

---

## 📂 Project Structure

```text
hiresight-ai/
├── client/              # Vite + Vanilla JS Frontend
│   ├── src/             # Application source code
│   └── public/          # Static assets
├── server/              # FastAPI Python Backend
│   ├── app/
│   │   ├── api/         # API Route definitions
│   │   ├── core/        # Configuration & Security
│   │   ├── services/    # Business logic & Integrations
│   │   └── ai/          # NLP & Intelligence engines
│   └── requirements.txt # Python dependencies
├── package.json         # Root orchestration (concurrent dev)
└── .gitignore           # Global git exclusions
```

---

## 🛡️ Security
This project uses `.env` files for secret management. Please ensure that no sensitive credentials are ever committed to version control. The `.gitignore` is pre-configured to exclude all `.env` files.

---

## 📜 License
Internal Development - All Rights Reserved.

---
Created with ❤️ by [Arup Das](https://github.com/arupdas0825)
