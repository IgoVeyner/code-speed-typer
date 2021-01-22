class Score {
  constructor(user) {
    this.user = user
    this.time = 0
    this.strikes = 0
    this.completed = false
    this.createScore()
  }

  // TODO: 
  // 1. helper to use the api serv to update the current score in the DB
  // 2. helper to update the instance's time / strikes / completed status

  createScore = () => this.user.api.postScore(this.user.id).then(this.assignID) 
  updateScore = () => {
    [this.time, this.strikes] = this.getCurrentScore()
    this.user.api.updateScore(this.id, this.time, this.strikes, this.completed)
  }

  getCurrentScore = () => {
    // TODO: 
    // add method to check if line of code is complete, assign to a boolean, and return
    
    let timer = this.user.display.scoreDiv.timer.innerText
    let strikes = this.user.display.scoreDiv.num.innerText

    timer = parseInt(timer.replace(":", ""), 10) * 10
    strikes = parseInt(strikes)    

    return [timer, strikes]
  }

  assignID = scoreData => this.id = scoreData.id 
}