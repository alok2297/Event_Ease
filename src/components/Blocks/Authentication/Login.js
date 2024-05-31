import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Container } from "components/Elements/Container";

function Login() {
  const navigate = useNavigate();
  const { login, register } = useContext(AuthContext);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event) => {
    setEmailOrPhone(event.target.value);
    setShowButton(event.target.value !== "");
  };
  const location = useLocation();
  const { pathname } = location;

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(emailOrPhone)) {
      setErrorMessage("Invalid email format");
      return;
    }

    if (pathname === "/signup" && password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    setErrorMessage("");
    if (pathname === "/signup") {
      try {
        const res = await register(emailOrPhone, password);
        const data = await res?.json()
        if (data?.msg) {
          setErrorMessage(data?.msg);
        }
        if (res?.ok) {
          navigate("/")
        }
      }
      catch (e) {
        console.log(e);
        console.error(e);
      }
    } else {
      try {
        const res = await login(emailOrPhone, password);
        if (res?.ok) {
          navigate("/")
        }
      }
      catch (e) {
        console.error(e);
      }

    }
  };

  return (
    <Container children={
      <div className="main-block-login">
        <div className="shadow pic-and-login">
          <div className="headline-image">India's Favourite Event Planning Platform</div>
          <div className="full-area-signin">
            <div className="upper-area-signin">
              <form className="block-for-login">
                <div className="margin">
                  <p className="form-heading" id="sign-up-sign-in-form">
                    {
                      pathname === "/login" ?
                        <span>Sign In</span>
                        :
                        <span>Sign Up</span>
                    }
                  </p>
                  <div className="input-mail-id">
                    <img src="Pictures/user.png" alt="" className="icon" />
                    <input type="email" id="email-phone-field" placeholder="Enter email*" name="emailOrPhone" value={emailOrPhone} onChange={handleChange} />
                  </div>
                  <div className="input-mail-id">
                    <img src="Pictures/user.png" alt="" className="icon" />
                    <input type="text" id="email-phone-id" placeholder="Enter Password" name="name" value={password} onChange={handlePassword} />
                  </div>
                  {
                    pathname === "/signup" &&
                    <div className="input-mail-id">
                      <img src="Pictures/user.png" alt="" className="icon" />
                      <input type="password" id="email-phone-id" placeholder="Confirm Password" name="name" value={confirmPassword} onChange={handleConfirmPassword} />
                    </div>
                  }
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <button className="ContinueBtn" style={{ display: showButton ? "block" : "none" }} onClick={handleLogin}>Continue</button>
                </div>
                {
                  pathname === "/login" ?
                    <div className="customer-signup">
                      <span>Don't have an account?</span>
                      <Link to="/signup">SignUp</Link>
                    </div>
                    :
                    <div className="customer-signup">
                      <span>Already have an account?</span>
                      <Link to="/login">Login</Link>
                    </div>
                }
                {/* <div id ="hide1" className="OR">
              <hr style={{width:"47%", alignSelf:"center"}} />
              <p className="or-heading">OR</p>
              <hr style={{width: "47%", alignSelf:"center"}}/>
            </div>
            <p id="hide2" className="Continue-with-text">Continue With</p>
            <div id="hide3" className="other-logins">
              <div className="social-icons-fb">
                <img id="fb-login-redirect" src="https://images.wedmegood.com/react-frontend-v4/static/media/fbicon.859bed25.svg" alt=""/>
                <p className="facebook-login">Facebook</p>
              </div>
              <div className="social-icons-google">
                <img id="gmail-login-redirect" src="https://images.wedmegood.com/react-frontend-v4/static/media/gicon.34be4ec1.svg" alt=""/>
                <p className="google-login">Google</p>
              </div>
            </div> */}
                <div className="vendor-login">
                  <span>Are you a vendor?</span>
                  <Link to="/vendor-login">Business Sign In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    }>
    </Container>
  );
}

export default Login;