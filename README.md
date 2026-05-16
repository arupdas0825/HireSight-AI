# HireSight AI

Premium AI-powered ATS Resume Analyzer.

## Architecture
- **Frontend**: Vite + Vanilla JavaScript (Modular Architecture)
- **Backend**: Node.js + Express (MVC Pattern)
- **Styling**: Modern CSS (Vanilla)
- **AI**: Intelligent ATS Analysis Engine

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone and Setup**
   ```bash
   # Install Client dependencies
   cd client
   npm install

   # Install Server dependencies
   cd ../server
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   AI_API_KEY=your_key_here
   ```

3. **Running the App**
   ```bash
   # Run Backend (from /server)
   npm run dev

   # Run Frontend (from /client)
   npm run dev
   ```

## License
MIT
