import { UploadService } from '../services/uploadService.js';

export const Analyzer = () => {
    return `
        <div class="analyzer-page fade-in">
            <nav class="navbar">
                <div class="container">
                    <a href="/" class="logo">
                        <img src="/logo.png" alt="HireSight AI Logo" class="brand-logo">
                        HireSight<span>AI</span>
                    </a>
                    <div class="nav-links">
                        <button class="btn btn-ghost" onclick="app.router.navigateTo('/')">← Exit Workspace</button>
                    </div>
                </div>
            </nav>

            <div class="container" style="margin-top: 100px; margin-bottom: 50px;">
                <div class="workspace-header mb-2xl">
                    <div class="flex-between">
                        <div>
                            <div class="hero-badge" style="margin-bottom: 8px;">Workspace</div>
                            <h2>Resume Intelligence Dashboard</h2>
                        </div>
                        <div class="actions">
                            <button class="btn btn-secondary" id="save-report-btn">Save Draft</button>
                        </div>
                    </div>
                </div>
                
                <div class="dashboard-layout">
                    <!-- Left Panel: Input -->
                    <div class="sidebar">
                        <div class="card p-lg mb-lg">
                            <h3>Resume Ingestion</h3>
                            <p class="text-muted small mb-md">Upload your professional CV to begin deep analysis.</p>
                            
                            <div class="upload-area" id="drop-zone">
                                <input type="file" id="resume-input" hidden accept=".pdf,.docx,.txt">
                                <div class="upload-content" id="upload-content">
                                    <div class="upload-icon">↑</div>
                                    <p class="upload-text">Click or Drag Resume</p>
                                    <span class="upload-hint">Supports PDF, DOCX (Max 5MB)</span>
                                </div>
                                <div class="upload-loading hidden" id="upload-loading">
                                    <div class="spinner"></div>
                                    <p>Parsing Intelligence...</p>
                                </div>
                                <div class="upload-success hidden" id="upload-success">
                                    <div class="success-icon">✓</div>
                                    <p id="uploaded-filename">Resume Uploaded</p>
                                    <button class="btn btn-link btn-sm" id="reset-upload">Change File</button>
                                </div>
                            </div>

                            <div class="divider"><span>OR PASTE TEXT</span></div>
                            
                            <textarea id="resume-text" placeholder="Paste resume text here if you don't have a file..."></textarea>
                        </div>
                    </div>

                    <!-- Right Panel: Context & Results -->
                    <div class="main-content">
                        <div class="card target-card p-lg">
                            <div class="flex-between mb-md">
                                <h3>Target Job Context</h3>
                                <div class="status-badge" id="ai-status">Ready for Analysis</div>
                            </div>
                            <p class="text-muted small mb-lg">Provide the Job Description to calibrate our AI matching engine.</p>
                            
                            <textarea id="jd-input" class="jd-input" placeholder="Paste the job requirements, responsibilities, and qualifications here..."></textarea>
                            
                            <div class="actions mt-xl">
                                <button class="btn btn-primary btn-lg w-full" id="analyze-btn">
                                    <span class="btn-text">Run Intelligence Analysis</span>
                                    <div class="btn-loader hidden"></div>
                                </button>
                            </div>
                        </div>

                        <!-- Results Placeholder -->
                        <div id="results-container" class="mt-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

Analyzer.init = () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('resume-input');
    const resumeTextArea = document.getElementById('resume-text');
    const analyzeBtn = document.getElementById('analyze-btn');
    const uploadContent = document.getElementById('upload-content');
    const uploadLoading = document.getElementById('upload-loading');
    const uploadSuccess = document.getElementById('upload-success');
    const fileNameDisplay = document.getElementById('uploaded-filename');
    const resetBtn = document.getElementById('reset-upload');

    // 1. Trigger File Picker
    dropZone.addEventListener('click', (e) => {
        if (e.target !== resetBtn) fileInput.click();
    });

    // 2. File Selection Handler
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) handleFileUpload(file);
    });

    // 3. Drag & Drop Handlers
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.add('drag-active'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.remove('drag-active'), false);
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const file = dt.files[0];
        if (file) handleFileUpload(file);
    });

    // 4. File Upload Logic
    async function handleFileUpload(file) {
        // Validation
        const validTypes = ['.pdf', '.docx', '.txt'];
        const fileExt = '.' + file.name.split('.').pop().toLowerCase();
        
        if (!validTypes.includes(fileExt)) {
            alert('Please upload a valid file (PDF, DOCX, or TXT)');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('File too large. Max size is 5MB.');
            return;
        }

        // UI States
        showState('loading');
        
        try {
            const result = await UploadService.uploadResume(file);
            
            // On Success
            fileNameDisplay.textContent = file.name;
            if (result.extracted_text) {
                resumeTextArea.value = result.extracted_text;
            }
            showState('success');
            
        } catch (error) {
            alert('Error parsing resume: ' + error.message);
            showState('initial');
        }
    }

    function showState(state) {
        uploadContent.classList.add('hidden');
        uploadLoading.classList.add('hidden');
        uploadSuccess.classList.add('hidden');

        if (state === 'initial') uploadContent.classList.remove('hidden');
        if (state === 'loading') uploadLoading.classList.remove('hidden');
        if (state === 'success') uploadSuccess.classList.remove('hidden');
    }

    // Reset Upload
    resetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.value = '';
        resumeTextArea.value = '';
        showState('initial');
    });

    // 5. Analysis Trigger
    analyzeBtn.addEventListener('click', () => {
        const resumeText = resumeTextArea.value;
        const jdText = document.getElementById('jd-input').value;

        if (!resumeText || !jdText) {
            alert('Please provide both a resume and a job description.');
            return;
        }

        // Logic for analysis will go here in next step
        console.log('Running analysis...');
        analyzeBtn.disabled = true;
        analyzeBtn.querySelector('.btn-text').textContent = 'Analyzing...';
    });
};
