class CodeDisplay {
  constructor() {
    this.line = user.code.line
    this.headerText = user.code.name
    this.index = 0
    this.createDisplay()
  }

  createDisplay = () => {
    const div = document.createElement("div")
    const h2 = document.createElement("h2")

    h2.classList.add("code-header")
    h2.innerText = this.headerText
    main.prepend(h2)

    for (const char of this.line){
      const span = document.createElement("span")
      span.innerText = char
      div.appendChild(span)
    }

    main.appendChild(div)

    this.characters = div
    this.characters.children[0].classList.add("current-input")
  }

  checkInput = input => {
    if (input === this.characters.children[this.index].innerText) {
      this.moveUnderline()
      this.handleTimer()
      this.index += 1
      return true
    } else {
      return false
    }
  }

  moveUnderline = () => {
    this.characters.children[this.index].classList.remove("current-input")
    if (this.index < this.characters.children.length - 1) {
      this.characters.children[this.index + 1].classList.add("current-input")
    }
  }

  handleTimer = () => {
    if (this.index === 0) { user.display.scoreDiv.startTimer() }
    if (this.index + 1 === this.line.length ) { 
      user.display.scoreDiv.stopTimer()
      user.display.finishGame()
     }
  }

  updateColor = truthy => {
    if (truthy) {
      const current = this.characters.children[this.index - 1]
      current.classList.remove("strike")
      current.classList.add("correct")
    } else {
      this.characters.children[this.index].classList.add("strike")
    }
  }
}