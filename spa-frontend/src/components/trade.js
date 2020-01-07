class Trade {
    constructor(trade) {
        this.id = trade.id
        this.trade_type = trade.trade_type
        this.img = trade.img
        this.description = trade.description
        this.title = trade.title  
        this.adapter = new TradesAdapter()
    }

    renderTrade() {
        // for each trade
        // add object to page by type
        if (this.trade_type === "about") {
            const about = document.querySelector('div.about')

            if (localStorage.getItem("user")){
                about.setAttribute('id', this.id)

                const editModal = document.createElement('div')
                editModal.setAttribute('id', 'id02')
                editModal.setAttribute('class', 'edit-modal')
                about.appendChild(editModal)

                about.setAttribute("onclick", "document.getElementById('id02').style.display='block'")

                const editForm = document.createElement('form')
                editForm.setAttribute('class', "edit-modal-content edit-animate")
                editForm.dataset.id = this.id
                editForm.setAttribute('action', `/trades/${this.id}`)
                editForm.setAttribute('method', 'patch')
                editModal.appendChild(editForm)

                const editContainer = document.createElement('div')
                editContainer.setAttribute('class', "edit-container")
                editForm.appendChild(editContainer)

                const imgEditTitle = document.createElement('label')
                imgEditTitle.setAttribute('for', 'img')
                imgEditTitle.innerText = "Image Link"
                editContainer.appendChild(imgEditTitle)

                const imgInput = document.createElement('input')
                imgInput.setAttribute('type', 'text')
                imgInput.setAttribute('value', this.img)
                imgInput.setAttribute('name', 'img')
                editContainer.appendChild(imgInput)
                
                const imgDescTitle = document.createElement('label')
                imgDescTitle.setAttribute('for', 'description')
                imgDescTitle.innerText = "Description"
                editContainer.appendChild(imgDescTitle)

                const bioInput = document.createElement('input')
                bioInput.setAttribute('type', 'text')
                bioInput.setAttribute('value', this.description)
                bioInput.setAttribute('name', 'description')
                editContainer.appendChild(bioInput)

                const editButton = document.createElement('button')
                editButton.setAttribute('id', 'edit-button')
                editButton.setAttribute('type', 'submit')
                editButton.innerText = "Submit Edit"
                editContainer.appendChild(editButton)

                const form = document.getElementsByClassName('edit-modal-content edit-animate')[0]

                // listen for login request after credentials are entered
                const editSubmit = document.getElementById('edit-button')
                editSubmit.addEventListener('click', event => {
                    event.preventDefault(event)
                    this.adapter.updateTrade(form)
                })

                // When the user clicks anywhere outside of the edit modal, close it
                window.addEventListener('click', event => { 
                    if (event.target == editModal) {
                        editModal.style.display = "none";
                    }
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