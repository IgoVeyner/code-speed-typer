class GameDisplay {
  constructor(user) {
    this.user = user
    this.main = document.querySelector("main")
    this.createDisplay()
  }

  createDisplay = () => {
    this.nameplate = new Nameplate(this.main, this.user)
    this.scoreDiv = new ScoreDisplay(this.main, this.user)
    this.codeDisplay = new CodeDisplay(this.main, this.user)
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