import React, { useState, useContext, useEffect } from "react";
import CitiesPopup from "../CitiesPopUp/CitiesPopup";
import './Header.css';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Iconify } from "components/Elements/Icon";
import { AuthContext } from "../Authentication/AuthContext";
const style = {
  outline: 'none',
}

const Header = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setAnchorEl(null);
    setRotateUser(0)
  }, [pathname]);
  const { authState, logout } = useContext(AuthContext);

  const [rotate, setRotate] = useState(0); // usefor rotation
  const [rotateUser, setRotateUser] = useState(0); // usefor rotation
  const city = useSelector(state => state.city);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenu = (event) => {
    setRotateUser(1)
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setRotateUser(0)
    setAnchorEl(null);
  };

  const Vendors = [
    {
      name: "Venues",
      link: "/venues"
    },
    {
      name: "Vendors",
      link: "/vendors"
    },
    {
      name: "Photos",
      link: "/photos"
    },
    {
      name: "Real Wedding",
      link: "/real-wedding"
    },
  ];

  const handleClick = () => {
    setRotate(rotate === 0 ? 1 : 0);
    setOpen(true);
  };

  const handleCallback = (childData) => {
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
    <div style={{ width: "100%" }}>
      <nav className="Main-tag">
        <div className="navbar-left">
          <h1 className="tag-line">
            India's Favorite Event Organizing Platform
          </h1>
        </div>
        {/* <div
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
        </div> */}
        <div className="navbar-right">
          {/* <a className="button-header" href="#">
            <img
              src="https://image.wedmegood.com/resized/20X/images/icons/download_app_new.png"
              alt="download-app"
              className="icon"
            />
            <span className="link-App-download">Download App</span>
          </a> */}
          {/* <a className="button-header" href="#">
            <img
              src="https://image.wedmegood.com/resized/20X/images/icons/write_a_review_new.png"
              alt="write-review"
              className="icon"
            />
            <span className="link-App-review">Write a Review</span>
          </a> */}
        </div>
        <Modal
          style={{
            width: "0%",
            marginLeft: " auto",
            marginRight: "auto",
            backgroundColor: "transparent",
            border: "none",
            outline: 'none',
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CitiesPopup parentCallback={handleCallback} />
          </Box>
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
            <a className="navbar-brand" name={item.name} href={item?.link}>
              {item.name}
            </a>
          </li>
        ))}
        {/* <li>
          <a className="navbar-brand" href="#">
            E-Invites
            <img
              src="https://image.wedmegood.com/resized/30X/images/deals/store-new-badges.png" 
              style={{ marginLeft: 5 }}
              alt=""
            />
          </a>
        </li> */}

        {
          authState.token ?
            <div style={{ marginLeft: "auto", marginRight: "35px" }}>
              <Button
                id="demo-positioned-button"
                aria-controls={openMenu ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleMenu}
                style={{ color: "white" }}
              >
                <Iconify width={24} height={24} icon="mdi:user"></Iconify>
                <Iconify width={24} height={24} icon="mdi:chevron-down" style={{ transform: `rotate(${rotateUser * 180}deg)` }}></Iconify>
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <MenuItem onClick={logout}>Logout</MenuItem>
                {
                  (localStorage.getItem('role')) === "Vendor" &&
                  <MenuItem>
                    <Link to='/dashboard' style={{ color: "inherit" }}>Dashboard</Link>
                  </MenuItem>
                }
              </Menu>
            </div>
            :
            <Link to='/login' style={{ marginLeft: "auto", marginRight: "35px" }}><div className="loginBtn" ><span>Log In</span></div></Link>
        }

      </ul>
    </div>
  );
};

export default Header;
