class Nameplate {
  constructor() {
    this.createNameplate()
  }

  createNameplate = () => {
    const elementsToCreate = ["div", "h2"]
    const [usernameContainer, username] = elementsToCreate.map(element => document.createElement(element))

    username.innerText = user.username

    usernameContainer.classList.add("nameplate-container")

    usernameContainer.appendChild(username)
    main.appendChild(usernameContainer)
  }
}