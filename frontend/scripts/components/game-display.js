class GameDisplay {
  constructor(user) {
    this.user = user
    this.main = document.querySelector("main")
    this.createDisplay()
  }

  createDisplay = () => {
    this.addUsername()
    this.addTimer()
    this.addLoC()
  }

  addUsername = () => {
    const elementsToCreate = ["div", "h2"]
    const [usernameContainer, username] = elementsToCreate.map(element => document.createElement(element))

    username.innerText = this.user.username

    usernameContainer.appendChild(username)
    this.main.appendChild(usernameContainer)
  }

  addTimer = () => {
    // TODO
    // add backend score resource 
    // add frontend score class
    console.log("adding timer...")
  }

  addLoC = () => {
    // TODO
    // add backend loc resource
    // add frontend loc class
    console.log("adding line of code...")
  }
}