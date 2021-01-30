class Highscore {
  constructor() {
  }

  static createFromData = data => {
    const highscore = new Highscore
    highscore.id = data.id
    highscore.scoreID = data.relationships.score.data.id
    highscore.score = Score.createFromId(highscore.scoreID)
    return highscore
  }

  static createFromPostHighscore = data => {
    const highscore = new Highscore
    highscore.id = data.id
    highscore.scoreID = data.attributes.score_id
    highscore.score = user.score
    return highscore
  }
}