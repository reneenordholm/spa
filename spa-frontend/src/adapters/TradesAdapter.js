// connect frontend to backend API
class TradesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/trades'
    }

    // fetch and parse json from base url
    async getTrades() {
        const res = await fetch(this.baseUrl)
        return await res.json()
    }
}