class API {

  // Constructor

  constructor(port = 3000) {
    this.url = `http://localhost:${port}`
  }

  // Helpers

  parseJSON = response => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw console.error("Nope")
    }
  }

  headers = {"Accepts": "application/json", "Content-Type": "application/json"}

  // Attribute getters

  get userURL() {
    return this.url + '/users'
  }

  // User Requests

  postUser = (username) => {
    return fetch(this.userURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({user: { name: username } })
    })
    .then(this.parseJSON)
  }
}