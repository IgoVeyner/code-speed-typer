class LoginForm {
  constructor(user) {
    this.user = user
    this.main = document.querySelector("main")
    this.createForm()
  } 

  createForm = () => {
    const [form, header, input, submit] = ["form", "h1", "input", "input"].map(element => {
      return document.createElement(element)
    })

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
    })
  }

  deleteForm = () => this.main.innerHTML = ""

}
