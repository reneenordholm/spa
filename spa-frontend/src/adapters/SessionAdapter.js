// connect frontend to backend API
class SessionAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/sessions'
        this.bindEventListeners()
        this.sessionStatus()
    }

    bindEventListeners() {
        this.modal = document.getElementById('id01');
        this.user = localStorage.getItem("user")
        this.buttonText = document.getElementById('main-login-button')
        this.form = document.getElementsByClassName('modal-content animate')[0]

        if (document.getElementById('logout-button')) {
            this.logoutButton = document.getElementById('logout-button')
            this.logoutButton.addEventListener('click', event => {
                this.endSession(event)
              console.log("end session")
            })
        }

        // listen for login request after credentials are entered
        this.submit = document.getElementById('login-button')
        this.submit.addEventListener('click', event => {this.startSession(event)})

        // When the user clicks anywhere outside of the login modal, close it
        this.windowClick = window
        this.windowClick.addEventListener('click', event => { 
            if (event.target == this.modal) {
                this.modal.style.display = "none";
            }
        })
    }
    
    get headers(){
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    // POST request to login
    async startSession(event) {
        event.preventDefault(event)
        const response = await fetch(`${this.baseUrl}`, {
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
            this.renderEditMode()
            this.form.reset()
            console.log("session started")
        } else {
            this.renderLoginFailed(json);
        }
    }

    // logged in and show edit buttons
    renderEditMode() {
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
        const response = await fetch(`${this.baseUrl}`, {
        method: "DELETE",
        headers: this.headers
        });
        const json = await response.json()
            localStorage.clear()
            this.resetStatus()
            console.log("session ended")
    }

    // reset button values if page is refreshed while still logged in
    resetStatus() {
        this.buttonText.innerHTML = "Login";
        this.buttonText.setAttribute("id", "main-login-button")
        this.buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
        console.log("reset status")
    }

    // check session status
    sessionStatus() {
        if (this.user === "reneenordholm@gmail.com") {
            this.buttonText.setAttribute("id", "logout-button")
            this.buttonText.innerText = "Logout"
            this.buttonText.addEventListener('click', (event => {this.endSession(event)}))  
            console.log("session status logged in")
        } else {
            this.buttonText.innerText = "Login";
            this.buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
            console.log("session status logged out")
        }
    }
}
