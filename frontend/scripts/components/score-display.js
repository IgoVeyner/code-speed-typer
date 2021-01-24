class ScoreDisplay {
  constructor(main, user) {
    this.main = main
    this.createDisplay()
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

    this.timer = timer
    this.num = num
  }

  updateStrikes = () => this.num.innerText = `${parseInt(this.num.innerText, 10) + 1}`
}