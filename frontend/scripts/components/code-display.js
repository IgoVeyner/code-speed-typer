class CodeDisplay {
  constructor(main, user) {
    this.main = main
    this.user = user
    this.line = this.user.code.line
    this.index = 0
    this.createDisplay()
  }

  createDisplay = () => {
    const div = document.createElement("div")
    for (const char of this.line){
      const span = document.createElement("span")
      span.innerText = char
      div.appendChild(span)
    }
    this.main.appendChild(div)
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
    if (this.index === 0) { this.user.display.scoreDiv.startTimer() }
    if (this.index === this.line.length - 1 ) { 
      this.user.display.scoreDiv.stopTimer()
      this.user.score.completeGame()
      this.user.display.userInput.disableInput()
      this.user.display.userInput.createButtons()
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