import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {

  // use context to load data

  const {loginUser}= useContext(AuthContext)

  const handleLogin = (e)=>{
    e.preventDefault();
    const form= e.target 
    const email = form.email.value 
    const password = form.password.value 
    // called the backend auth
    loginUser(email,password)
    .then(result=>{
      alert('successFully logged in')
    })
    .catch(error=>{
      alert(error.message)
    })
  }

  return (
    <div className="form-space">
        <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email Adress" required/>
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password"  name="password" placeholder="password "  required/>
        </div>
       <div className="form-control">
       <input className="btn-submit" type="submit" value="Login" />
       </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
