class Nameplate {
  constructor(main, user) {
    this.main = main
    this.user = user
    this.createNameplate()
  }

  createNameplate = () => {
    const elementsToCreate = ["div", "h2"]
    const [usernameContainer, username] = elementsToCreate.map(element => document.createElement(element))

    username.innerText = this.user.username

    usernameContainer.appendChild(username)
    this.main.appendChild(usernameContainer)
  }
}