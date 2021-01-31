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

  createElements = ([...elements]) => { return elements.map(element => document.createElement(element)) }

  timerConverter = time => {
    if (time.length < 2) {
      this.timer.innerText = `00:0${time}`
    } else if (time.length < 3) {
      this.timer.innerText = `00:${time}`
    } else if (time.length < 5) {
      let seconds = time.slice(0, time.length - 2)
      if (seconds.length == 1) { seconds = `0${seconds}`} 
      this.timer.innerText = seconds + ":" + time.slice(time.length - 2, time.length)
    } else {
      this.timer.innerText == "99:99"
    }
  }
}