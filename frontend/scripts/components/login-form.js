class LoginForm {
  constructor(user) {
    this.user = user
    this.main = document.querySelector("main")
    this.createForm()
  } 

  createForm = () => {
    const elementsToCreate = ["form", "h1", "input", "input"]
    const [form, header, input, submit] = elementsToCreate.map(element => document.createElement(element))

    header.innerText = "Enter a Username"
    submit.type = "submit"
    submit.value = "Continue"

    form.addEventListener("submit", this.postToUsers)

    for (const element of [header, input, submit]) { form.appendChild(element) }
    this.main.appendChild(form)
  }

  postToUsers = e => {
    e.preventDefault()
    const username = document.querySelector("input").value
    this.user.api.postUser(username)
    .then(data => {
      user.updateInfo(data)
      this.deleteForm()
      this.user.displayGame()
    })
    // .catch(error => console.log(error))
  }

  deleteForm = () => this.main.innerHTML = ""

}
