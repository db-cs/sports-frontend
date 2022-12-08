import "../css/login.css"
export function Login (){
    return (
        <div id="loginPage">
            <h1 className="loginHeader">Login</h1>
            <input className="usernameInput" placeholder="Username" />
            <input className="passwordInput" placeholder="Password" />
            <br/>
            <button className="loginButton">Login</button>
        </div>
    )
}