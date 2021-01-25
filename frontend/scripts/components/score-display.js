class ScoreDisplay {
  constructor(main) {
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
  startTimer = () => this.interval = setInterval(this.updateTimer, 10) 
  stopTimer = () => clearInterval(this.interval)
  
  updateTimer = () => { 
    const str = `${parseInt(this.timer.innerText.replace(":", ""), 10) + 1}`
    if (str.length < 2) {
      this.timer.innerText = `00:0${str}`
    } else if (str.length < 3) {
      this.timer.innerText = `00:${str}`
    } else {
      this.timer.innerText = str.slice(0, str.length - 2) + ":" + str.slice(str.length - 2, str.length)
    }
  }
}