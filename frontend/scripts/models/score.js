class Score {
  constructor(id) {
    this.time = 0
    this.strikes = 0
    this.completed = false
    if (id !== undefined) {
      // create a score from a current score id
      this.id = id
      this.createScoreFromId()
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

  // TODO:
  // when game is over check against the current score
  // update highscore if its larger I suppose
  
  createScoreFromId = () => {
    api.fetchScore(this.id)
    .then(scoreData => { 
      this.username = scoreData.included[0].attributes.name
      this.timer = scoreData.data.time
      this.strikes = scoreData.data.strikes
    })
  }
}