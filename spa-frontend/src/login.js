// Login
// Get the modal
const modal = document.getElementById('id01');
const user = localStorage.getItem("user")

document.addEventListener('DOMContentLoaded', () => {
  endSession()   
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
    const buttonText = document.getElementById('main-login-button')
    buttonText.innerText = "Logout";
    const logoutButton = modal.querySelector('button')
    logoutButton.addEventListener("click", localStorage.clear())
  }

  function renderLoginFailed(json) {
    console.log("Login Failed")
  }

// DELETE request to logout 
function endSession() {
  if (localStorage.getItem("user") === "reneenordholm@gmail.com") {
    // localStorage.clear()

    console.log(user)
    console.log("Logged in")
  } else {
    // localStorage.clear()
    console.log(user)
    console.log("Logged out")

  }
}



