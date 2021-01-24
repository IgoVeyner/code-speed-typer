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
  }

  checkInput = input => {
    if (input === this.characters.children[this.index].innerText) {
      this.handleTimer()
      this.index += 1
      return true
    } else {
      return false
    }
  }

  handleTimer = () => {
    if (this.index === 0) { this.user.display.scoreDiv.startTimer() }
    if (this.index === this.line.length - 1 ) { 
      this.user.display.scoreDiv.stopTimer()
      this.user.score.completed = true
     }
  }

  updateColor = state => {
    if (state) {
      const current = this.characters.children[this.index - 1]
      current.classList.remove("strike")
      current.classList.add("correct")
    } else {
      const current = this.characters.children[this.index]
      if (!current.classList.contains("strike")) {
        current.classList.add("strike")
      }
    }
  }
}