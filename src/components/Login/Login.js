import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-space">
        <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email Adress" />
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="password " />
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
