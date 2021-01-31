class HighscoreDisplay {
  constructor() {
  }

  static createFromScore = score => {
    const highscore = new HighscoreDisplay
    const [container, header, text, timer] = highscore.createElements(["div", "h1", "h2", "span"])
    let time = `${score.time / 10}`
    highscore.timer = timer
    highscore.timerConverter(time, highscore)

    header.innerText = "Highscore"
    text.innerText = `Name: ${score.username} | Time: ${highscore.timer.innerText} | Strikes: ${score.strikes}`
    
    header.classList.add("highscore-header")
    text.classList.add("highscore-text")
    container.classList.add("highscore-container")

    for (const element of [header, text]) { container.appendChild(element) }
    user.display.codeDisplay.container.appendChild(container)

    return highscore
  }

  createElements = ([...elements]) => elements.map(element => document.createElement(element))

  timerConverter = (time, highscore) => {
    if (time.length < 2) {
      highscore.timer.innerText = `00:0${time}`
    } else if (time.length < 3) {
      highscore.timer.innerText = `00:${time}`
    } else if (time.length < 5) {
      let seconds = time.slice(0, time.length - 2)
      if (seconds.length == 1) { seconds = `0${seconds}`} 
      highscore.timer.innerText = seconds + ":" + time.slice(time.length - 2, time.length)
    } else {
      highscore.timer.innerText == "99:99"
    }
  }

  addUsername = (username, div) => {
    const h3 = document.createElement("h3")
    h3.innerText = username
    div.appendChild(h3)
  }
}