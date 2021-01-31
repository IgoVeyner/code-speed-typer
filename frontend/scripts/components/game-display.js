class GameDisplay {
  constructor() {
    this.nameplate = Nameplate.createNameplate()
    this.scoreDiv = ScoreDisplay.createBlank()
    this.codeDisplay = CodeDisplay.createDisplay()
    this.userInput = UserInput.addUserInput()
  }

  finishGame = () => {
    user.display.userInput.disableInput()
    user.display.buttons = ButtonDisplay.createButtons()
    user.score.updateScore()
  }
  
  reset = () => main.innerText = ""
}