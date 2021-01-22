class ScoreDisplay {
  constructor(main) {
    this.main = main
    this.createDisplay()
    // TODO
    // 1. create a score model 
    // 2. instantiate the model
  }

  createDisplay = () => {
    const elementsToCreate = ["div", "h1", "h2", "span"]
    const [container, timer, strikes, num] = elementsToCreate.map(element => document.createElement(element))

    timer.innerText = "00:00"
    strikes.innerText = "Strikes: "
    num.innerText = "0"

    strikes.appendChild(num)
    for (const element of [timer, strikes]) { container.appendChild(element) }
    this.main.appendChild(container)
  }
}