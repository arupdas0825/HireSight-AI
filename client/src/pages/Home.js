export const Home = () => {
    return `
        <div class="home-page fade-in">
            <nav class="navbar">
                <div class="container">
                    <div class="logo">
                        <img src="/logo.png" alt="HireSight AI Logo" class="brand-logo">
                        HireSight<span>AI</span>
                    </div>
                    <div class="nav-links">
                        <a href="#features">Features</a>
                        <button class="btn btn-primary" onclick="app.router.navigateTo('/analyzer')">Start Analysis</button>
                    </div>
                </div>
            </nav>

            <header class="hero">
                <div class="container">
                    <div class="badge">AI-Powered ATS Intelligence</div>
                    <h1>Analyze. Match. <span class="gradient-text">Get Hired.</span></h1>
                    <p class="hero-desc">The professional grade resume analyzer that thinks like a recruiter. Land your dream role with precision.</p>
                    <div class="hero-actions">
                        <button class="btn btn-primary btn-lg" onclick="app.router.navigateTo('/analyzer')">Analyze My Resume</button>
                    </div>
                </div>
            </header>

            <section class="trusted-by">
                <div class="container">
                    <p>Trusted by professionals from</p>
                    <div class="logo-grid">
                        <span>Google</span><span>Meta</span><span>Amazon</span><span>Stripe</span>
                    </div>
                </div>
            </section>
        </div>
    `;
};
