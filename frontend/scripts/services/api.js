class API {
  constructor(port = 3000) {
    this.url = `http://localhost:${port}`
  }

  parseJSON = response => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw console.error("Nope")
    }
  }

  headers = {"Accepts": "application/json", "Content-Type": "application/json"}

  get userURL() {
    return this.url + '/users'
  }

  postUser = () => {
    return fetch(this.userURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({})
    })
    .then(this.parseJSON)
  }
}