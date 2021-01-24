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
    console.log("some event")
    // TODO
    // change the LoC styling
    // do patch request
    // check to see if the game is over
    // a lot more stuff...
    this.user.score.updateScore()
  }
}