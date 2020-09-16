import React from 'react'
import './signup.css';

const signup = () => {
    return (
        <div className='signup'>
          <div className='signup-box'>
           
           <form >
               
               <h2 className='form-header'> Sign up</h2>
               <input className='signup-input' type= 'text' name='displayName' placeholder='displayName' ></input>

               <input className='signup-input' type= 'email' name='email'  placeholder='email*' ></input>
               
               <input className='signup-input'type= 'text' name='password'  placeholder='password*' ></input>
               
               <input className='signup-input' type= 'text' name='confirmedPassword' placeholder='confirm password*' ></input>

               <button className='signup-button' type='submit'>create new account </button>  
           </form>
           </div>
        </div>
    )
}

export default signup
