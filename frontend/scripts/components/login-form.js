class LoginForm {
  constructor() {
    this.main = document.querySelector("main")
    this.createForm()
  } 

  createForm = () => {
    const form = document.createElement("form")
    const header = document.createElement("h1")
    const input = document.createElement("input")
    const submit = document.createElement("input")

    header.innerText = "Enter a Username"
    submit.type = "submit"
    submit.value = "Continue"

    form.addEventListener("submit", this.postToUsers)

    form.appendChild(header)
    form.appendChild(input)
    form.appendChild(submit)
    this.main.appendChild(form)
  }

  postToUsers = e => {
    e.preventDefault()
  }

}
