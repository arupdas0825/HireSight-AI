export const Analyzer = () => {
    return `
        <div class="analyzer-page fade-in">
            <div class="container py-xl">
                <div class="dashboard-header mb-xl">
                    <button class="btn btn-ghost" onclick="app.router.navigateTo('/')">← Back to Home</button>
                    <h2>Resume Intelligence Dashboard</h2>
                </div>
                <div class="dashboard-layout">
                    <div class="sidebar card">
                        <h3>Analysis Panel</h3>
                        <div class="upload-area" id="drop-zone">
                            <div class="upload-icon">↑</div>
                            <p>Upload Resume</p>
                            <span>PDF or DOCX</span>
                        </div>
                        <div class="divider"><span>OR</span></div>
                        <textarea placeholder="Paste resume text..."></textarea>
                    </div>
                    <div class="main-content">
                        <div class="card target-card">
                            <h3>Target Role</h3>
                            <p>Paste the job description below</p>
                            <textarea class="jd-input" placeholder="Role requirements, responsibilities..."></textarea>
                            <div class="actions">
                                <button class="btn btn-primary" onclick="window.app.state.setState({isLoading: true})">Run AI Analysis</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};
