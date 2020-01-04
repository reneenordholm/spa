class Trade {
    constructor(trade) {
        this.id = trade.id
        this.trade_type = trade.trade_type
        this.img = trade.img
        this.description = trade.description
        this.title = trade.title     
    }

    renderTrade() {
        // for each trade
        // add object to page by type
        if (this.trade_type === "about") {
            const about = document.querySelector('div.about')

            if (localStorage.getItem("user")){
                about.setAttribute('id', this.id)
                about.addEventListener('click', event => {
                    alert(`${this.id} has been clicked`)
                })
                console.log("logged in") 
            } else {
                console.log("logged out")
            }

            const dImg = document.createElement('div')
            dImg.setAttribute("class", "dImg")
            about.appendChild(dImg)

            const pImg = document.createElement('IMG')
            pImg.setAttribute("src", this.img)
            pImg.setAttribute("style", "width:100%")
            dImg.appendChild(pImg)

            const dPar = document.createElement('div')
            dPar.setAttribute("class", "dPar")
            about.appendChild(dPar)

            const pText = document.createElement('p')
            pText.innerText = this.description
            dPar.appendChild(pText)

        } else if (this.trade_type === "work") {

            const work = document.querySelector('div.work')
            const column = document.createElement('div')
            column.setAttribute("class", "column")
            work.appendChild(column)

            
            if (localStorage.getItem("user")){
                column.setAttribute('id', this.id)
                column.addEventListener('click', event => {
                    alert(`${this.id} has been clicked`)
                })
            }

            const content = document.createElement('div')
            content.setAttribute("class", "content")
            column.appendChild(content)
            
            const wImg = document.createElement('IMG')
            wImg.setAttribute("src", this.img)
            wImg.setAttribute("style", "width:100%")
            content.appendChild(wImg)

            const wHeader = document.createElement('H3')
            wHeader.innerText = this.title
            content.appendChild(wHeader)

            const wDesc = document.createElement('p')
            wDesc.innerText = this.description
            content.appendChild(wDesc)
        }
    }
}