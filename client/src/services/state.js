export class State {
    constructor() {
        this.currentView = 'home';
        this.resumeData = null;
        this.analysisResult = null;
        this.isLoading = false;
        this.listeners = [];
    }

    setState(newState) {
        this.currentView = newState.currentView || this.currentView;
        this.resumeData = newState.resumeData || this.resumeData;
        this.analysisResult = newState.analysisResult || this.analysisResult;
        this.isLoading = typeof newState.isLoading !== 'undefined' ? newState.isLoading : this.isLoading;
        this.notify();
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }

    notify() {
        this.listeners.forEach(callback => callback(this));
    }
}
