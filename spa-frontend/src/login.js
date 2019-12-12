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


const BASE_URL = "http://localhost:3000"
const TRADES_URL = `${BASE_URL}/trades`

console.log(TRADES_URL)

//on page load
document.addEventListener('DOMContentLoaded', function(event) {
    console.log(event)
    console.log('DOM fully loaded and parsed');
    fetchTrades();
  })
  
// When a user loads the page
// 'GET' request to fetch all the objects
async function fetchTrades() {
    console.log("fetch")
    const resp = await fetch(TRADES_URL);
    console.log(resp)
    const json = await resp.json();
    console.log(json);
    renderTrades(json)
}
  
// // show all trades in correct order
function renderTrades(json) {
        console.log(json);
//     // for each trade
    // for(const trade in json){
//         // add object to page depending on type
//         if (json[trade]["trade_type"] === "about") {
//             console.log(json[trade]["img"])
//             // const about = document.getElementsByClassName('about')
//             // const pImg = document.createElement('IMG')
//             // pImg.setAttribute("src", json[trade]["img"])
//             // pImg.setAttribute("width", "150")
//             // pImg.setAttribute("class", "profile-image")
//             // about.appendChild(pImg)
//         }
    // }
}

