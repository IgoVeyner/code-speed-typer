class Code {
  constructor(user) {
    this.user = user
    this.getCode()
  }

  getCode = () => {
    this.user.api.fetchRandomCode()
    .then(this.handleData)
  }

  handleData = codeData => {
    this.id = codeData.id
    this.line = codeData.line
    this.name = codeData.line
    this.user.createScore()
    this.user.createGameDisplay()
  }
}