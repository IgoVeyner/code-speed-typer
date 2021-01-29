class ButtonDisplay {
  constructor() {
    this.createButtons()
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
    for(const element of [header1, tryAgain, info1]) { btn1Container.appendChild(element)}
    for(const element of [header2, newRandom, info2]) { btn2Container.appendChild(element)}

    tryAgain.addEventListener("click", () => { this.removeKeydownHandler(); user.resetGame() })
    newRandom.addEventListener("click", () => { this.removeKeydownHandler(); user.newRandomGame() })

    for(const element of [btn1Container, btn2Container]) { 
      element.classList.add("button-container")
      main.appendChild(element) 
    }

    window.addEventListener("keydown", this.keydownHandler)
  }

  createButtonsTemp = () => {
    const [buttonsContainer, btn1Container, btn2Container] = this.createButtonContainers

    let i = 0
    for(const container of [btn1Container, btn2Container]) {
      const elements = this.createElements("h3", "p", "button")

      if (i === 0) {
        this.updateElements(elements, ["Try Again", "(backspace)", "url(./assets/backspace.png)"])
      } else {
        this.updateElements(elements, ["Random", "(enter)", "url(./assets/enter.png)"])
      }
      // append elements to containers
      // append containers to large container

      i += 1
    }
  }

  createButtonContainers = () => {
    return this.createElements(["div", "div", "div"])
  }

  createElements = ([...elements]) => { return elements.map(element => document.createElement(element)) }

  updateElements = (elements, [...args]) => {
    elements[0].innerText = args[0]
    elements[1].innerText = args[1]
    elements[2].src = args[2]
  }

  keydownHandler = e => {
    if (e.keyCode === 13 || e.keyCode === 8) { this.removeKeydownHandler()}
    if (e.keyCode === 8) { user.resetGame() }
    if (e.keyCode === 13) { user.newRandomGame() }
  }

  removeKeydownHandler = () => { window.removeEventListener("keydown", this.keydownHandler) }
}