import React, { useState } from 'react'
import './Login.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Login = () => {

    const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <image src={user_icon} alt="" />
            <input type="text" placeholder="User Name" />
        </div>}
        <form>
        <div className="input">
            <image src={email_icon} alt="" />
            <input type="email" placeholder="Email ID" />
        </div></form>
        <div className="input">
            <image src={password_icon} alt="" />
            <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?  <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Login
