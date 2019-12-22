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
    const form = document.getElementsByClassName('container')

    console.log(event)
    console.log(form)
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: event.email.value,
        password: event.password.value
      })
    })
    .then(function(response) { 
      return response.json()
    })
    .then(function(json) {
      console.loog(json)
    })
  }

// DELETE request to logout 




