class CodeDisplay {
  constructor(main, user) {
    this.main = main
    this.user = user
    this.line = this.user.code.line
    this.createDisplay()
  }

  createDisplay = () => {
    const div = document.createElement("div")
    for (const char of this.line){
      const span = document.createElement("span")
      span.innerText = char
      div.appendChild(span)
    }
    this.main.appendChild(div)
  }
}