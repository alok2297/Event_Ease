import React from "react";
import { Container } from "../../Elements/Container";
import "./RealWeddingDetailsHead.css";
import {Iconify} from "../../Elements/Icon";
const RealWeddingDetailsHead = () => {
  return (
    <Container
      children={
        <div className="Container">
          <div className="detail-readwedding-container">
            <div className="detail-image-head">
              <img
                src="https://image.wedmegood.com/resized/1000X/uploads/images/90619548fca54c9698dba34999e623carealwedding/D+K_Wedding-306.jpg?crop=249,397,1619,910"
                alt=""
              />
            </div>
            <div className="tag-and-caption">
            <div className="detail-name-location">
              <span style={{marginTop:"20px"}}>Drashti</span>
              <div className="icon-heart">
                <Iconify
                  width={20}
                  height={20}
                  color={"#B01E28"}
                  icon="mdi:heart"
                />
              </div>
              <span>Karan</span>
              <hr style={{width:"150px",marginTop:"10px"}}/>
              <div className="location-info" style={{ display: "flex" }}>
                <Iconify
                  width={20}
                  height={20}
                  color={"#4a4a4a"}
                  icon="mdi:location"
                />
                <p>Delhi NCR</p>
              </div>
              <p style={{marginBottom:"20px",marginTop:"5px"}}>Wed Feb 22 2023</p>
            </div>
            <p style={{margin:"20px 20px"}}>Intimate Kovalam Wedding With A Special Bridal Entry ... Read Blog</p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default RealWeddingDetailsHead;
