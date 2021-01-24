class UserInput {
  constructor(main, user) {
    this.main = main
    this.user = user
    this.addUserInput()
  }

  addUserInput = () => {
    const input = document.createElement("input")
    input.addEventListener("input", this.inputEvent)
    this.main.appendChild(input)

    // TODO
    // automagically put the user into the input
  }

  inputEvent = e => {
    // TODO
    // change the LoC styling
    // do patch request
    // check to see if the game is over
    // a lot more stuff...

    const state = this.user.display.codeDisplay.checkInput(e.target.value)
    this.user.display.codeDisplay.updateColor(state)
    
    this.user.score.updateScore()
    e.target.value = ""
  }
}