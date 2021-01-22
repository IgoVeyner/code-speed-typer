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

  createScore = () => this.user.api.postScore(this.user.id) 
}