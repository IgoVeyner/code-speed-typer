class Nameplate {
  constructor(main) {
    this.main = main
    this.createNameplate()
  }

  createNameplate = () => {
    const elementsToCreate = ["div", "h2"]
    const [usernameContainer, username] = elementsToCreate.map(element => document.createElement(element))

    username.innerText = user.username

    usernameContainer.appendChild(username)
    this.main.appendChild(usernameContainer)
  }
}