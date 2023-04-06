import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function SignForm() {
  const { signedUser, handleSubmitSignup, handleChangeSignup } = useContext(UserContext)
  return (
    <div className='signup-form'>
      <div className="signup-header">
      </div>

      <form id="signup" onSubmit={handleSubmitSignup}>
        <div className="signup-form-group">
          <label htmlFor="username">Username</label>
          <input type="text"
            name="username"
            id="username"
            placeholder="Username"
            autoComplete='username'
            value={signedUser?.username}
            onChange={handleChangeSignup}
            required />
        </div>
        <div className="signup-form-group">
          <label htmlFor="password">Password</label>
          <input type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete='current-password'
            value={signedUser?.password}
            onChange={handleChangeSignup}
            required />
        </div>
        <div className="signup-form-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password"
            name="password_confirmation"
            id="passwordconfirm"
            placeholder="Password"
            autoComplete='current-password-confirmation'
            value={signedUser?.password_confirmation}
            onChange={handleChangeSignup}
            required />
        </div>
        <div className="signup-form-group">
          <input id='button' type="submit" value="Sign Up" />
        </div>
        <div className="footer">
          <p>Already have an account?<NavLink to="/"><span>Log in</span></NavLink></p>
        </div>
      </form>
    </div>

  )
}

export default SignForm