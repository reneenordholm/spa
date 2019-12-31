const modal = document.getElementById('id01');
const user = localStorage.getItem("user")
const buttonText = document.getElementById('main-login-button')

if (document.getElementById('logout-button')) {
  const logoutButton = document.getElementById('logout-button')
  logoutButton.addEventListener('click', event => {
    endSession(event)
    console.log("end session")
  })
}

// load session status on page load
document.addEventListener('DOMContentLoaded', () => {
  sessionStatus()   
  console.log("page load")
})

// When the user clicks anywhere outside of the login modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// listen for login request after credentials are entered
const submit = document.getElementById('login-button')
submit.addEventListener('click', event => {
    startSession(event)
    console.log("start session")
  })

// POST request to login
async function startSession(event) {
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
    console.log("session started")
  }
  else {
    renderLoginFailed(json);
  }
}

// if log in fails
function renderLoginFailed(json) {
  console.log("Login Failed")
}

// logged in and show edit buttons
function renderEditMode(json) {
  modal.style.display = "none";
  buttonText.setAttribute("id", "logout-button")
  buttonText.removeAttribute("onclick")
  buttonText.innerText = "Logout"
  buttonText.addEventListener('click', event => { endSession(event) })  
  console.log("logged in, edit mode")
}

//delete request to clear session and localStorage
async function endSession(event) {
  event.preventDefault(event)
  const response = await fetch(`http://localhost:3000/sessions`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });
  const json = await response.json()
    localStorage.clear();
    resetStatus()
    console.log("session ended")
}

// reset button values if page is refreshed while still logged in
function resetStatus() {
  buttonText.innerHTML = "Login";
  buttonText.setAttribute("id", "main-login-button")
  buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
  console.log("reset status")
}

// check session status
function sessionStatus() {
  if (user === "reneenordholm@gmail.com") {
    buttonText.setAttribute("id", "logout-button")
    buttonText.innerText = "Logout"
    buttonText.addEventListener('click', event => { endSession(event) })  
    console.log("session status logged in")
  } else {
    buttonText.innerText = "Login";
    buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
    console.log("session status logged out")
  }
}
