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
            'X-CSRF-TOKEN': this.csrf
        }
    }

    // PATCH request to save edit
    async updateTrade(form) {
        if (form.title.value) {
            const res = await fetch(`${this.baseUrl}/${form.dataset.id}`, {
                method: "PATCH",
                headers: this.headers,
                credentials: 'include',
                body: JSON.stringify({
                    img: form.img.value,
                    description: form.description.value,
                    title: form.title.value
                })
            });
            const json = await res.json()
        } else {
            const res = await fetch(`${this.baseUrl}/${form.dataset.id}`, {
                method: "PATCH",
                headers: this.headers,
                credentials: 'include',
                body: JSON.stringify({
                    img: form.img.value,
                    description: form.description.value
                })
            });
            const json = await res.json()

        }
        location.reload()
    }
}