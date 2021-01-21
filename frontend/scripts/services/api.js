class API {
  constructor(port = 3000) {
    this.url = `http://localhost:${port}`
  }

  headers = {"Accepts": "application/json", "Content-Type": "application/json"}

  get userURL() {
    return this.url + '/users'
  }

  postUser = () => {
    return fetch(this.userURL, {
      method: "POST",
      headers = this.headers,
      body: JSON.stringify({})
    })
    .then(console.log)
  }
}