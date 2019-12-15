class Trades {
    constructor() {
        this.trades = []
        this.adapter = new TradesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadTrades()
    }

    fetchAndLoadTrades() {
        this.adapter.getTrades().then(trades => this.renderTrades(trades))
    }

    renderTrades(trades) {
        // for each trade
        for(const trade in trades){
            // add object to page depending on type
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