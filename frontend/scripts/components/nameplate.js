class Nameplate {
  constructor() {
  }

  // Custom Constructor

  static createNameplate = () => {
    const nameplate = new Nameplate
    const [usernameContainer, username] = helpers.createElements(["div", "h2"])

    username.innerText = user.username

    usernameContainer.classList.add("nameplate-container")
    username.classList.add("username-text")

    usernameContainer.appendChild(username)
    main.appendChild(usernameContainer)

    return nameplate
  }
}