import React, { useState } from "react";
import CitiesPopup from "../CitiesPopUp/CitiesPopup";
import './Header.css';
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = (props) => {
  const [rotate, setRotate] = useState(0); // usefor rotation

  const city = useSelector(state=>state.city);

  const Vendors = [
    "Venues",
    "Vendors",
    "Photos",
    "Real Wedding",
    "Blog",
    "Shop",
  ];

  const handleClick = () => {
    console.log(true);
    setRotate(rotate===0?1:0);
    setOpen(true);
  };

  const handleCallback = (childData) => {
    console.log(childData);
    setOpen(false);
    setRotate(0);
    // props.getCity(childData);
    // setCity(childData);

}
const [open, setOpen] = React.useState(false);
const handleClose = () => {
  setOpen(false);
  setRotate(0);
}

  return (
    <div style={{width:"100%"}}>
      <nav className="Main-tag">
        <div className="navbar-left">
          <h1 className="tag-line">
            India's Favorite Event Organizing Platform
          </h1>
        </div>
        <div
          className="header-cities"
          onClick={handleClick}
          style={{ height: "30px", width: "200px", backgroundColor: "white" }}
        >
          <div
            className="wedding-city"
            style={{
              marginLeft: "10px",
              color: "black",
              width: "auto",
              height: "auto",
            }}
          >
           {city}
          </div>
        <i
          className="fa fa-caret-down h5 text-secondary v-center"
          style={{
            color: "black",
            alignItems: "center",
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "10px",
            transform: `rotate(${rotate * 180}deg)`,
          }}
        ></i>
        </div>
        <div className="navbar-right">
          <a className="button-header" href="#">
            <img
              src="https://image.wedmegood.com/resized/20X/images/icons/download_app_new.png"
              alt="download-app"
              className="icon"
            />
            <span className="link-App-download">Download App</span>
          </a>
          <a className="button-header" href="#">
            <img
              src="https://image.wedmegood.com/resized/20X/images/icons/write_a_review_new.png"
              alt="write-review"
              className="icon"
            />
            <span className="link-App-review">Write a Review</span>
          </a>
        </div>
        <Modal
          style={{
            width: "0%",
            marginLeft: " auto",
            marginRight: "auto",
            backgroundColor: "transparent",
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CitiesPopup parentCallback={handleCallback} />
        </Modal>
      </nav>
      <ul className="flex-container Section-Navbar">
        <li>
          <a className="EventEase" href="/">
            Event Ease
          </a>
        </li>
        {Vendors.map((item, index) => (
          <li key={index}>
            <a className="navbar-brand" name={item}>
              {item}
            </a>
          </li>
        ))}
        <li>
          <a className="navbar-brand" href="#">
            E-Invites
            <img
              src="https://image.wedmegood.com/resized/30X/images/deals/store-new-badges.png" 
              style={{ marginLeft: 5 }}
              alt=""
            />
          </a>
        </li>
        <Link to='/login' style={{marginLeft:"auto", marginRight:"35px"}}><div className="loginBtn" ><span>Log In</span></div></Link>
      </ul>
    </div>
  );
};

export default Header;
