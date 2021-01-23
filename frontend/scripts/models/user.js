class User {

  constructor() {
    this.api = new API
    this.display = new LoginForm(this)
  }

  postUser = username => {
    this.api.postUser(username)
    .then(data => {
      this.updateInfo(data)
      this.displayGame()
    })
    .catch(error => console.log(error))
  }

  updateInfo = data => {
    this.id = data.id
    this.username = data.name
  }

  displayGame = () => {
    this.code = new Code(this)
    this.score = new Score(this)
    this.display = new GameDisplay(this)
  }
}