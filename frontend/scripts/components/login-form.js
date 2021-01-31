class LoginForm {
  constructor() {
  } 

  // Custom Constructor

  static createForm = () => {
    const display = new LoginForm
    const [form, header, input, submit] = helpers.createElements(["form", "h1", "input", "input"])

    header.innerText = "Enter a Username"
    submit.type = "submit"
    submit.value = "Start"

    form.addEventListener("submit", display.postToUsers)

    form.classList.add("login-form")
    header.classList.add("form-header")
    input.classList.add('login-input')
    submit.classList.add('login-submit')

    for (const element of [header, input, submit]) { form.appendChild(element) }
    
    main.appendChild(form)
    input.focus()
  }

  // Helpers

  postToUsers = e => {
    e.preventDefault()
    const username = document.querySelector("input").value
    this.deleteForm()
    user.postUser(username)
  }

  deleteForm = () => main.innerHTML = ""
}
