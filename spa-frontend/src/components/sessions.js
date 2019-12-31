class Sessions {
    constructor() {
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
              endSession(event)
              console.log("end session")
            })
          }

        // When the user clicks anywhere outside of the login modal, close it
        window.onclick = function(event) {
            if (event.target == this.modal) {
                this.modal.style.display = "none";
            }
        }
    }

    // check session status
    sessionStatus() {
        if (this.user === "reneenordholm@gmail.com") {
            this.buttonText.setAttribute("id", "logout-button")
            this.buttonText.innerText = "Logout"
            this.buttonText.addEventListener('click', event => { endSession(event) })  
            console.log("session status logged in")
        } else {
            this.buttonText.innerText = "Login";
            this.buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
            console.log("session status logged out")
        }
    }



    // reset button values if page is refreshed while still logged in
    resetStatus() {
        this.buttonText.innerHTML = "Login";
        this.buttonText.setAttribute("id", "main-login-button")
        this.buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
        console.log("reset status")
    }
}