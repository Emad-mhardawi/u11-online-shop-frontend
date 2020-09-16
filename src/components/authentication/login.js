import React from 'react';
import './login.css'
import {Link} from 'react-router-dom';

const login = () => {
    return (
        <div className= 'login'>
            
        <div className='login-box'>
      
      <form >
       
      
          <h2 className='form-header'> Sign in</h2>
          <input className='login-input' type= 'email' name='email'  placeholder='email*' ></input>
          <input className='login-input' type= 'text' name='password' placeholder='password*' ></input>
          <button className='login-button' type='submit'>SIGN IN </button>  
      </form>

      <div className='login-bottom'>
          <ul >
              <Link className='link' to={'/signup'}> <li className='noAccout-forgot'>Don't have an account? Sign Up</li></Link>
              <Link  className='link' to={'/signup'}> <li className='noAccout-forgot'>Forgot password ?</li></Link>
          </ul>
      </div>

      </div>

      <div>
          
      </div>

   </div>
    )
}

export default login
