export const Home = () => {
    return `
        <div class="home-page fade-in">
            <nav class="navbar">
                <div class="container">
                    <a href="/" class="logo">
                        <img src="/logo.png" alt="HireSight AI Logo" class="brand-logo">
                        HireSight<span>AI</span>
                    </a>
                    <div class="nav-links">
                        <a href="#features" class="nav-link">Platform</a>
                        <a href="#solutions" class="nav-link">Solutions</a>
                        <button class="btn btn-ghost theme-toggle" onclick="app.toggleTheme()" title="Toggle Theme" aria-label="Toggle Dark Mode">
                            <i data-lucide="sun" class="icon-light"></i>
                            <i data-lucide="moon" class="icon-dark"></i>
                        </button>
                        <button class="btn btn-primary" onclick="app.router.navigateTo('/analyzer')">Get Started</button>
                    </div>
                </div>
            </nav>

            <header class="hero">
                <div class="container">
                    <div class="hero-badge">Next-Gen ATS Intelligence</div>
                    <h1>Precision Resume Intelligence <br/>For <span class="gradient-text">High-Impact Careers.</span></h1>
                    <p class="hero-desc">HireSight AI analyzes resume structure, ATS compatibility, semantic relevance, and recruiter alignment to maximize interview potential.</p>
                    <div class="hero-actions">
                        <button class="btn btn-primary btn-lg" onclick="app.router.navigateTo('/analyzer')">Start Analysis Now</button>
                        <button class="btn btn-secondary btn-lg">View Sample Report</button>
                    </div>
                </div>
            </header>

            <section class="trusted-by">
                <div class="container">
                    <p>Powering career growth at</p>
                </div>
                <div class="marquee-container">
                    <div class="marquee-track">
                        <div class="marquee-content">
                            <div class="brand-item google">
                                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.62-.27-1.14-.62-1.58-1.09z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                                <span class="brand-name">Google</span>
                            </div>
                            <div class="brand-item microsoft">
                                <svg viewBox="0 0 23 23" width="18" height="18"><rect x="0" y="0" width="10" height="10" fill="#f25022"/><rect x="11.5" y="0" width="10" height="10" fill="#7fba00"/><rect x="0" y="11.5" width="10" height="10" fill="#00a4ef"/><rect x="11.5" y="11.5" width="10" height="10" fill="#ffb900"/></svg>
                                <span class="brand-name">Microsoft</span>
                            </div>
                            <div class="brand-item apple">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.25-.56 2.94-1.39z"/></svg>
                                <span class="brand-name">Apple</span>
                            </div>
                            <div class="brand-item openai">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M21.2 12.8a5.2 5.2 0 0 0-1.8-3.9 5.2 5.2 0 0 0 .5-4.2A5.2 5.2 0 0 0 16 2.3a5.2 5.2 0 0 0-3.9 1.8 5.2 5.2 0 0 0-4.2-.5A5.2 5.2 0 0 0 5.5 6a5.2 5.2 0 0 0-1.8 3.9 5.2 5.2 0 0 0-.5 4.2 5.2 5.2 0 0 0 3.9 2.5 5.2 5.2 0 0 0 3.9-1.8 5.2 5.2 0 0 0 4.2.5 5.2 5.2 0 0 0 4.4 15.6a5.2 5.2 0 0 0 1.8-3.9zM12 4.4c.5 0 1 .1 1.4.3L12 7.1V4.4zm.8 4.9l1.6-.9 1.6.9v1.9l-1.6.9-1.6-.9V9.3zm-3.6.9l1.6-.9v1.9l-1.6.9-1.6-.9v-1.9zm4.2 2.8l1.6-.9v1.9l-1.6.9-1.6-.9v-1.9zm-6.2-4.1c.3-.4.8-.7 1.3-.9l1.4 2.4-2.7-1.5zm.9 4.3l2.7-1.5v3.1l-2.7-1.6zm8.8.7l-2.7-1.5v-3.1l2.7 1.6v3zm-4.3 2.5l-1.4-2.4 2.7 1.5c-.3.4-.8.7-1.3.9zm-2.8 0c-.5-.2-1-.5-1.3-.9l2.7-1.5-1.4 2.4z"/></svg>
                                <span class="brand-name">OpenAI</span>
                            </div>
                            <div class="brand-item nvidia">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#76b900"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c-3 .5-6-1.5-6.5-4.5s1.5-6 4.5-6.5 6 1.5 6.5 4.5-1.5 6-4.5 6.5zm-1-7c-1.7.3-3 1.8-2.7 3.5.3 1.7 1.8 3 3.5 2.7 1.7-.3 3-1.8 2.7-3.5-.3-1.7-1.8-3-3.5-2.7z"/></svg>
                                <span class="brand-name">NVIDIA</span>
                            </div>
                            <div class="brand-item stripe">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#635bff"><path d="M13.962 2c-1.42 0-2.45.69-2.95 1.62L8.25 7.82c-.22.4-.42.92-.42 1.45 0 1.4.92 2.1 2.37 2.39l2.25.43c.85.16 1.13.43 1.13.88 0 .49-.49.79-1.25.79-1.02 0-1.92-.37-2.61-.75l-.94 1.94c.88.5 2.16.89 3.53.89 1.49 0 2.58-.69 3.08-1.63l2.75-5.18c.2-.39.42-.91.42-1.45 0-1.37-.92-2.1-2.38-2.39l-2.25-.43c-.85-.16-1.12-.43-1.12-.88 0-.49.49-.79 1.25-.79.88 0 1.76.28 2.38.62l.94-1.94C16.962 2.43 15.462 2 13.962 2z"/></svg>
                                <span class="brand-name">Stripe</span>
                            </div>
                            <div class="brand-item meta">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#0064e0"><path d="M16.91 3.82c-1.34 0-2.6.53-3.56 1.48L12 6.64l-1.35-1.34c-.96-.95-2.22-1.48-3.56-1.48s-2.6.53-3.56 1.48A5.02 5.02 0 0 0 2 8.86c0 1.34.53 2.6 1.48 3.56L12 20.91l8.52-8.49c.95-.96 1.48-2.22 1.48-3.56s-.53-2.6-1.48-3.56c-.96-.95-2.22-1.48-3.56-1.48M7.09 5.32c.94 0 1.82.37 2.5 1.04L12 8.76l2.41-2.4c.68-.67 1.56-1.04 2.5-1.04s1.82.37 2.5 1.04a3.52 3.52 0 0 1 0 5L12 18.79l-7.41-7.41a3.52 3.52 0 0 1 0-5c.68-.67 1.56-1.04 2.5-1.04z"/></svg>
                                <span class="brand-name">Meta</span>
                            </div>
                            <div class="brand-item amazon">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#ff9900"><path d="M3.05 14.4c4.8 3.5 12.1 3.5 16.9 0 .3-.2.6.2.3.4-5.3 4.1-12.8 4.1-18.1 0-.3-.2-.1-.6.2-.4zm17.6-2c-.3-1.4-1.7-2.3-3.1-2-.2 0-.3.2-.3.4l.4 1.9c.1.2.3.3.5.3 1 .1 1.7.9 1.5 1.9-.1.6-.6 1.1-1.2 1.2-.2 0-.3.2-.3.4l.2 1.9c0 .2.2.3.4.3 2.1-.2 3.6-2.1 3.4-4.2-.1-1-.5-1.9-1.2-2.4z"/></svg>
                                <span class="brand-name">Amazon</span>
                            </div>
                            <div class="brand-item netflix">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#e50914"><path d="M4 2v20h4V9.5l8 12.5h4V2h-4v12.5L8 2z"/></svg>
                                <span class="brand-name">Netflix</span>
                            </div>
                            <div class="brand-item adobe">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#ff0000"><path d="M14.7 2H22v20l-7.3-17.3zM9.3 2H2v20l7.3-17.3zM12 9.4L17 21h-3.3l-1.7-4.1H10l-1.7 4.1H5l7-11.6z"/></svg>
                                <span class="brand-name">Adobe</span>
                            </div>
                        </div>
                        <div class="marquee-content" aria-hidden="true">
                            <div class="brand-item google">
                                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.62-.27-1.14-.62-1.58-1.09z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                                <span class="brand-name">Google</span>
                            </div>
                            <div class="brand-item microsoft">
                                <svg viewBox="0 0 23 23" width="18" height="18"><rect x="0" y="0" width="10" height="10" fill="#f25022"/><rect x="11.5" y="0" width="10" height="10" fill="#7fba00"/><rect x="0" y="11.5" width="10" height="10" fill="#00a4ef"/><rect x="11.5" y="11.5" width="10" height="10" fill="#ffb900"/></svg>
                                <span class="brand-name">Microsoft</span>
                            </div>
                            <div class="brand-item apple">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.25-.56 2.94-1.39z"/></svg>
                                <span class="brand-name">Apple</span>
                            </div>
                            <div class="brand-item openai">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M21.2 12.8a5.2 5.2 0 0 0-1.8-3.9 5.2 5.2 0 0 0 .5-4.2A5.2 5.2 0 0 0 16 2.3a5.2 5.2 0 0 0-3.9 1.8 5.2 5.2 0 0 0-3.9-.5A5.2 5.2 0 0 0 5.5 6a5.2 5.2 0 0 0-1.8 3.9 5.2 5.2 0 0 0-.5 4.2 5.2 5.2 0 0 0 3.9 2.5 5.2 5.2 0 0 0 3.9-1.8 5.2 5.2 0 0 0 4.2.5 5.2 5.2 0 0 0 4.4 15.6a5.2 5.2 0 0 0 1.8-3.9zM12 4.4c.5 0 1 .1 1.4.3L12 7.1V4.4zm.8 4.9l1.6-.9 1.6.9v1.9l-1.6.9-1.6-.9V9.3zm-3.6.9l1.6-.9v1.9l-1.6.9-1.6-.9v-1.9zm4.2 2.8l1.6-.9v1.9l-1.6.9-1.6-.9v-1.9zm-6.2-4.1c.3-.4.8-.7 1.3-.9l1.4 2.4-2.7-1.5zm.9 4.3l2.7-1.5v3.1l-2.7-1.6zm8.8.7l-2.7-1.5v-3.1l2.7 1.6v3zm-4.3 2.5l-1.4-2.4 2.7 1.5c-.3.4-.8.7-1.3.9zm-2.8 0c-.5-.2-1-.5-1.3-.9l2.7-1.5-1.4 2.4z"/></svg>
                                <span class="brand-name">OpenAI</span>
                            </div>
                            <div class="brand-item nvidia">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#76b900"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c-3 .5-6-1.5-6.5-4.5s1.5-6 4.5-6.5 6 1.5 6.5 4.5-1.5 6-4.5 6.5zm-1-7c-1.7.3-3 1.8-2.7 3.5.3 1.7 1.8 3 3.5 2.7 1.7-.3 3-1.8 2.7-3.5-.3-1.7-1.8-3-3.5-2.7z"/></svg>
                                <span class="brand-name">NVIDIA</span>
                            </div>
                            <div class="brand-item stripe">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#635bff"><path d="M13.962 2c-1.42 0-2.45.69-2.95 1.62L8.25 7.82c-.22.4-.42.92-.42 1.45 0 1.4.92 2.1 2.37 2.39l2.25.43c.85.16 1.13.43 1.13.88 0 .49-.49.79-1.25.79-1.02 0-1.92-.37-2.61-.75l-.94 1.94c.88.5 2.16.89 3.53.89 1.49 0 2.58-.69 3.08-1.63l2.75-5.18c.2-.39.42-.91.42-1.45 0-1.37-.92-2.1-2.38-2.39l-2.25-.43c-.85-.16-1.12-.43-1.12-.88 0-.49.49-.79 1.25-.79.88 0 1.76.28 2.38.62l.94-1.94C16.962 2.43 15.462 2 13.962 2z"/></svg>
                                <span class="brand-name">Stripe</span>
                            </div>
                            <div class="brand-item meta">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#0064e0"><path d="M16.91 3.82c-1.34 0-2.6.53-3.56 1.48L12 6.64l-1.35-1.34c-.96-.95-2.22-1.48-3.56-1.48s-2.6.53-3.56 1.48A5.02 5.02 0 0 0 2 8.86c0 1.34.53 2.6 1.48 3.56L12 20.91l8.52-8.49c.95-.96 1.48-2.22 1.48-3.56s-.53-2.6-1.48-3.56c-.96-.95-2.22-1.48-3.56-1.48M7.09 5.32c.94 0 1.82.37 2.5 1.04L12 8.76l2.41-2.4c.68-.67 1.56-1.04 2.5-1.04s1.82.37 2.5 1.04a3.52 3.52 0 0 1 0 5L12 18.79l-7.41-7.41a3.52 3.52 0 0 1 0-5c.68-.67 1.56-1.04 2.5-1.04z"/></svg>
                                <span class="brand-name">Meta</span>
                            </div>
                            <div class="brand-item amazon">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#ff9900"><path d="M3.05 14.4c4.8 3.5 12.1 3.5 16.9 0 .3-.2.6.2.3.4-5.3 4.1-12.8 4.1-18.1 0-.3-.2-.1-.6.2-.4zm17.6-2c-.3-1.4-1.7-2.3-3.1-2-.2 0-.3.2-.3.4l.4 1.9c.1.2.3.3.5.3 1 .1 1.7.9 1.5 1.9-.1.6-.6 1.1-1.2 1.2-.2 0-.3.2-.3.4l.2 1.9c0 .2.2.3.4.3 2.1-.2 3.6-2.1 3.4-4.2-.1-1-.5-1.9-1.2-2.4z"/></svg>
                                <span class="brand-name">Amazon</span>
                            </div>
                            <div class="brand-item netflix">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#e50914"><path d="M4 2v20h4V9.5l8 12.5h4V2h-4v12.5L8 2z"/></svg>
                                <span class="brand-name">Netflix</span>
                            </div>
                            <div class="brand-item adobe">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#ff0000"><path d="M14.7 2H22v20l-7.3-17.3zM9.3 2H2v20l7.3-17.3zM12 9.4L17 21h-3.3l-1.7-4.1H10l-1.7 4.1H5l7-11.6z"/></svg>
                                <span class="brand-name">Adobe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features" id="features">
                <div class="container py-xl">
                    <div class="section-header center mb-3xl">
                        <h2 class="gradient-text">Engineered for Success</h2>
                        <p class="max-600 center">Deep-tech features designed by AI engineers to give you an unfair advantage in the job market.</p>
                    </div>
                    <div class="grid grid-3">
                        <div class="card feature-card">
                            <div class="feature-icon">🔍</div>
                            <h3>ATS Ghosting Detection</h3>
                            <p class="small">Identify specific sections causing parsing errors in legacy ATS software.</p>
                        </div>
                        <div class="card feature-card">
                            <div class="feature-icon">🎯</div>
                            <h3>Semantic Match Engine</h3>
                            <p class="small">Go beyond keywords. Our AI understands your impact and career trajectory.</p>
                        </div>
                        <div class="card feature-card">
                            <div class="feature-icon">✨</div>
                            <h3>Real-time Calibration</h3>
                            <p class="small">Interactive suggestions to rephrase your experience for target roles.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
};

Home.init = () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
};
