//on page load
document.addEventListener('DOMContentLoaded', () => {
    new App()    
})

// async function fetchTrades() {
//     const resp = await fetch('http://localhost:3000/trades');
//     const json = await resp.json();
//     new App(json)
// }


  
// // When a user loads the page
// // 'GET' request to fetch all the objects
// async function fetchTrades() {
//     const resp = await fetch(TRADES_URL);
//     const json = await resp.json();
//     renderTrades(json)
// }
  
// // // show all trades in correct order
// function renderTrades(json) {
//     // for each trade
//     for(const trade in json){
//         // add object to page depending on type
//         if (json[trade]["trade_type"] === "about") {
//             const about = document.querySelector('div.about')
//             const pImg = document.createElement('IMG')
//             pImg.setAttribute("src", json[trade]["img"])
//             pImg.setAttribute("width", "400")
//             pImg.setAttribute("class", "box")
//             about.appendChild(pImg)

//             const p = document.createElement('p')
//             p.innerText = `${json[trade]["description"]}`
//             p. setAttribute("class", "box")
//             about.appendChild(p)
//         }
//     }
// }

