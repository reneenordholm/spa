// Login
// Get the modal
var modal = document.getElementById('id01');

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
// 'POST' request to create new toy objects
function postTest(event) {
    event.preventDefault(event)
    const form = document.getElementsByClassName('modal-content animate')[0]
    return fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: form[0].value,
        password: form[1].value
      })
    })
    .then(response => {
      // console.log(response.data)
      // localStorage.setItem("user", JSON.stringify(response.data));
      // console.log(localStorage)
      // console.log(localStorage.loggedIn)
      return response.json()

    })
    .then(function(json) {
      if (json.renee) {
        renderEditMode(json)
      } else {
        renderLoginFailed(json)
      }
    })
  }

  function renderEditMode(json) {
    // const buttonText = document.getElementById('login-button')
    // buttonText.innerText = "Hi Renee";

    modal.style.display = "none";
    console.log("Login Successful")
  }

  function renderLoginFailed(json) {
    console.log("Login Failed")
  }

// DELETE request to logout 




