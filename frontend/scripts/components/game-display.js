class GameDisplay {
  constructor() {
    this.nameplate = new Nameplate
    this.scoreDiv = new ScoreDisplay
    this.codeDisplay = new CodeDisplay
    this.userInput = new UserInput
  }

  reset = () => main.innerText = ""
}