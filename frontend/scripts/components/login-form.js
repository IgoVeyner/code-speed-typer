class LoginForm {
  constructor() {
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
    this.deleteForm()
    user.postUser(username)
  }

  deleteForm = () => this.main.innerHTML = ""

}
