class Score {
  constructor(id) {
    this.time = 0
    this.strikes = 0
    this.completed = false
    id !== undefined ? this.createScoreFromId(id) : this.createScore()
  }

  createScore = () => api.postScore(user.id, user.code.id).then(this.assignID) 
  
  updateScore = () => {
    this.getCurrentScore()

    api.updateScore(this.id, this.time, this.strikes, this.completed)
    .then(data => {
      this.updateData(data)

      if (user.code.highestScore) {
        this.compareToHighscore()
      } else { 
        user.display.scoreDiv.newHighScoreText()
        user.code.highestScore = this
        api.postHighscore(user.code.id, user.score.id)
        .then( highscoreData => {
          user.code.currentHighscoreID = highscoreData.data.id 
          new ScoreDisplay(user.code.highestScore)
        })
      }
    })
  }

  updateData = scoreData => {
    this.currentHighscoreID = scoreData.data.id
    this.time = scoreData.data.attributes.time
    this.strikes = scoreData.data.attributes.strikes
    this.completed = scoreData.data.attributes.completed
    this.username = user.username
  }

  getCurrentScore = () => {
    this.completed = true
    const timer = user.display.scoreDiv.timer.innerText
    const strikes = user.display.scoreDiv.num.innerText

    this.time = parseInt(timer.replace(":", ""), 10) * 10
    this.strikes = parseInt(strikes)    
    console.log(this)
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
    const highscore = user.code.highestScore
    const currentScore = user.score

    if (currentScore.time < highscore.time || (currentScore.time == highscore.time && currentScore.strikes < highscore.strikes)) {
      user.display.scoreDiv.newHighScoreText()
      api.updateHighscore(user.code.currentHighscoreID, this.id)
      user.code.highestScore = this
      new ScoreDisplay(currentScore)
    } else {
      new ScoreDisplay(highscore)
    }
  }
}