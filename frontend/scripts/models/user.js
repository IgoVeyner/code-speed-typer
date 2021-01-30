class User {
  constructor() {
    this.display = new LoginForm(this)
  }

  postUser = username => {
    api.postUser(username)
    .then(userData => {
      this.updateInfo(userData.data)
      this.createCode()
    })
  }

  updateInfo = data => {
    this.id = data.id
    this.username = data.attributes.name
  }

  createCode = () => this.code = new Code()
  createScore = () => this.score = Score.createBlank()
  createGameDisplay = () => this.display = new GameDisplay()

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