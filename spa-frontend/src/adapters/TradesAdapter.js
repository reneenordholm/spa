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

    get headers(){
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    // PATCH request to save edit
    async updateTrade(form) {
        const res = await fetch(`${this.baseUrl}/${form.dataset.id}`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
            img: form.img.value,
            description: form.description.value
        })
    });
        const json = await res.json()
        location.reload()
    }
}