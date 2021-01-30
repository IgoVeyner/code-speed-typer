class Code {
  constructor() {
    this.getCode()
  }

  getCode = () => {
    api.fetchRandomCode()
    .then(this.handleData)
  }

  handleData = codeData => {
    this.id = codeData.data.id
    this.line = codeData.data.attributes.line
    this.name = codeData.data.attributes.name
    if (codeData.included.length > 0) {
      this.highscore = new Highscore(codeData.included[0])
      // this.currentHighscoreID = parseInt(codeData.included[0].id)
      // this.highestScoreID = parseInt(codeData.included[0].relationships.score.data.id)
      // this.highestScore = new Score(this.highestScoreID)
    }

    // Create Score needs to run after the above data is assigned,
    //  otherwise score creation will not have a code_id to send
    //  and it does not get created in the DB.
    //  Putting it outside the then statement will make it run before the assignment

    user.createScore()
    user.createGameDisplay()
  }
}