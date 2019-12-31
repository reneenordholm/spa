class Trades {
    constructor() {
        this.trades = []
        this.adapter = new LoginAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadTrades()
    }

    // use adapter to make call to backend api
    // send result to render method
    fetchAndLoadTrades() {
        this.adapter
            .getTrades()
            .then(trades => {
                trades.forEach(trade => this.trades.push(new Trade(trade)))
            })
            .then(() => {
                this.renderTrades()
            })
    }

    // render all trades appropriately
    renderTrades() {
        return this.trades.map(trade => trade.renderTrade())
    }
}