// connect frontend to backend API
class SessionAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/sessions'
        this.bindEventListeners()
        this.sessionStatus()
        // this.authSetup()
        // this.csrf = null
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
            //   console.log("end session")
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
            // 'X-CSRF-TOKEN': this.csrf
        }
    }

    // POST request to login
    async startSession(event) {
        event.preventDefault(event)
        const response = await fetch(`${this.baseUrl}`, {
        method: "POST",
        headers: this.headers,
        // credentials: 'include',
        body: JSON.stringify({
            email: this.form[0].value,
            password: this.form[1].value
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

    // if log in fails
    renderLoginFailed(json) {
        console.log(json)
    }

    //delete request to clear session and localStorage
    async endSession(event) {
        event.preventDefault(event)
        const response = await fetch(`${this.baseUrl}`, {
        method: "DELETE",
        headers: this.headers,
        // credentials: 'include'
        });
        // const json = await response.json()
        // this.authSetup()
        localStorage.clear()
        location.reload()
            // console.log("session ended")
    }

    // async authSetup(){
    //     const res = await fetch('http://localhost:3000/auth-check',{
    //         credentials: 'include'
    //     })
    //     const body = await res.json()
    //     this.csrf = body.csrf_auth_token
    // }

    // check session status
    sessionStatus() {
        if (this.user === "reneenordholm@gmail.com") {
            this.buttonText.setAttribute("id", "logout-button")
            this.buttonText.innerText = "Logout"
            this.buttonText.addEventListener('click', (event => {this.endSession(event)}))  
            // console.log("session status logged in")
        } else {
            this.buttonText.innerText = "";
            this.buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
            // console.log("session status logged out")
        }
    }
}

