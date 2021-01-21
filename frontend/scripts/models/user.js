class User {

  constructor() {
    this.api = new API
    this.display = new LoginForm(this)
  }

  updateInfo = data => {
    this.id = data.id
    this.username = data.name
  }

  displayGame = () => this.display = new GameDisplay(this)
}