import React, { useState } from "react";
import CitiesPopup from "./MainActivity/CitiesPopup";
import Modal from "@mui/material/Modal";

const Header = () => {
  const Vendors = [
    "Venues",
    "Vendors",
    "Photos",
    "Real Wedding",
    "Blog",
    "Shop",
  ];

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log(true);
    // props.OpenCityPop(true);
    setOpen(true); // Open the modal
  };

  return (
    <div>
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
            Udaipur
          </div>
          <i
            className="fa fa-caret-down h5 text-secondary v-center"
            style={{
              color: "black",
              alignItems: "center",
              alignSelf: "center",
              marginLeft: "auto",
              marginRight: "10px",
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
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CitiesPopup />
        </Modal>
      </nav>
      <ul className="flex-container Section-Navbar">
        <li>
          <a className="EventEase" href="#">
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
      </ul>
    </div>
  );
};

export default Header;
