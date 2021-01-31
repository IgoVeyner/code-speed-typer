class CodeDisplay {
  constructor() {
  }

  static createDisplay = () => {
    const display = new CodeDisplay

    display.line = user.code.line
    display.index = 0

    const [codeContainer, div, h2] = helpers.createElements(["div", "div", "h2"])

    h2.classList.add("code-header")
    h2.innerText = user.code.name
    main.prepend(h2)

    for (const char of display.line) {
      const span = document.createElement("span")
      span.innerText = char
      span.classList.add("code-char")
      div.appendChild(span)
    }

    codeContainer.appendChild(div)
    main.appendChild(codeContainer)

    display.characters = div.children
    display.container = codeContainer
    display.textBlinker = setInterval(display.changeColor, 400)
    
    return display
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