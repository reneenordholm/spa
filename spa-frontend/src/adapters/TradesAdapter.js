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
    async editTrade(event) {
        event.preventDefault(event)
        const editForm = document.getElementsByClassName('edit-modal-content edit-animate')[0]
        const response = await fetch(`${this.baseUrl}/update`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
            // id: 
            img: editForm.img.value,
            description: editForm.description.value
        })
    });
    // upon successful login set user as localStorage key
    const json = await response.json();
        if (json.renee) {
            localStorage.setItem("user", json.renee.email);
            location.reload()
            // console.log("session started")
        } else {
            this.renderLoginFailed(json);
        }
    }
}