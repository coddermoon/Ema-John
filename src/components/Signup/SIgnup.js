import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import './signup.css'

const SIgnup = () => {
    const {createUser} = useContext(AuthContext)
    const handleCreateUser=(e)=>{
        e.preventDefault();
        const form= e.target 
        const email = form.email.value 
        const password = form.password.value 
        // user created function
        createUser(email,password)
        .then(result=>{
            console.log(result)
            alert("successfully user created")
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    
    return (
        <div className="form-space">
        <div className="form-container">
      <h2 className="form-title">Register Now</h2>
      <form onSubmit={handleCreateUser}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email Adress" required/>
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password"  name="password" placeholder="password "  required/>
        </div>
       <div className="form-control">
       <input className="btn-submit" type="submit" value="Register" />
       </div>
      </form>
    </div>
    </div>
    );
};

export default SIgnup;