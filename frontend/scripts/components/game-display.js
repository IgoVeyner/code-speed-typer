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
    this.addUserInput()
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

  addUserInput = () => {
    const input = document.createElement("input")

    input.addEventListener("change", this.inputEvent)
    
    this.main.appendChild(input)

    // TODO
    // automagically put the user into the input
  }

  inputEvent = e => {
    console.log("some event")
    // TODO
    // change the LoC styling
    // do patch request
    // check to see if the game is over
    // a lot more stuff...
  }
}