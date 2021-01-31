class User {
  constructor() {
  }

  static startGame = () => {
    const user = new User
    user.createLoginForm()
    return user
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

  createLoginForm = () => this.display = new LoginForm()
  createCode = () => this.code = Code.getCode()
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