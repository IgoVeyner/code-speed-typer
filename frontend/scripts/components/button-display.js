class ButtonDisplay {
  constructor() {
    this.createButtons()
  }

  createButtons = () => {
    const [buttonsContainer, btn1Container, btn2Container] = this.createButtonContainers()

    let i = 0
    for(const container of [btn1Container, btn2Container]) {
      const elements = this.createElements(["h3", "p", "button"])

      if (i === 0) {
        this.updateElements(elements, ["Try Again", "(backspace)", "url(./assets/backspace.png)"])
        elements[2].addEventListener("click", () => { this.removeKeydownHandler(); user.resetGame() })
      } else {
        this.updateElements(elements, ["Random", "(enter)", "url(./assets/enter.png)"])
        elements[2].addEventListener("click", () => { this.removeKeydownHandler(); user.newRandomGame() })
      }
      
      for (const element of elements) { container.appendChild(element) }
      buttonsContainer.appendChild(container)

      i += 1
    }

    main.appendChild(buttonsContainer)
    window.addEventListener("keydown", this.keydownHandler)
  }

  createButtonContainers = () => {
    return this.createElements(["div", "div", "div"])
  }

  createElements = ([...elements]) => elements.map(element => document.createElement(element)) 

  updateElements = (elements, [...args]) => {
    elements[0].innerText = args[0]
    elements[1].innerText = args[1]
    elements[2].style.background = args[2]
    elements[2].classList.add("button")
  }

  keydownHandler = e => {
    if (e.keyCode === 13 || e.keyCode === 8) { this.removeKeydownHandler()}
    if (e.keyCode === 8) { user.resetGame() }
    if (e.keyCode === 13) { user.newRandomGame() }
  }

  removeKeydownHandler = () => { window.removeEventListener("keydown", this.keydownHandler) }
}