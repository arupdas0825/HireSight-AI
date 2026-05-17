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
                    <div class="logo-grid">
                        <span>Google</span>
                        <span>Meta</span>
                        <span>Amazon</span>
                        <span>Stripe</span>
                        <span>Netflix</span>
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
