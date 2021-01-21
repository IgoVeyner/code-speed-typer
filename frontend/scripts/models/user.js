class User {

  constructor() {
    this.api = new API
    this.display = new LoginForm(this)
  }

  // This does nothing functionally atm
  // If I add edit username / delete account this will become useful

  updateInfo = data => {
    this.id = data.id
    this.username = data.name
  }

  displayGame = () => this.display = new GameDisplay(this)

  // TODO
  // 1. Add a method to create a game-display component
  //      it will display all the html elements associated with the game
}