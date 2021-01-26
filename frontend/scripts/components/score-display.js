class ScoreDisplay {
  constructor(score) {
    score ? this.createFromScore(score) : this.createDisplay()
  }

  createDisplay = () => {
    const elementsToCreate = ["div", "h1", "h2", "span"]
    const [container, timer, strikes, num] = elementsToCreate.map(element => document.createElement(element))

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
    const str = `${parseInt(this.timer.innerText.replace(":", ""), 10) + 1}`
    if (str.length < 2) {
      this.timer.innerText = `00:0${str}`
    } else if (str.length < 3) {
      this.timer.innerText = `00:${str}`
    } else if (str.length < 5) {
      let seconds = str.slice(0, str.length - 2)
      if (seconds.length == 1) { seconds = `0${seconds}`} 
      this.timer.innerText = seconds + ":" + str.slice(str.length - 2, str.length)
    } else {
      this.stopTimer()
      this.timer.innerText == "99:99"
    }
  }

  createFromScore = score => {
    const elementsToCreate = ["div", "h1", "h1", "h2", "span"]
    const [container, header, timer, strikes, num] = elementsToCreate.map(element => document.createElement(element))

    let time = `${score.time / 10}`
    strikes.innerText = "Strikes: "
    num.innerText = `${score.strikes}`
    header.innerText = "Highscore"

    this.timer = timer
    this.num = num
    container.appendChild(header)

    score.username ? this.add_username(score.username, container) : this.add_username(user.name, container)

    strikes.appendChild(num)
    for (const element of [timer, strikes]) { container.appendChild(element) }
    main.appendChild(container)

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

  add_username = (username, div) => {
    const h3 = document.createElement("h3")
    h3.innerText = username
    div.appendChild(h3)
    return div
  }

}