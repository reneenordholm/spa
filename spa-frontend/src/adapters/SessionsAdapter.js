// connect frontend to backend API
class SessionsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/sessions'
        this.eventListeners()
    }

    eventListeners() {
        // listen for login request after credentials are entered
        this.submit = document.getElementById('login-button')
        this.submit.addEventListener('click', this.startSession.bind(this))
    }

    // POST request to login
    async startSession(event) {
        event.preventDefault(event)
        const form = document.getElementsByClassName('modal-content animate')[0]
        const response = await fetch('http://localhost:3000/sessions', {
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
            this.renderEditMode(json);
            console.log("session started")
        }
        else {
            this.renderLoginFailed(json);
        }
    }

    // if log in fails
    renderLoginFailed(json) {
        console.log(json)
    }

    // logged in and show edit buttons
    renderEditMode(json) {
        this.modal.style.display = "none";
        this.buttonText.setAttribute("id", "logout-button")
        this.buttonText.removeAttribute("onclick")
        this.buttonText.innerText = "Logout"
        this.buttonText.addEventListener('click', event => { endSession(event) })  
        console.log("logged in, edit mode")
    }

    //delete request to clear session and localStorage
    async endSession(event) {
        event.preventDefault(event)
        const response = await fetch(this.BaseUrl, {
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
        console.log("session ended")
    }
}

