class Helpers {
  constructor() {
  }

  timerConverter = (display, time) => {
    if (time.length < 2) {
      display.timer.innerText = `00:0${time}`
    } else if (time.length < 3) {
      display.timer.innerText = `00:${time}`
    } else if (time.length < 5) {
      let seconds = time.slice(0, time.length - 2)
      if (seconds.length == 1) { seconds = `0${seconds}`} 
      display.timer.innerText = seconds + ":" + time.slice(time.length - 2, time.length)
    } else {
      if (display.interval) { display.stopTimer() }
      display.timer.innerText == "99:99"
    }
  }
  
  createElements = ([...elements]) => elements.map(element => document.createElement(element))
}