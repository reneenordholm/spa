class Session {
    constructor () {
        this.adapter = new SessionsAdapter()
        this.bindEventListeners()
        this.sessionStatus()
    }

    bindEventListeners() {
        this.modal = document.getElementById('id01');
        this.user = localStorage.getItem("user")
        this.buttonText = document.getElementById('main-login-button')

        if (document.getElementById('logout-button')) {
            this.logoutButton = document.getElementById('logout-button')
            this.logoutButton.addEventListener('click', event => {
                this.adapter.endSession(event)
              console.log("end session")
            })
          }

        // listen for login request after credentials are entered
        this.submit = document.getElementById('login-button')
        this.submit.addEventListener('click', event => { this.adapter.startSession(event) })
    
        // When the user clicks anywhere outside of the login modal, close it
        window.onclick = function(event) {
            if (event.target == this.modal) {
                this.modal.style.display = "none";
            }
        }
    }
    
    // // logged in and show edit buttons
    // static renderEditMode(json) {
    //     console.log(this)
    //     console.log(this.modal)
    //     this.modal.style.display = "none";
    //     this.buttonText.setAttribute("id", "logout-button")
    //     this.buttonText.removeAttribute("onclick")
    //     this.buttonText.innerText = "Logout"
    //     this.buttonText.addEventListener('click', event => { this.adapter.endSession(event) })  
    //     console.log("logged in, edit mode")
    // }

    // reset button values if page is refreshed while still logged in
    resetStatus() {
        this.buttonText.innerHTML = "Login";
        this.buttonText.setAttribute("id", "main-login-button")
        this.buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
        // this.sessionStatus()
        console.log("reset status")
    }

    // check session status
    sessionStatus() {
        if (this.user === "reneenordholm@gmail.com") {
            this.buttonText.setAttribute("id", "logout-button")
            this.buttonText.innerText = "Logout"
            this.buttonText.addEventListener('click', this.adapter.endSession.bind(this))  
            console.log("session status logged in")
        } else {
            // this.resetStatus()
            this.buttonText.innerText = "Login";
            this.buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
            console.log("session status logged out")
        }
    }

}