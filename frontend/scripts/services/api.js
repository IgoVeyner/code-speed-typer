class API {

  // Constructor

  constructor(port = 3000) {
    this.url = `http://localhost:${port}`
  }

  // Helpers

  parseJSON = response => response.json() 

  headers = {"Accepts": "application/json", "Content-Type": "application/json"}

  // Attribute getters

  get userURL() { return this.url + '/users' }
  get scoreURL() { return this.url + '/scores' }

  // User Requests

  postUser = username => {
    return fetch(this.userURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({user: { name: username } })
    })
    .then(this.parseJSON)
    .catch(error => console.log(error))
  }

  // Score Requests 

  postScore = id => {
    return fetch(this.scoreURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({score: {user_id: id} })
    })
    .then(this.parseJSON)
    .catch(error => console.log(error))
  }

  fetchScore = id => { 
    return fetch(this.scoreURL + `/${id}`)
    .then(this.parseJSON)
    .catch(error => console.log(error))
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
    .catch(error => console.log(error))
  }
}