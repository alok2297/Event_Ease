import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cities from "../../../Data/Cities.json"
import VendorTypes from "../../../Data/VendorTypes.json"

function Login(){

    const [formData, setFormData] = useState({
      brandName: '',
      city: '',
      vendorType: '',
      email: '',
      phone: '',
      password: ''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
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
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="+91"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password*"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit" onClick={handleSubmit}>Continue</button>
              <div className="sign-in-link">
                <p>Already have an Account? <a href="/signin">Sign in</a></p>
                <span style={{"margin-right": "4px"}}>Are you a customer?</span>
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