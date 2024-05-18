import React, { useState } from "react";
import "./NavForPic.css";
import { Container } from "../../Elements/Container";
import WedstaImageCategory from "../WedstaImageCategory/WedstaImageCategory";
import WedstaImages from "../../../Data/WedstaImages.json";
const NavForPic = () => {
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(1);
    const handleSilver = () => {
        setSilver(1);
        setGold(0);
      };
    
      const handleGold = () => {
        setGold(1);
        setSilver(0);
      };
  return (
    <><Container
      children={
        <div className="Containerr">
          <h3
            style={{
              fontFamily: "sans-serif",
              color: "#4a4a4a",
            }}
          >
            Photo Gallery
          </h3>
          <div
            style={{
              marginTop:"60px",
              marginBottom:"10px",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
            }}
          >
            <div
              className="pic-video"
              style={{ marginTop: "-30px", paddingBottom: "10px" }}
            >
              <div
                onClick={handleSilver}
                className={silver === 1 ? "selected" : ""}
              >
                <p>TOP PHOTOS</p>
              </div>
              <div
                onClick={handleGold}
                className={gold === 1 ? "selected" : ""}
              >
                <p>ALL FUNCTIONS</p>
              </div>
            </div>
          </div>
          <div className='paginationWedst'>
      </div>
        </div>
      }
    /><WedstaImageCategory
          photosInfo={WedstaImages}
          check = {silver === 1 ? "silver" : "gold"}
        /></>
  );
};

export default NavForPic;
