class HighscoreDisplay {
  constructor() {
  }

  // Custom Constructor

  static createFromScore = score => {
    const highscore = new HighscoreDisplay
    const [container, header, text, timer] = helpers.createElements(["div", "h1", "h2", "span"])
    let time = `${score.time / 10}`
    highscore.timer = timer
    helpers.timerConverter(highscore, time)

    header.innerText = "Highscore"
    text.innerText = `Name: ${score.username} | Time: ${highscore.timer.innerText} | Strikes: ${score.strikes}`
    
    header.classList.add("highscore-header")
    text.classList.add("highscore-text")
    container.classList.add("highscore-container")

    for (const element of [header, text]) { container.appendChild(element) }
    user.display.codeDisplay.container.appendChild(container)

    return highscore
  }

  // Helpers

  addUsername = (username, div) => {
    const h3 = document.createElement("h3")
    h3.innerText = username
    div.appendChild(h3)
  }
}