class API {
  constructor(port = 3000) {
    this.url = `http://localhost:${port}`
  }

  get userURL() {
    return this.url + '/users'
  }
}