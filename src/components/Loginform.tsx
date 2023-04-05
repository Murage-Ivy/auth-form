import '../App.css'
function Loginform() {

    return (
        <div className='login-form'>
            <div className="header">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7d39b93-5c9e-4a35-9e32-0166b29e6ada/d5wotdb-424c4560-4a1e-4d60-b531-0dca44fa20c5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3ZDM5YjkzLTVjOWUtNGEzNS05ZTMyLTAxNjZiMjllNmFkYVwvZDV3b3RkYi00MjRjNDU2MC00YTFlLTRkNjAtYjUzMS0wZGNhNDRmYTIwYzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5ZVYEnaCzkFGcnIlDICxpVGlGO7-yi949W0goK3NBes" alt="pokemon"/>
            </div>
            <form id="login">
                <div className="login-form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                </div>
                <div className="login-form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>

                <div className="login-form-group">
                    <input id='button' type="submit" value="Login" />
                </div>

                <div className="footer">
                    <p>Don't have an account?<span>Sign up</span></p>
                </div>
            </form>
        </div>
    )
}

export default Loginform