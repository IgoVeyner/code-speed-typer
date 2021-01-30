class LoginForm {
  constructor() {
    this.createForm()
  } 

  createForm = () => {
    const [form, header, input, submit] = this.createElements(["form", "h1", "input", "input"])

    header.innerText = "Enter a Username"
    submit.type = "submit"
    submit.value = "Start"

    form.addEventListener("submit", this.postToUsers)

    form.classList.add("login-form")
    header.classList.add("form-header")
    input.classList.add('login-input')
    submit.classList.add('login-submit')

    for (const element of [header, input, submit]) { form.appendChild(element) }
    main.appendChild(form)
    input.focus()
  }

  createElements = ([...elements]) => elements.map(element => document.createElement(element)) 

  postToUsers = e => {
    e.preventDefault()
    const username = document.querySelector("input").value
    this.deleteForm()
    user.postUser(username)
  }

  deleteForm = () => main.innerHTML = ""
}
