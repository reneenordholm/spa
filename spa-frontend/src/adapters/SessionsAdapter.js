// connect frontend to backend API
class SessionsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/sessions'
        // this.csrf = null
        this.bindListeners()
    }

    bindListeners() {
        this.form = document.getElementsByClassName('modal-content animate')[0]
        this.modal = document.getElementById('id01');
        this.buttonText = document.getElementById('main-login-button')
    }
    
    get headers(){
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'X-CSRF-TOKEN': this.csrf
        }
    }

    // POST request to login
    async startSession(event) {
        event.preventDefault(event)
        const response = await fetch('http://localhost:3000/sessions', {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
            email: this.form[0].value,
            password: this.form[1].value
        })
    });
    // upon successful login set user as localStorage key
    const json = await response.json();
        if (json.renee) {
            localStorage.setItem("user", json.renee.email);
            this.renderEditMode(json)
            console.log("session started")
        } else {
            this.renderLoginFailed(json);
        }
    }

    // logged in and show edit buttons
    renderEditMode(json) {
        this.modal.style.display = "none";
        this.buttonText.setAttribute("id", "logout-button")
        this.buttonText.removeAttribute("onclick")
        this.buttonText.innerText = "Logout"
        this.buttonText.addEventListener('click', (event => {this.endSession(event)}))  
        console.log("logged in, edit mode")
    }

    // if log in fails
    renderLoginFailed(json) {
        console.log(json)
    }

    //delete request to clear session and localStorage
    async endSession(event) {
        event.preventDefault(event)
        const response = await fetch('http://localhost:3000/sessions', {
        method: "DELETE",
        headers: this.headers
        });
        const json = await response.json()
            console.log(json)
            localStorage.clear()
            this.resetStatus()
            console.log("session ended")
    }

        // reset button values if page is refreshed while still logged in
        resetStatus() {
            this.buttonText.innerHTML = "Login";
            this.buttonText.setAttribute("id", "main-login-button")
            this.buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
            // this.sessionStatus()
            console.log("reset status")
        }
}

