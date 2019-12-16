class Trades {
    constructor() {
        // this.trades = []
        this.adapter = new TradesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadTrades()
    }

    // use adapter to make call to backend api
    // send result to render method
    fetchAndLoadTrades() {
        this.adapter
            .getTrades()
            .then(trades => 
                this.renderTrades(trades))
    }

    // render all trades appropriately
    renderTrades(trades) {
        // for each trade
        for(const trade in trades){
            // add object to page by type
            if (trades[trade]['trade_type'] === "about") {
                const about = document.querySelector('div.about')
                const pImg = document.createElement('IMG')
                pImg.setAttribute("src", trades[trade]['img'])
                pImg.setAttribute("width", "400")
                pImg.setAttribute("class", "box")
                about.appendChild(pImg)

                const p = document.createElement('p')
                p.innerText = trades[trade]['description']
                p. setAttribute("class", "box")
                about.appendChild(p)
            } 
        }
    }
}