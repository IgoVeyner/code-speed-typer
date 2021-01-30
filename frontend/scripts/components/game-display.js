class GameDisplay {
  constructor() {
    this.nameplate = new Nameplate
    this.scoreDiv = new ScoreDisplay
    this.codeDisplay = new CodeDisplay
    this.userInput = new UserInput
  }

  finishGame = () => {
    user.score.completeGame()
    user.display.userInput.disableInput()
    user.display.buttons = new ButtonDisplay
    user.score.updateScore()
  }
  
  reset = () => main.innerText = ""
}