class Code {
  constructor(user) {
    this.user = user
  }

  // TODO:
  // 1. update instance info from fetch request
  // 2. update func to get random code data

   getCode = () => {
    this.user.api.fetchCode(1)
  }
}