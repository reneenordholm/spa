class TradesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/trades'
    }

    getTrades() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}