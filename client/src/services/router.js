import { Home } from '../pages/Home.js';
import { Analyzer } from '../pages/Analyzer.js';

export class Router {
    constructor(state) {
        this.state = state;
        this.appContainer = document.getElementById('app');
        this.routes = {
            'home': Home,
            'analyzer': Analyzer
        };
    }

    async handleRoute() {
        const path = window.location.pathname;
        let view = 'home';

        if (path === '/analyzer') view = 'analyzer';
        if (path === '/results') view = 'results';

        this.state.setState({ currentView: view });
        this.render(view);
    }

    navigateTo(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }

    render(view) {
        const PageComponent = this.routes[view] || Home;
        this.appContainer.innerHTML = PageComponent();
        
        // Execute page-specific initialization if it exists
        if (PageComponent.init) {
            PageComponent.init();
        }
    }
}
