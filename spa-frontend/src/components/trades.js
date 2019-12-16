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
                pImg.setAttribute("style", "width:50%")
                pImg.setAttribute("class", "box")
                about.appendChild(pImg)

                const p = document.createElement('p')
                p.innerText = trades[trade]['description']
                // p.setAttribute("style", "width:50%")
                p. setAttribute("class", "box")
                about.appendChild(p)
            } else if (trades[trade]['trade_type'] === "work") {
                const work = document.querySelector('div.work')

                const row = document.createElement('div')
                row.setAttribute("class", "row")
                work.appendChild(row)

                const column = document.createElement('div')
                column.setAttribute("class", "column")
                row.appendChild(column)

                const content = document.createElement('div')
                content.setAttribute("class", "content")
                column.appendChild(content)
                
                const wImg = document.createElement('IMG')
                wImg.setAttribute("src", trades[trade]['img'])
                wImg.setAttribute("style", "width:100%")
                content.appendChild(wImg)

                const wHeader = document.createElement('H3')
                wHeader.innerText = trades[trade]['title']
                content.appendChild(wHeader)

                const wDesc = document.createElement('p')
                wDesc.innerText = trades[trade]['description']
                content.appendChild(wDesc)
            }
        }
    }
}