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
    
    if (currentIndex > 0) {
      const codeDisplay = user.display.codeDisplay
      codeDisplay.updateColor(inputTruthy)
      
      if (inputTruthy === false) { 
        const scoreDisplay = user.display.scoreDiv
        scoreDisplay.updateStrikes() 
      }
    }
    
    e.target.value = ""
  }

  forceFocus = () => this.input.focus() 

  disableInput = () => {
    this.input.removeEventListener("input", this.inputEvent)
    this.input.disabled = true
  }
}