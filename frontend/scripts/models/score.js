class Score {
  constructor(id) {
    this.time = 0
    this.strikes = 0
    this.completed = false
    if (id !== undefined) {
      // create a score from a current score id
      console.log("TODO: create a score from a known id")
    } else {
      this.createScore()
    }
  }

  createScore = () => api.postScore(user.id, user.code.id).then(this.assignID) 
  
  updateScore = () => {
    [this.time, this.strikes] = this.getCurrentScore()
    api.updateScore(this.id, this.time, this.strikes, this.completed)
  }

  getCurrentScore = () => {
    let timer = user.display.scoreDiv.timer.innerText
    let strikes = user.display.scoreDiv.num.innerText

    timer = parseInt(timer.replace(":", ""), 10) * 10
    strikes = parseInt(strikes)    

    return [timer, strikes]
  }

  assignID = scoreData => this.id = scoreData.id 

  completeGame = () => this.completed = true
}