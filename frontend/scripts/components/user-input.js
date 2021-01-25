class UserInput {
  constructor() {
    this.addUserInput()
  }

  addUserInput = () => {
    const input = document.createElement("input")
    input.classList.add("hidden")
    input.addEventListener("input", this.inputEvent)
    window.addEventListener("click", this.forceFocus)
    main.appendChild(input)
    this.input = input
    input.focus()
  }

  inputEvent = e => {
    const inputTruthy = user.display.codeDisplay.checkInput(e.target.value)
    const currentIndex = user.display.codeDisplay.index
    const scoreDisplay = user.display.scoreDiv

    if (currentIndex > 1) {
      user.display.codeDisplay.updateColor(inputTruthy)
      if (inputTruthy === false) { scoreDisplay.updateStrikes() }
    }
    
    e.target.value = ""
  }

  forceFocus = () => this.input.focus() 

  disableInput = () => {
    this.input.removeEventListener("input", this.inputEvent)
    this.input.disabled = true
  }

  createButtons = () => {
    const elementsToCreate = ["button", "button"]
    const [tryAgain, newRandom] = elementsToCreate.map(element => document.createElement(element))
    
    tryAgain.style.background = "url(./assets/backspace.png)"
    newRandom.style.background = "url(./assets/enter.png)"

    tryAgain.addEventListener("click", this.tryAgain)
    newRandom.addEventListener("click", this.newRandom)

    for(const element of [tryAgain, newRandom]) {
      element.style.width = "80px"
      element.style.height = "80px"
      element.style.border = "none"
      main.appendChild(element)
    }
  }

  tryAgain = () => user.resetGame()
  newRandom = () => user.newRandomGame()
}