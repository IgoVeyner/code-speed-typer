class GameDisplay {
  constructor() {
  }

  // Custom Constructor
  
  static createDisplay = () => {
    const display = new GameDisplay
    display.nameplate = Nameplate.createNameplate()
    display.scoreDiv = ScoreDisplay.createBlank()
    display.codeDisplay = CodeDisplay.createDisplay()
    display.userInput = UserInput.addUserInput()
    return display
  }

  // Helpers

  finishGame = () => {
    user.display.userInput.disableInput()
    user.display.buttons = ButtonDisplay.createButtons()
    user.score.updateScore()
  }
  
  reset = () => main.innerText = ""
}