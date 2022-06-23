import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const imageURL =
    "https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/eceef24d-4920-430f-988b-d2f48f8ad060/IN-en-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  return (
    <div className="login">
      <div
        className="login__background"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="login__box">
          <h1 className="login__box__title">Sign In</h1>
          
            <form>
              <div className="login-creds">
                <label htmlFor="username">Username</label>
                <input className="login-input" type="text" id="username"></input>
              </div>
              <div className="login-creds">
                <label htmlFor="password">Password</label>
                <input className="login-input" type="password" id="password"></input>
              </div>
              <div className="login-button">
                <Link className="login-button--styles" to="/homepage">Sign In</Link>
              </div>
            </form>
          
        </div>
      </div>
    </div>
  );
}
