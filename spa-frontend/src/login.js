// Login
// Get the modal
const modal = document.getElementById('id01');
const user = localStorage.getItem("user")
const buttonText = document.getElementById('main-login-button')

document.addEventListener('DOMContentLoaded', () => {
  sessionStatus()   
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const submit = document.getElementById('login-button')
submit.addEventListener('click', event => {
    postTest(event)
  })

// POST request to login
async function postTest(event) {
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
  const json = await response.json();
    if (json.renee) {
      localStorage.setItem("user", json.renee.email);
      renderEditMode(json);
    }
    else {
      renderLoginFailed(json);
    }
  }

  function renderEditMode(json) {
    modal.style.display = "none";
    console.log("Login Successful")
    console.log(localStorage.getItem("user"))
    buttonText.id = "logout-button"
    buttonText.innerText = "Logout"    
  }

  function renderLoginFailed(json) {
    console.log("Login Failed")
  }


// DELETE request to logout 
function sessionStatus() {
  if (user === "reneenordholm@gmail.com") {
    console.log(user)
    buttonText.id = "logout-button"
    buttonText.innerText = "Logout"
    console.log("Logged in")
  } else {
    localStorage.clear()
    modal.style.display = "none";
    buttonText.innerText = "Login";
    console.log(user)
    console.log("Logged out")
  }
}

const logoutButton = document.getElementById('logout-button')
if (logoutButton) {
  logoutButton.addEventListener('click', endSession())
}

function endSession() {
  modal.style.display = "none";
  localStorage.clear()
  sessionStatus()
}



