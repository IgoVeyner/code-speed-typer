class UserInput {
  constructor() {
  }

  // Custom Constructor

  static addUserInput = () => {
    const UI = new UserInput
    const input = document.createElement("input")

    input.classList.add("hidden")

    input.addEventListener("input", UI.inputEvent)
    window.addEventListener("click", UI.forceFocus)

    main.appendChild(input)
    input.focus()
    UI.input = input

    return UI
  }

  // Event Handler

  inputEvent = e => {
    const inputTruthy = user.display.codeDisplay.checkInput(e.target.value)
    const currentIndex = user.display.codeDisplay.index
    const codeDisplay = user.display.codeDisplay
    
    if (inputTruthy) { 
      codeDisplay.handleTimer()
      codeDisplay.removeBlinkingText()
      codeDisplay.index += 1
      if (codeDisplay.index < codeDisplay.characters.length) { codeDisplay.addBlinkingText() }
      codeDisplay.updateColor()
    }

    if (currentIndex > 0 && !inputTruthy) {
      const scoreDisplay = user.display.scoreDiv
      scoreDisplay.updateStrikes() 
    }

    e.target.value = ""
  }

  // Helpers

  forceFocus = () => this.input.focus() 

  disableInput = () => {
    this.input.removeEventListener("input", this.inputEvent)
    this.input.disabled = true
  }
}