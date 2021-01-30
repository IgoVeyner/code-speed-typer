class Score {
  constructor() {
  }

  static createBlank = () => {
    const score = new Score 
    score.time = 0
    score.strikes = 0
    score.completed = false
    score.createScore()
    return score 
  }

  static createFromId = id => {
    const score = new Score
    score.id = id

    api.fetchScore(id)
    .then(scoreData => { 
      score.username = scoreData.included[0].attributes.name
      score.time = scoreData.data.attributes.time
      score.strikes = scoreData.data.attributes.strikes
    })

    return score
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