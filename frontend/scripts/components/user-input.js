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
    const elementsToCreate = ["div", "div", "h3", "h3", "p", "p", "button", "button"]
    const [btn1Container, btn2Container, header1, header2, info1, info2, tryAgain, newRandom] = elementsToCreate.map(element => document.createElement(element))
    
    header1.innerText = "Try Again"
    header2.innerText = "Random"

    info1.innerText = "(backspace)"
    info2.innerText = "(enter)"

    tryAgain.style.background = "url(./assets/backspace.png)"
    newRandom.style.background = "url(./assets/enter.png)"

    for(const element of [tryAgain, newRandom]) { element.classList.add("button") }

    btn1Container.appendChild(header1)
    btn2Container.appendChild(header2)

    btn1Container.appendChild(tryAgain)
    btn2Container.appendChild(newRandom)

    btn1Container.appendChild(info1)
    btn2Container.appendChild(info2)

    tryAgain.addEventListener("click", this.tryAgain)
    newRandom.addEventListener("click", this.newRandom)

    for(const element of [btn1Container, btn2Container]) { main.appendChild(element) }
  }

  tryAgain = () => user.resetGame()
  newRandom = () => user.newRandomGame()
}