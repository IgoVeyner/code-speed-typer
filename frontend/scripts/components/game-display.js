class GameDisplay {
  constructor(user) {
    this.user = user
    this.main = document.querySelector("main")
    this.createDisplay()
  }

  createDisplay = () => {
    this.nameplate = new Nameplate(this.main, this.user)
    this.scoreDiv = new ScoreDisplay(this.main, this.user)
    this.addLoC()
    this.addUserInput()
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