class Trade {
    constructor(trade) {
        this.id = trade.id
        this.trade_type = trade.trade_type
        this.img = trade.img
        this.description = trade.description
        this.title = trade.title  
        this.adapter = new TradesAdapter()
        this.bindEventListeners()
    }

    bindEventListeners() {
        // create div for edit modal
        this.editModal = document.createElement('div')

        // create edit form element
        this.editForm = document.createElement('form')

        // create edit container div
        this.editContainer = document.createElement('div')

        // create form label and input field for img link
        this.imgEditTitle = document.createElement('label')
        this.imgInput = document.createElement('input')

        // create form label and input field for description
        this.imgDescTitle = document.createElement('label')
        this.descInput = document.createElement('input')

        // create form label and input field for title
        this.titleEdit = document.createElement('label')
        this.titleInput = document.createElement('input')

        // create submit button for edit form
        this.editButton = document.createElement('button')
    }

    renderTrade() {
        // for each trade
        // add object to page by type
        if (this.trade_type === "about") {
            const about = document.querySelector('div.about')

            if (localStorage.getItem("user")){
                about.setAttribute('id', this.id)

                this.editModal.setAttribute('id', `id0${this.id}`)
                this.editModal.setAttribute('class', 'edit-modal')
                about.appendChild(this.editModal)

                about.setAttribute("onclick", `document.getElementById('id0${this.id}').style.display='block'`)

                this.renderEditTrade()
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

                this.editModal.setAttribute('id', `id0${this.id}`)
                this.editModal.setAttribute('class', 'edit-modal')
                column.appendChild(this.editModal)

                column.setAttribute("onclick", `document.getElementById('id0${this.id}').style.display='block'`)

                this.renderEditTrade() 
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

    renderEditTrade() {
        this.editForm.setAttribute('class', "edit-modal-content edit-animate")
        this.editForm.dataset.id = this.id
        this.editForm.setAttribute('action', `/trades/${this.id}`)
        this.editForm.setAttribute('method', 'patch')
        this.editModal.appendChild(this.editForm)

        // set class name for edit container
        this.editContainer.setAttribute('class', "edit-container")
        this.editForm.appendChild(this.editContainer)

        // create label for img link
        this.imgEditTitle.setAttribute('for', 'img')
        this.imgEditTitle.innerText = "Image Link"
        this.editContainer.appendChild(this.imgEditTitle)

        // create input field for img link
        this.imgInput.setAttribute('type', 'text')
        this.imgInput.setAttribute('value', this.img)
        this.imgInput.setAttribute('name', 'img')
        this.editContainer.appendChild(this.imgInput)

        if (this.trade_type === "work") {
            // create label for title
            this.titleEdit.setAttribute('for', 'title')
            this.titleEdit.innerText = "Title"
            this.editContainer.appendChild(this.titleEdit)

            // create input field for title
            this.titleInput.setAttribute('type', 'text')
            this.titleInput.setAttribute('value', this.title)
            this.titleInput.setAttribute('name', 'title')
            this.editContainer.appendChild(this.titleInput) 
        }
        
        // create label for description field
        this.imgDescTitle.setAttribute('for', 'description')
        this.imgDescTitle.innerText = "Description"
        this.editContainer.appendChild(this.imgDescTitle)

        // create input field for description
        this.descInput.setAttribute('type', 'text')
        this.descInput.setAttribute('value', this.description)
        this.descInput.setAttribute('name', 'description')
        this.editContainer.appendChild(this.descInput)

        // create submit button for edit form
        this.editButton.setAttribute('id', `edit-button-${this.id}`)
        this.editButton.setAttribute('type', 'submit')
        this.editButton.innerText = "Submit Edit"
        this.editButton.addEventListener('click', event => {
            event.preventDefault(event)
            this.adapter.updateTrade(this.editForm)
        })
        this.editContainer.appendChild(this.editButton)

        // When the user clicks anywhere outside of the edit modal, close it
        window.addEventListener('click', event => { 
        if (event.target == this.editModal) {
            this.editModal.style.display = "none";
        }
    })
    }
}