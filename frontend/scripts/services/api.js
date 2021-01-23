class API {

  // Constructor

  constructor(port = 3000) {
    this.url = `http://localhost:${port}`
  }

  // Helpers

  parseJSON = response => response.json() 
  consoleLogError = error => console.log(error)

  headers = {"Accepts": "application/json", "Content-Type": "application/json"}

  // Attribute getters

  get userURL() { return this.url + '/users' }
  get scoreURL() { return this.url + '/scores' }
  get codeURL() { return this.url + '/codes' }

  // User Requests

  postUser = username => {
    return fetch(this.userURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({user: { name: username } })
    })
    .then(this.parseJSON)
    .catch(this.consoleLogError)
  }

  // Score Requests 

  postScore = (user_id, code_id) => {
    return fetch(this.scoreURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        score: {
          user_id: id,
          code_id: id
        } 
      })
    })
    .then(this.parseJSON)
    .catch(this.consoleLogError)
  }

  fetchScore = id => { 
    return fetch(this.scoreURL + `/${id}`)
    .then(this.parseJSON)
    .catch(this.consoleLogError)
  }

  updateScore = (id, time, strikes, completed = false) => {
    return fetch(this.scoreURL + `/${id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ score: {
        time: time,
        strikes: strikes,
        completed: completed
      }})
    })
    .then(this.parseJSON)
    .catch(this.consoleLogError)
  }

  // Code Requests

  fetchCode = id => {
    return fetch(this.codeURL + `/${id}`)
    .then(this.parseJSON)
    .catch(this.consoleLogError)
  }
}