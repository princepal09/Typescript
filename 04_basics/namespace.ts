namespace usernameSpace {
  export class Auth {
    login() {
      console.log("User login function");
    }
  }

  export function getList() {
    console.log("List of users");
  }
}

var user = new usernameSpace.Auth();
user.login();
