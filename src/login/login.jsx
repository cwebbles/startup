import React from 'react';
import '../../static/main.css'
import '../../static/index.css'

export function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeUsername = (e) => {
      setUsername(e.target.value);
      console.log(username);
  }

  const onChangePassword = (e) => {
      setPassword(e.target.value);
      console.log(password);
  }

  return (
    <main className='container-fluid text-center'>
      <img className="constellation-logo" src="../../static/Constellation_Logo-removebg-preview.png" alt="Constellation Logo"/>
        <h1>Welcome</h1>
        <p className="typing-demo">Login to explore.</p>
  
        <div className="container mt-2">
          <div className="row justify-content-center">
              <div className="login-form">
                  <form>
                      <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <input type="text" className="form-control" id="username" style={{width: 250 + 'px'}} placeholder="Enter your username" onChange={(e) => onChangeUsername(e)}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" className="form-control" id="password" style={{width: 250 + 'px'}} placeholder="Enter your password" onChange={(e) => onChangePassword(e)}/>
                      </div>
                      <div className="text-center">
                        <button type="button" className="btn btn-primary mr-3" id="signUp" onClick={signUp}>Sign Up</button>
                        <button type="button" className="btn btn-light ml-3" id="signIn" onClick={login}>Sign In</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </main>
  );

  async function login() {
    console.log(username, password);
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: username, pass: password})
    })
    if (response.status == 401) {
        alert("Incorrect username or password.")
        return;
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
    localStorage.setItem("--TypingLength", (46 + username.length + 'ch').toString());
}

async function signUp() {
    console.log(username, password);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    const response = await fetch('/auth/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: username, pass: password})
    })
    localStorage.setItem("--TypingLength", (46 + username.length + 'ch').toString());
}

}