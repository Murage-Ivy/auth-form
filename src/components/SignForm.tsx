import React from 'react'

function SignForm() {
  return (
    <div className='signup-form'>
      <div className="signup-header">
      </div>

      <form id="signup">
        <div className="signup-form-group">
          <label htmlFor="username">Username</label>
          <input type="text"
            name="username"
            id="username"
            placeholder="Username" />
        </div>
        <div className="signup-form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <div className="signup-form-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <div className="signup-form-group">
          <input id='button' type="submit" value="Sign Up" />
        </div>
        <div className="footer">
          <p>Already have an account?<span>Log in</span></p>
        </div>
      </form>
    </div>

  )
}

export default SignForm