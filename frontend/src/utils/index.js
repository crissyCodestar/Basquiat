import * as decode from 'jwt-decode';

class AuthRoutes {
  constructor(){
    this.fetch = this.fetch.bind(this) // React binding stuff
    this.login = this.login.bind(this)
    this.getUserProfile = this.getUserProfile.bind(this)
  }


login(username, password){
console.log(username);
    return this.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => {
        console.log(res);
        this.setToken(res.token)
        return Promise.resolve(res);
      })
  }

  // On mount check if user token exists
  loggedIn(){
    const token = this.getToken()

    return !!token && !this.isTokenExpired(token)
  }

  // Check token expiration
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
        //Checking current time and if it is expired
      if(decoded.exp < Date.now / 1000){
          return true;
      }
      else{
        return false;
      }
    }
    catch(err){
      return false;
    }
  }

  setToken(userIdToken) {
    // Saves users token to localStorage
    localStorage.setItem('user_id_token', userIdToken)
  }

  getToken(){
    // Get user id token from localStorage
    return localStorage.getItem('user_id_token')
  }

  logout(){
    // User logout clears token from local storage
    localStorage.removeItem('user_id_token')
  }
    // Get user info
  getUserProfile(){
    return decode(this.getToken())
  }


  // Sets fetch get requests for all queries to back end seeking auth header
  // and checks the response status
  fetch(url, options){
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (this.loggedIn()){
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(res => res.json())
  }

  _checkStatus(res){
    if(res.status >= 200 && res.status < 300){
        return res
    } else {
      var err = new Error(res.statusText)
      err.res = res
      throw err
    }

  }



  }


  export default AuthRoutes;
