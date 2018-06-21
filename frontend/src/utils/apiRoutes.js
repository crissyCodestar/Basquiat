class ApiRoutes {
  constructor(){
    this.register = this.register.bind(this) // React binding stuff

  }

  register(full_name, username, password, email, redirect){
    console.log(full_name);
    return fetch("/signup", {
      method: 'POST',
      body: JSON.stringify({
          full_name,
          username,
          password,
          email
        })
      })
      .then(res => {
        console.log(res);
        return res

      })
      .catch(err => {
        console.log(err);
        return err
      });

  }

}

export default ApiRoutes;
