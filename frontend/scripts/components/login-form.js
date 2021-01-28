class LoginForm {
  constructor() {
    this.createForm()
  } 

  createForm = () => {
    const elementsToCreate = ["form", "h1", "input", "input"]
    const [form, header, input, submit] = elementsToCreate.map(element => document.createElement(element))

    header.innerText = "Enter a Username"
    submit.type = "submit"
    submit.value = "Continue"

    form.addEventListener("submit", this.postToUsers)

    form.classList.add("login-form")
    header.classList.add("form-header")

    for (const element of [header, input, submit]) { form.appendChild(element) }
    main.appendChild(form)
  }

  postToUsers = e => {
    e.preventDefault()
    const username = document.querySelector("input").value
    this.deleteForm()
    user.postUser(username)
  }

  deleteForm = () => main.innerHTML = ""

}
