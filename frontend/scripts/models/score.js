class Score {
  constructor(id) {
    this.time = 0
    this.strikes = 0
    this.completed = false
    id !== undefined ? this.createScoreFromId(id) : this.createScore()
  }

  createScore = () => api.postScore(user.id, user.code.id).then(this.assignID) 
  
  updateScore = () => {
    [this.time, this.strikes] = this.getCurrentScore()
    api.updateScore(this.id, this.time, this.strikes, this.completed)
    .then(() => user.code.highestScore ? this.compareToHighscore() : api.postHighscore(user.code.id, user.score.id)
    )
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
  
  createScoreFromId = id => {
    this.id = id

    api.fetchScore(id)
    .then(scoreData => { 
      this.username = scoreData.included[0].attributes.name
      this.time = scoreData.data.attributes.time
      this.strikes = scoreData.data.attributes.strikes
    })
  }

  compareToHighscore = () => {
    const highscore = user.code.highestScore
    const currentScore = user.score

    if (currentScore.time < highscore.time || (currentScore.time == highscore.time && currentScore.strikes < highscore.strikes)) {
      console.log("faster")
      api.updateHighscore(user.code.currentHighscoreID, this.id)
      new ScoreDisplay(currentScore)
    } else {
      console.log("not faster")
      new ScoreDisplay(highscore)
    }
  }
}