class Score {
  constructor(user) {
    this.user = user
    this.time = 0
    this.strikes = 0
    this.completed = false
    this.createScore()
  }

  createScore = () => this.user.api.postScore(this.user.id, this.user.code.id).then(this.assignID) 
  
  updateScore = () => {
    [this.time, this.strikes] = this.getCurrentScore()
    this.user.api.updateScore(this.id, this.time, this.strikes, this.completed)
  }

  getCurrentScore = () => {
    let timer = this.user.display.scoreDiv.timer.innerText
    let strikes = this.user.display.scoreDiv.num.innerText

    timer = parseInt(timer.replace(":", ""), 10) * 10
    strikes = parseInt(strikes)    

    return [timer, strikes]
  }

  assignID = scoreData => this.id = scoreData.id 

  completeGame = () => this.completed = true
}