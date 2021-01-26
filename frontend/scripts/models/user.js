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

  updateInfo = obj => {
    this.id = obj.data.id
    this.username = obj.data.attributes.name
  }

  createCode = () => this.code = new Code()
  createScore = () => this.score = new Score()
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