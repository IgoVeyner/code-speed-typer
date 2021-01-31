class HighscoreDisplay {
  constructor() {
  }

  static createFromScore = score => {
    const [container, header, text, timer] = this.createElements(["div", "h1", "h2", "span"])
    let time = `${score.time / 10}`
    this.timer = timer
    this.timerConverter(time)

    header.innerText = "Highscore"
    text.innerText = `Name: ${score.username} | Time: ${this.timer.innerText} | Strikes: ${score.strikes}`
    
    header.classList.add("highscore-header")
    text.classList.add("highscore-text")
    container.classList.add("highscore-container")

    for (const element of [header, text]) { container.appendChild(element) }
    user.display.codeDisplay.container.appendChild(container)
  }

}