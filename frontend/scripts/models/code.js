class Code {
  constructor() {
    this.getCode()
  }

  getCode = () => {
    api.fetchRandomCode()
    .then(this.handleData)
  }

  handleData = codeData => {
    this.id = codeData.id
    this.line = codeData.line
    this.name = codeData.line

    // Create Score needs to run after the above data is assigned,
    //  otherwise score creation will not have a code_id to send
    //  and it does not get created in the DB

    user.createScore()
    user.createGameDisplay()
  }
}