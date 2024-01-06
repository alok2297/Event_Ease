import React, { useState } from "react";

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
    <div class="main-block-login">
    <div class="shadow pic-and-login">
      <div class="headline-image">India's Favourite Event Planning Platform</div>
      <div class="full-area-signin">
        <div class="upper-area-signin">
          <form class="block-for-login">
            <div class="margin">
              <p class="form-heading" id="sign-up-sign-in-form">Sign In/Sign Up</p>
              <div class="input-mail-id">
                <img src="Pictures/user.png" alt="" class="icon"/>
                <input id="email-phone-field" placeholder="Enter email or mobile*" name="emailOrPhone" value={emailOrPhone} onChange={handleChange}/>
              </div>
              <div class="input-mail-id">
                <img src="Pictures/user.png" alt="" class="icon"/>
                <input id="email-phone-id" placeholder="Enter Password" name="name" value={name} onChange={handlePassword}/>
              </div>
              <button class="ContinueBtn" style={{ display: showButton ? "block" : "none" }}>Continue</button>
            </div>
            <div id ="hide1" class="OR">
              <hr style={{width:"47%", alignSelf:"center"}} />
              <p class="or-heading">OR</p>
              <hr style={{width: "47%", alignSelf:"center"}}/>
            </div>
            <p id="hide2" class="Continue-with-text">Continue With</p>
            <div id="hide3" class="other-logins">
              <div class="social-icons-fb">
                <img id="fb-login-redirect" src="https://images.wedmegood.com/react-frontend-v4/static/media/fbicon.859bed25.svg" alt=""/>
                <p class="facebook-login">Facebook</p>
              </div>
              <div class="social-icons-google">
                <img id="gmail-login-redirect" src="https://images.wedmegood.com/react-frontend-v4/static/media/gicon.34be4ec1.svg" alt=""/>
                <p class="google-login">Google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login;