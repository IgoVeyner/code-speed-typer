class User {

  constructor() {
    this.display = new LoginForm(this)
  }

  postUser = username => {
    api.postUser(username)
    .then(data => {
      this.updateInfo(data)
      this.createCode()
    })
  }

  updateInfo = data => {
    this.id = data.id
    this.username = data.name
  }

  createCode = () => this.code = new Code(this)
  createScore = () => this.score = new Score(this)
  createGameDisplay = () => this.display = new GameDisplay(this)

  resetGame = () => {
    this.display.reset()
    this.createScore()
    this.createGameDisplay()
  }

  newRandomGame = () => {
    this.display.reset()
    this.createCode()
  }
}