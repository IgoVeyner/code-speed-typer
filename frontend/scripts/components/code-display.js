class CodeDisplay {
  constructor() {
    this.line = user.code.line
    this.headerText = user.code.name
    this.index = 0
    this.createDisplay()
  }

  createDisplay = () => {
    const [codeContainer, div, h2] = this.createElements(["div", "div", "h2"])

    h2.classList.add("code-header")
    h2.innerText = this.headerText
    main.prepend(h2)

    for (const char of this.line) {
      const span = document.createElement("span")
      span.innerText = char
      span.classList.add("code-char")
      div.appendChild(span)
    }

    codeContainer.appendChild(div)
    main.appendChild(codeContainer)

    this.characters = div.children
    this.container = codeContainer
    this.textBlinker = setInterval(this.changeColor, 400)
  }

  createElements = ([...elements]) => elements.map(element => document.createElement(element)) 

  changeColor = () => {
    const char = this.characters[this.index]
    
    if (char.classList.contains("current-input")) {
      char.classList.remove("current-input")
    } else {
      char.classList.add("current-input")
    }
  }

  checkInput = input => {
    if (input === this.characters[this.index].innerText) {
      this.handleTimer()
      this.removeBlinkingText()
      this.index += 1
      if (this.index < this.characters.length) { this.addBlinkingText() }
      return true
    } else {
      return false
    }
  }

  addBlinkingText = () => {
    const char = this.characters[this.index]
    char.classList.add("current-input")
    
    this.textBlinker = setInterval(this.changeColor, 400)
  }

  removeBlinkingText = () => {
    clearInterval(this.textBlinker)
    const char = this.characters[this.index]
    char.classList.remove("current-input")
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
      const current = this.characters[this.index - 1]
      current.classList.remove("strike")
      current.classList.add("correct")
    } else {
      this.characters[this.index].classList.add("strike")
    }
  }
}