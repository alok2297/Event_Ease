import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Cities from "../../../Data/Cities.json"
import VendorTypes from "../../../Data/VendorTypes.json"
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { vendorLogin, vendorRegister } = useContext(AuthContext);
  const location = useLocation();
  const { pathname } = location;
  const [formData, setFormData] = useState({
    brandName: '',
    city: '',
    vendorType: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setErrorMessage("Invalid email format");
      return;
    }
  
    if (pathname === "/vendor-signup" && formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    
    setErrorMessage("");
    
    if (pathname === "/vendor-signup") {
      try {
        const res = await vendorRegister(formData);
        const data = await res?.json();
        if (data?.message) {
          setErrorMessage(data.message);
        }
        if (res.ok) {
          navigate("/dashboard");
        }
      } catch (e) {
        console.error('Registration error:', e);
      }
    } else {
      try {
        const res = await vendorLogin(formData);
        if (res.ok) {
          navigate("/dashboard");
        } else {
          const data = await res.json();
          setErrorMessage(data.message);
        }
      } catch (e) {
        console.error('Login error:', e);
      }
    }
  };
  

  return (
    <div className="main-block-login">
      <div className="shadow pic-and-login">
        <div className="headline-image-vendor"></div>
        <div className="full-area-signin">
          <div className="upper-area-signin">
            <form className="block-for-login">
              <div className="margin form-container">
                <p className="form-heading" id="sign-up-sign-in-form">
                  "Grow your Business with Us"
                </p>
                {
                  pathname === "/vendor-signup" &&
                  <React.Fragment>
                    <input
                      type="text"
                      name="brandName"
                      placeholder="Brand name*"
                      value={formData.brandName}
                      onChange={handleChange}
                      required
                    />
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="">City (Choose your base city here)*</option>
                      {Cities.map((cityObj, index) => (
                        <option key={index} value={cityObj.city}>{cityObj.city}</option>
                      ))}
                    </select>
                    <select
                      name="vendorType"
                      value={formData.vendorType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Vendor Type*</option>
                      {VendorTypes.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="+91"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </React.Fragment>
                }
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Password*"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {
                  pathname === "/vendor-signup" && 
                  <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Conform Password*"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                }
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" onClick={handleSubmit}>Continue</button>
                <div className="sign-in-link">
                  {
                    pathname === "/vendor-signup" ?
                    <p>Already have an Account? <a href="/vendor-login">Login</a></p>
                    : <p>Don't have an Account? <a href="/vendor-signup">Signup</a></p>
                  }
                  <span style={{ marginRight: "4px" }}>Are you a customer?</span>
                  <Link className="customer-signin" to="/login">
                    Customer Sign In
                  </Link>
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