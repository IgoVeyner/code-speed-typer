class UserInput {
  constructor(main, user) {
    this.main = main
    this.user = user
    this.addUserInput()
  }

  addUserInput = () => {
    const input = document.createElement("input")
    input.addEventListener("input", this.inputEvent)
    window.addEventListener("click", this.forceFocus)
    this.main.appendChild(input)
    this.input = input
    input.focus()
  }

  inputEvent = e => {
    // TODO
    // change the LoC styling
    // do patch request
    // check to see if the game is over
    // a lot more stuff...

    const inputTruthy = this.user.display.codeDisplay.checkInput(e.target.value)
    this.user.display.codeDisplay.updateColor(inputTruthy)
    if (inputTruthy === false) { this.user.display.scoreDiv.updateStrikes() }

    this.user.score.updateScore()
    e.target.value = ""
  }

  forceFocus = () => this.input.focus() 

  disableInput = () => {
    this.input.removeEventListener("input", this.inputEvent)
    this.input.disabled = true
  }

  createButtons = () => {
    const elementsToCreate = ["button", "button"]
    const [tryAgain, newRandom] = elementsToCreate.map(element => document.createElement(element))
    
    tryAgain.innerText = "Try Again"
    newRandom.innerText = "Random"

    tryAgain.addEventListener("click", this.tryAgain)
    newRandom.addEventListener("click", this.newRandom)

    for(const element of [tryAgain, newRandom]) {
      this.main.appendChild(element)
    }
  }

  tryAgain = () => this.user.resetGame()
  newRandom = () => this.user.newRandomGame()
}