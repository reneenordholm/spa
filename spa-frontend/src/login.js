const modal = document.getElementById('id01');
const user = localStorage.getItem("user")
const buttonText = document.getElementById('main-login-button')

// load session status on page load
document.addEventListener('DOMContentLoaded', () => {
  sessionStatus()   
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// listen for login request after credentials are entered
const submit = document.getElementById('login-button')
submit.addEventListener('click', event => {
    startSession(event)
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
  }
  else {
    renderLoginFailed(json);
  }
}

// logged in and show edit buttons
function renderEditMode(json) {
  modal.style.display = "none";
  buttonText.id = "logout-button"
  buttonText.removeAttribute("onclick")
  buttonText.innerText = "Logout"
  buttonText.addEventListener('click', event => {endSession(event) })  
}

// if log in fails
function renderLoginFailed(json) {
  console.log("Login Failed")
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
    sessionStatus();
}

// check session status
function sessionStatus() {
  if (user === "reneenordholm@gmail.com") {
    buttonText.setAttribute("onclick", "document.getElementById('logout-button')")
    buttonText.id = "logout-button"
    buttonText.addEventListener('click', event => {endSession(event) })  
    buttonText.innerText = "Logout"
  } else {
    buttonText.innerText = "Login";
    buttonText.setAttribute("onclick", "document.getElementById('id01').style.display='block'")
  }
}



