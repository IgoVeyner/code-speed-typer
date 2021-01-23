class Code {
  constructor(user) {
    this.user = user
    this.getCode()
  }

  // TODO:
  // 1. update instance info from fetch request
  // 2. update func to get random code data

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