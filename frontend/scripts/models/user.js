class User {
  constructor() {
  }

  // Custom Constructor

  static startGame = () => {
    const user = new User
    user.createLoginForm()
    return user
  }

  // Helpers

  createLoginForm = () => this.display = new LoginForm()
  createCode = () => this.code = Code.getCode()
  createScore = () => this.score = Score.createBlank()
  createGameDisplay = () => this.display = GameDisplay.createDisplay()

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