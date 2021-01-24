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
    this.userInput = new UserInput(this.main, this.user)
  }
}