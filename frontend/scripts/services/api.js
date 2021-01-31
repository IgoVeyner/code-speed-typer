class API {

  // Custom Constructor

  static startWithPort(port = 3000) {
    const api = new API
    api.url = `http://localhost:${port}`
    return api
  }

  // Helpers

  parseJSON = response => {
    if (response.status === 200){
      return response.json()
    }
    else {
      this.catchError(response)
      .then(resp => console.log(resp.error))
    }
  }
  
  catchError = response => response.json()

  headers = {"Accepts": "application/json", "Content-Type": "application/json"}

  // Attribute getters

  get userURL() { return this.url + '/users' }
  get scoreURL() { return this.url + '/scores' }
  get codeURL() { return this.url + '/codes' }
  get highscoreURL() {return this.url + '/highscores'}

  // User Requests

  postUser = username => {
    return fetch(this.userURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({user: { name: username } })
    })
    .then(this.parseJSON)
  }

  // Score Requests 

  postScore = (user_id, code_id) => {
    return fetch(this.scoreURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        score: {
          user_id: user_id,
          code_id: code_id
        } 
      })
    })
    .then(this.parseJSON)
  }

  fetchScore = id => { 
    return fetch(this.scoreURL + `/${id}`)
    .then(this.parseJSON)
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
  }

  // Code Requests

  fetchRandomCode = () => {
    return fetch(this.codeURL + `/random`)
    .then(this.parseJSON)
  }

  // Highscore Requests

  postHighscore = (code_id, score_id) => {
    return fetch(this.highscoreURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        highscore: {
          score_id: score_id,
          code_id: code_id
        } 
      })
    })
    .then(this.parseJSON)
  }

  updateHighscore = (id, score_id) => {
    return fetch(this.highscoreURL + `/${id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ highscore: {
        score_id: score_id
      }})
    })
    .then(this.parseJSON)
  }
}