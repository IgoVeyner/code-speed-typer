class CodeDisplay {
  constructor() {
    this.line = user.code.line
    this.headerText = user.code.name
    this.index = 0
    this.createDisplay()
  }

  createDisplay = () => {
    const [codeContainer, div, h2] = helpers.createElements(["div", "div", "h2"])

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

  changeColor = () => {
    const styles = this.getClassList()
    const style = "current-input"
    
    styles.contains(style) ? styles.remove(style) : styles.add(style)
  }

  checkInput = input => input === this.characters[this.index].innerText ? true : false
  getClassList = () => this.characters[this.index].classList
  getPrevClassList = () => this.characters[this.index - 1].classList

  addBlinkingText = () => {
    const styles = this.getClassList()
    styles.add("current-input")
    this.textBlinker = setInterval(this.changeColor, 400)
  }

  removeBlinkingText = () => {
    const styles = this.getClassList()
    clearInterval(this.textBlinker)
    styles.remove("current-input")
  }

  handleTimer = () => {
    const display = user.display
    const scoreContainer = display.scoreDiv

    if (this.index === 0) { scoreContainer.startTimer() }
    if (this.index + 1 === this.line.length ) { 
      scoreContainer.stopTimer()
      display.finishGame()
    }
  }

  updateColor = () => {
    const styles = this.getPrevClassList()
    styles.add("correct")
  }
}