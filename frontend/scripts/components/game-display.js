class GameDisplay {
  constructor() {
    this.nameplate = Nameplate.createNameplate()
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