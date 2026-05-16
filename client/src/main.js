import './styles/main.css';
import { State } from './services/state.js';
import { Router } from './services/router.js';

class App {
    constructor() {
        this.state = new State();
        this.router = new Router(this.state);
        this.init();
    }

    init() {
        console.log('HireSight AI Initialized');
        
        // Apply persisted theme, default to 'light'
        const savedTheme = localStorage.getItem('hs-theme') || 'light';
        this.setTheme(savedTheme);

        this.router.handleRoute();
        window.addEventListener('popstate', () => this.router.handleRoute());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('hs-theme', theme);
        this.currentTheme = theme;
        // Re-initialize icons after theme change if needed (some icons might change color/style)
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    toggleTheme() {
        const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(nextTheme);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
