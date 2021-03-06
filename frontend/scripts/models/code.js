class Code {

  // Custom Constructor

  static getCode = () => {
    const code = new Code
    
    api.fetchRandomCode()
    .then(data => code.handleData(data))

    return code
  }

  // Helper

  handleData = codeData => {
    this.id = codeData.data.id
    this.line = codeData.data.attributes.line
    this.name = codeData.data.attributes.name
    if (codeData.included.length > 0) { this.highscore = Highscore.createFromData(codeData.included[0]) }

    // Create Score needs to run after the above data is assigned,
    //  otherwise score creation will not have a code_id to send
    //  and it does not get created in the DB.
    //  Putting it outside the then statement will make it run before the assignment

    user.createScore()
    user.createGameDisplay()
  }
}