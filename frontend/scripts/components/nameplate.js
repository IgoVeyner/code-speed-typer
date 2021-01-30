class Nameplate {
  constructor() {
    this.createNameplate()
  }

  createNameplate = () => {
    const [usernameContainer, username] = this.createElements(["div, h2"])

    username.innerText = user.username

    usernameContainer.classList.add("nameplate-container")
    username.classList.add("username-text")

    usernameContainer.appendChild(username)
    main.appendChild(usernameContainer)
  }

  createElements = ([...elements]) => elements.map(element => document.createElement(element)) 
}