<div align="center">

  <img src="client/public/logo.svg" alt="HireSight AI Logo" width="120" />

  # HireSight AI

  ### **Precision Resume Intelligence & ATS Optimization Platform**

  [![Vite](https://img.shields.io/badge/Frontend-Vite%20%2F%20React-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
  [![Python](https://img.shields.io/badge/Engine-Python%203.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
  [![NLP Pipeline](https://img.shields.io/badge/NLP-spaCy%20%26%20scikit--learn-47A15F?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://spacy.io)
  [![UI/UX Design](https://img.shields.io/badge/Design-Apple%20VisionOS-8b5cf6?style=for-the-badge)](https://hiresight-ai.vercel.app)
  [![Mobile Optimized](https://img.shields.io/badge/Mobile-iOS%20%2F%20Android%20App-00f2ff?style=for-the-badge)](https://hiresight-ai.vercel.app)
  
  **HireSight AI** is a production-grade, premium AI SaaS application designed to eliminate resume filtration bottlenecks. Built with a high-performance, asynchronous FastAPI backend and a gorgeous, glassmorphic, Apple-inspired frontend workspace, the platform equips candidates with elite recruiter-level intelligence.

  [🌐 Live Demonstration](https://hiresight-ai.vercel.app) • [📡 Backend Swagger API Docs](http://localhost:5000/docs)

</div>

---

## 📸 Screenshots & Interface Showcase

### 🖥️ Desktop Landing & Cinematic Workspace
<div align="center">
  <img src="screenshots/home-dark.png" alt="HireSight AI Desktop Landing" width="800" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);" />
  <p><i>Cinematic Hero landing featuring the animated, colorful horizontal glass ribbon marquee.</i></p>
</div>

### 📊 Recruiter-Grade Analyzer Dashboard
<div align="center">
  <img src="screenshots/dashboard.png" alt="HireSight AI Dashboard Workspace" width="800" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);" />
  <p><i>Immersive VisionOS-inspired workspace presenting real-time keyword calibrators, similarity matrices, and optimization suggestions.</i></p>
</div>

### 📱 iOS & Android Flagship App Experience
<div align="center">
  <img src="screenshots/mobile-ui.png" alt="HireSight AI Mobile Visual Proportions" width="360" style="border-radius: 24px; border: 4px solid #1e293b;" />
  <p><i>Mobile native proportions: 56px floating dock navigation, 8px grid alignment, and touch-pressure tap feedbacks.</i></p>
</div>

---

## 🚀 The ATS Problem & HireSight AI's Solution

In the modern recruiting landscape, **over 75% of candidate resumes are filtered out automatically** by legacy Applicant Tracking Systems (ATS) before ever reaching a human eye. These systems rely on primitive string-matching algorithms that fail to comprehend candidate quality, filtering profiles due to innocent formatting errors or micro-keyword mismatches.

**HireSight AI** rebalances the scale by offering an end-to-end recruiter-caliber workspace:
* **🤖 Asynchronous Semantic Intelligence**: Parses resumes utilizing deep NLP, measuring contextual *impact* and semantic density rather than simple keyword stuffing.
* **🎯 Dynamic Job Calibration**: Scores candidates dynamically against complex role descriptions, computing real-time matching indices, keyword gaps, and ATS parsing warnings.
* **⚡ Production-Grade Optimizations**: Outlines concrete structural and vocabulary adjustments to immediately bulletproof resumes for corporate parsing scripts.

---

## ✨ Upgraded Feature Suite

### 💎 Futuristic Design & Styling Upgrades
* **🪐 Hexagonal Logo System**: Integrated an original, sleek geometric brand-mark representing structure, career columns, and precision sights. Works perfectly in dark and light modes at high-DPI.
* **🔮 Apple VisionOS Card Depth**: Translucent slate gradients (`rgba(15,23,42,0.7)`) featuring top-border inset reflections (`0 1px 1px 0 rgba(255,255,255,0.05) inset`) that give pages spectacular visual layering.
* **🚨 3D Glowing Capsule CTAs**: Unique dual-border pill button modules featuring a slow, continuous **linear gradient border rotation animation** with touch-scale compression states.
* **💫 Infinite Company Glass Marquee**: A gorgeous, horizontal **glassmorphic ribbon** that hosts 10 vector-branded enterprise logos (Google, Microsoft, Stripe, etc.) showing full authentic trademark colors by default, with custom hover glows.

### 📱 Flagship Mobile Rebuild (UX-First)
* **📏 8px System Rhythm**: Clean, standardized vertical layout boundaries that eliminate visual noise on compact screens.
* **⚓ 56px Floating Translucent Dock**: Floating glass navigation pill with perfectly centered branding and theme toggling buttons.
* **📁 iOS-Native Upload Card**: A lightweight file ingestion area featuring dashed glowing rings and a **floating document micro-animation** (`📄`).
* **📱 Prevent Safari Auto-Zoom**: Restricts text inputs strictly to `16px` within mobile media queries, preventing intrusive Safari viewport shifts on keyboard focus.
* **🤝 Side-by-Side Dual Touch Actions**: Workspace headers group actions side-by-side with equal `flex: 1` width to maximize tap targets.

---

## 🛠️ Complete Technical Stack

| Layer | Technologies | Key Responsibility |
| :--- | :--- | :--- |
| **Frontend** | Vite, Vanilla ES6+ JS, Custom CSS (Variables & Utility system) | Ultra-lightweight client rendering, 60fps animations, theme orchestration |
| **Backend** | FastAPI (Python 3.12), Pydantic v2, Uvicorn | High-performance asynchronous endpoint pipelines, routing controls |
| **AI / NLP** | spaCy (`en_core_web_sm`), scikit-learn, Sentence Transformers | Natural Language Processing, TF-IDF vectorization, Cosine similarity |
| **Parsing** | pdfplumber, python-multipart, aiofiles | Multi-threaded file extraction, stream management, schema compliance |
| **Typography** | Space Grotesk (Headings), Inter (Body System) | Authorities, modern, high-legibility typographic hierarchies |

---

## 📐 Project Architecture

```text
hiresight-ai/
├── client/                     # High-Performance Vite Frontend
│   ├── public/                 # SVG vector branding, favicons, app icons
│   ├── src/
│   │   ├── pages/              # Interface modules (Home.js, Analyzer.js)
│   │   ├── services/           # State, Router, and API middleware
│   │   └── styles/             # Unified Design System
│   │       ├── variables.css   # Foundational tokens, light/dark themes
│   │       ├── typography.css  # Space Grotesk tracking, letter clamps
│   │       ├── components/     # Glowing buttons, floating docks
│   │       └── mobile.css      # 8px responsive dock rules (Imported bottom)
│   └── index.html              # Document header metadata & fonts
├── server/                     # FastAPI AI Processing Engine
│   ├── app/
│   │   ├── api/                # Endpoints (upload, analyze, health)
│   │   ├── core/               # App configuration & env mapping
│   │   ├── services/           # Business logic (Parser, ATS Engine)
│   │   └── main.py             # FastAPI App definition & CORS origins
│   └── requirements.txt        # Python dependency manifest
├── package.json                # Root package orchestration
└── README.md                   # Complete Platform documentation
```

---

## 📡 API Integration Blueprint

### 1. File Upload & Ingestion Pipeline
* **Endpoint**: `POST /api/upload`
* **Content-Type**: `multipart/form-data`
* **Payload**: `file: File (PDF)`
* **Response Model**:
```json
{
  "filename": "john_doe_resume.pdf",
  "text": "Extracted candidate qualifications and professional history...",
  "status": "success"
}
```

### 2. Deep AI/ATS Comparative Analysis
* **Endpoint**: `POST /api/analyze`
* **Content-Type**: `application/json`
* **Payload**:
```json
{
  "resume_text": "Candidate experience detail...",
  "job_description": "Target job description text..."
}
```
* **Response Model**:
```json
{
  "match_score": 84.5,
  "skills_analysis": {
    "detected_skills": ["React", "Python", "FastAPI", "Machine Learning"],
    "missing_skills": ["Docker", "Kubernetes", "CI/CD"],
    "recommendations": "Integrate deployment instances highlighting containerization experience."
  },
  "ats_warnings": [
    "Detected multi-column text which may cause parsing layout splits in legacy systems."
  ]
}
```

---

## 🛠️ Installation & Setup

### **Prerequisites**
* **Node.js** (v18.0.0 or higher)
* **Python** (v3.10 or higher)
* **npm** (v9.0.0 or higher)

### **1. Clone the Repository**
```bash
git clone https://github.com/arupdas0825/HireSight-AI.git
cd hiresight-ai
```

### **2. Unified Dependency Installation**
Execute our zero-friction installer in the root folder, setting up both Node packages and Python Virtual Environment requirements:
```bash
npm run install-all
```

### **3. Environment Variables**
Configure server environment keys by creating a `.env` file inside the `server/` directory:
```bash
# hiresight-ai/server/.env

PORT=5000
ENVIRONMENT=development
OPENAI_API_KEY=your-openai-api-key-here
GROQ_API_KEY=your-groq-api-key-here
```

### **4. Launch Development Servers**
Spin up both FastAPI and Vite client instances concurrently with a single command:
```bash
npm run dev
```

* **Vite Web Console**: [http://localhost:3000](http://localhost:3000)
* **FastAPI Server Interface**: [http://localhost:5000](http://localhost:5000)
* **Interactive API Playground (Swagger)**: [http://localhost:5000/docs](http://localhost:5000/docs)

---

## 🚄 Performance & Optimizations

* **Hardware-Accelerated Layouts**: Marquees, floaters, and glows utilize strictly GPU-compiling parameters (`transform3d` and `opacity`) inside keyframes to keep rendering at **60fps** with zero CPU battery drain.
* **Vector-First Footprint**: Slashing legacy pixel files (`519KB` old PNG navbar logo) in favor of optimized **`1.48KB`** responsive inline vectors, speeding up loading thresholds on mobile cellular networks by **350x**.
* **Viewport Pan Mitigations**: Locked mobile input fields to `16px` to prevent Safari layout-panning triggers.

---

## 🗺️ Platform Roadmap

- [ ] **AI Interview Simulator**: Generates role-calibrated technical questions addressing found resume gaps.
- [ ] **Multi-Format Export Engine**: Download optimized single-column DOCX/PDF versions of parsed profiles.
- [ ] **Candidate Portfolio Analytics**: Live dashboard showcasing score histories across different targeted positions.
- [ ] **Recruiter Sorting Console**: Bulk ingestion pipeline matching talent pools dynamically against open listings.

---

## 👨‍💻 Author

**Arup Das**  
*Full-Stack AI Software Engineer*

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/arupdas0825)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/arup-das-825a0b25a)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://arup.dev)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
  Built with ❤️ for the future of recruitment.
</div>
