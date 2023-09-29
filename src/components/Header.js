import React from "react";
// import './header.css'; // Import the CSS file

const Header = () => {
  return (
    <div>
    <nav className="Main-tag">
      <div className="navbar-left">
        <h1 className="tag-line">India's Favourite Event Organizing Platform</h1>
      </div>
      <div className="header-cities" style={{height:"30px", width:"200px",backgroundColor:"white" }}>
        <div className="wedding-city" style={{marginLeft:"10px", color:"black", width:"auto", height:"auto"}}>Udaipur</div>
        <i className="fa fa-caret-down h5 text-secondary v-center" style={{color:"black", alignItems:"center", alignSelf:"center", marginLeft:"auto", marginRight:"10px"}}></i>
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
      </nav>
      <ul className="flex-container Section-Navbar">
        <li>
          <a className="EventEase" href="#">
            Event Ease
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            Venues
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            Vendors
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            Photos
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            Real Weddings
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            Shop
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            E-Invites
            <img src="https://image.wedmegood.com/resized/30X/images/deals/store-new-badges.png" style={{marginLeft:5}} alt=""/>
          </a>
        </li>
      </ul>
      </div>
  );
};

export default Header;
