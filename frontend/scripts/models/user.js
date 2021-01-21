class User {

  constructor() {
    this.api = new API
    this.display = new LoginForm(this)
  }

  // TODO
  // 2. User instance create an instance of login display component
  //      this component render the form for User creation
  // 3. create a name setter that accepts an argument
  //      it will set this.id & this.name
  //      no real function to this but in the future if I were to add features to
  //      edit / delete users this would be useful information
}