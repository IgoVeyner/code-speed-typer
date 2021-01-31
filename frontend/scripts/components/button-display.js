class ButtonDisplay {
  constructor() {
  }

  // Custom Constructor

  static createButtons = () => {
    const display = new ButtonDisplay
    const [buttonsContainer, btn1Container, btn2Container] = helpers.createElements(["div", "div", "div"])
    const tryAgainArgs =  ["Try Again", "url(./assets/backspace.png)", "(backspace)", user.resetGame]
    const newRandomArgs =  ["Random", "url(./assets/enter.png)", "(enter)", user.newRandomGame]

    let i = 0
    for(const container of [btn1Container, btn2Container]) {

      const elements = helpers.createElements(["h3", "button", "p"])
      i === 0 ? display.updateElements(elements, tryAgainArgs) : display.updateElements(elements, newRandomArgs)
      for (const element of elements) { container.appendChild(element) }
      buttonsContainer.appendChild(container)
      i += 1
    }
    
    buttonsContainer.classList.add("button-wrapper")
    main.appendChild(buttonsContainer)
    window.addEventListener("keydown", display.keydownHandler)

    return display
  }

  // Helpers

  updateElements = (elements, [...args]) => {
    elements[0].innerText = args[0]
    elements[1].style.background = args[1]
    elements[2].innerText = args[2]

    elements[0].classList.add("button-header")
    elements[1].classList.add("button")
    elements[2].classList.add("button-description")

    // Function as first class data
    elements[1].addEventListener("click", () => { this.removeKeydownHandler(); args[3]() })
  }

  keydownHandler = e => {
    if (e.keyCode === 13 || e.keyCode === 8) { this.removeKeydownHandler()}
    if (e.keyCode === 8) { user.resetGame() }
    if (e.keyCode === 13) { user.newRandomGame() }
  }

  removeKeydownHandler = () => window.removeEventListener("keydown", this.keydownHandler)
}