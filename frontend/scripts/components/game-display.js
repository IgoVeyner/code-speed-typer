class GameDisplay {
  constructor() {
    this.nameplate = new Nameplate
    this.scoreDiv = ScoreDisplay.createBlank()
    this.codeDisplay = new CodeDisplay
    this.userInput = new UserInput
  }

  finishGame = () => {
    user.display.userInput.disableInput()
    user.display.buttons = ButtonDisplay.createButtons()
    user.score.updateScore()
  }
  
  reset = () => main.innerText = ""
}