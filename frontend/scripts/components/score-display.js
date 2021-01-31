class ScoreDisplay {

  // Custom Constructor

  static createBlank = () => {
    const display = new ScoreDisplay
    const [container, timer, strikes, num] = helpers.createElements(["div", "h1", "h2", "span"])

    timer.innerText = "00:00"
    strikes.innerText = "Strikes: "
    num.innerText = "0"

    strikes.appendChild(num)
    for (const element of [timer, strikes]) { container.appendChild(element) }
    main.appendChild(container)

    display.timer = timer
    display.num = num

    container.classList.add("score-container")
    timer.classList.add("timer")
    strikes.classList.add("strikes")

    return display
  }

  // Helpers

  updateStrikes = () => this.num.innerText = `${parseInt(this.num.innerText, 10) + 1}`
  startTimer = () => this.interval = setInterval(this.updateTimer, 10) 
  stopTimer = () => clearInterval(this.interval)
  
  updateTimer = () => { 
    const newTime = `${parseInt(this.timer.innerText.replace(":", ""), 10) + 1}`
    helpers.timerConverter(this, newTime)
  }

  newHighScoreText = () => {
    const h2 = document.createElement("h2")
    h2.innerText = "New Highscore!"
    this.timer.parentElement.prepend(h2)
    h2.classList.add("new-highscore")
  }
}