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
        this.router.handleRoute();
        window.addEventListener('popstate', () => this.router.handleRoute());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
