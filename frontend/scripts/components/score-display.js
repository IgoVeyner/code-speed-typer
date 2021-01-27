class ScoreDisplay {
  constructor(score) {
    score ? this.createFromScore(score) : this.createDisplay()
  }

  createDisplay = () => {
    const [container, timer, strikes, num] = this.createElements(["div", "h1", "h2", "span"])

    timer.innerText = "00:00"
    strikes.innerText = "Strikes: "
    num.innerText = "0"

    strikes.appendChild(num)
    for (const element of [timer, strikes]) { container.appendChild(element) }
    main.appendChild(container)

    this.timer = timer
    this.num = num
  }

  updateStrikes = () => this.num.innerText = `${parseInt(this.num.innerText, 10) + 1}`
  startTimer = () => this.interval = setInterval(this.updateTimer, 10) 
  stopTimer = () => clearInterval(this.interval)
  
  updateTimer = () => { 
    const newTime = `${parseInt(this.timer.innerText.replace(":", ""), 10) + 1}`
    this.timerConverter(newTime)
  }

  createFromScore = score => {
    const [container, header, timer, strikes, num] = this.createElements(["div", "h1", "h1", "h2", "span"])

    let time = `${score.time / 10}`
    strikes.innerText = "Strikes: "
    num.innerText = `${score.strikes}`
    header.innerText = "Highscore"

    this.timer = timer
    this.num = num
    container.appendChild(header)

    this.add_username(score.username, container)

    strikes.appendChild(num)
    for (const element of [timer, strikes]) { container.appendChild(element) }
    main.appendChild(container)

    this.timerConverter(time)
  }

  add_username = (username, div) => {
    const h3 = document.createElement("h3")
    h3.innerText = username
    div.appendChild(h3)
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
      if (this.interval) { this.stopTimer() }
      this.timer.innerText == "99:99"
    }
  }

  newHighScoreText = () => {
    const h2 = document.createElement("h2")
    h2.innerText = "New Highscore!"
    this.timer.parentElement.prepend(h2)
  }
}