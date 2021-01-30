class Score {
  constructor(id) {
    this.time = 0
    this.strikes = 0
    this.completed = false
    id !== undefined ? this.createScoreFromId(id) : this.createScore()
  }

  createScore = () => api.postScore(user.id, user.code.id).then(this.assignID) 
  
  updateScore = () => {
    this.updateCurrentScore()

    api.updateScore(this.id, this.time, this.strikes, this.completed)
    .then(() => {

      if (user.code.highscore) {
        this.compareToHighscore()
      } else {
        user.display.scoreDiv.newHighScoreText()
        api.postHighscore(user.code.id, user.score.id)
        .then( highscoreData => {
          user.code.highscore = Highscore.createFromPostHighscore(highscoreData.data) 
          new ScoreDisplay(user.code.highscore.score)
        })
      }
    })
  }

  updateCurrentScore = () => {
    const timer = user.display.scoreDiv.timer.innerText
    const strikes = user.display.scoreDiv.num.innerText
    
    this.username = user.username
    this.completed = true
    this.time = parseInt(timer.replace(":", ""), 10) * 10
    this.strikes = parseInt(strikes)    
  }

  assignID = scoreData => this.id = scoreData.id 
  
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
    const highscore = user.code.highscore.score
    const currentScore = user.score

    if (currentScore.time < highscore.time || (currentScore.time == highscore.time && currentScore.strikes < highscore.strikes)) {
      user.display.scoreDiv.newHighScoreText()
      api.updateHighscore(user.code.highscore.id, this.id)
      user.code.highscore.score = this
      new ScoreDisplay(currentScore)
    } else {
      new ScoreDisplay(highscore)
    }
  }
}