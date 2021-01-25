class GameDisplay {
  constructor() {
    this.main = document.querySelector("main")
    this.nameplate = new Nameplate(this.main)
    this.scoreDiv = new ScoreDisplay(this.main)
    this.codeDisplay = new CodeDisplay(this.main)
    this.userInput = new UserInput(this.main)
  }

  reset = () => this.main.innerText = ""
}