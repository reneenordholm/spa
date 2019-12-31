// connect frontend to backend API
class LoginAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/sessions'
    }

    // POST request to login
    async startSession(event) {
        event.preventDefault(event)
        const form = document.getElementsByClassName('modal-content animate')[0]
        const response = await fetch("http://localhost:3000/sessions", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
        email: form[0].value,
        password: form[1].value
        })
    });
    // upon successful login set user as localStorage key
    const json = await response.json();
        if (json.renee) {
        localStorage.setItem("user", json.renee.email);
        renderEditMode(json);
        // console.log("session started")
        }
        else {
        renderLoginFailed(json);
        }
    }

    //delete request to clear session and localStorage
    async endSession(event) {
        event.preventDefault(event)
        const response = await fetch(`http://localhost:3000/sessions`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        });
        const json = await response.json()
        console.log(json)
        localStorage.clear();
        resetStatus()
        // console.log("session ended")
    }
}

