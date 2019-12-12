const BASE_URL = "http://localhost:3000"
const TRADES_URL = `${BASE_URL}/trades`

// on page load
// 'GET' request to fetch all the trade objects
return document.addEventListener('DOMContentLoaded', async function() {
    console.log("Loaded")
    const resp = await fetch("http://localhost:3000/trades")
    console.log(resp)
    const json = await resp.json()
    console.log(json)
    // return `${json}`
  })
  
// show all trades in correct order
function renderTrades(json) {

    // for each trade
    for(const trade in json){
        // add object to page depending on type
        if (json[trade]["trade_type"] === "about") {
            const about = document.getElementsByClassName("about")
            const profileImage = document.createElement("img")
            profileImage.src = json[trade]["img"]
            about.appendChild(profileImage)
        }
    }
}




// Login
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// POST request to login


// DELETE request to logout 
