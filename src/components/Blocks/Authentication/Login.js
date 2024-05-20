import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    const[emailOrPhone,setEmailOrPhone]=useState("");
    const [showButton, setShowButton] = useState(false);
    const[name,SetName]=useState("");
    const handleChange= (event)=>{
        setEmailOrPhone(event.target.value);
        setShowButton(event.target.value !== "");
    };

    const handlePassword=(event)=>{
      SetName(event.target.value);
    };

    return (
    <div className="main-block-login">
    <div className="shadow pic-and-login">
      <div className="headline-image">India's Favourite Event Planning Platform</div>
      <div className="full-area-signin">
        <div className="upper-area-signin">
          <form className="block-for-login">
            <div className="margin">
              <p className="form-heading" id="sign-up-sign-in-form">Sign In/Sign Up</p>
              <div className="input-mail-id">
                <img src="Pictures/user.png" alt="" className="icon"/>
                <input id="email-phone-field" placeholder="Enter email or mobile*" name="emailOrPhone" value={emailOrPhone} onChange={handleChange}/>
              </div>
              <div className="input-mail-id">
                <img src="Pictures/user.png" alt="" className="icon"/>
                <input id="email-phone-id" placeholder="Enter Password" name="name" value={name} onChange={handlePassword}/>
              </div>
              <button className="ContinueBtn" style={{ display: showButton ? "block" : "none" }}>Continue</button>
            </div>
            <div id ="hide1" className="OR">
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
            </div>
            <div className="vendor-login">
              <span>Are you a vendor?</span>
              <Link to="/vendor-login">Business Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login;