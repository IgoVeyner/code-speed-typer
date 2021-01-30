class Highscore {
  constructor(data) {
    this.id = data.id
    this.scoreID = data.relationships.score.data.id
    this.score = new Score(this.scoreID)
  }
}