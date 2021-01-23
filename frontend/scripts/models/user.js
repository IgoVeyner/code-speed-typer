class User {

  constructor() {
    this.api = new API
    this.display = new LoginForm(this)
  }

  postUser = username => {
    this.api.postUser(username)
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
}