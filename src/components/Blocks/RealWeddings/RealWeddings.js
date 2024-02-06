import React from "react";
import "./RealWeddings.css";
import { Container } from "../../Elements/Container";
const RealWeddings = () => {
  return (
    <Container
      children={
        <div className="Container">
          <div className="wedding-story-main">
            <div className="real-wedding">
              <div className="wedding-main-image">
                <img
                  src="https://image.wedmegood.com/resized/450X/uploads/images/90619548fca54c9698dba34999e623carealwedding/D+K_Wedding-306.jpg?crop=249,397,1619,910"
                  alt=""
                />
              </div>
              <div className="lower-images">
                <div>
                  <img
                    src="https://image.wedmegood.com/resized/450X/uploads/images/cfa43a8b45604bd3a8e80db456b3b7e1realwedding/D+K_Wedding-317.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://image.wedmegood.com/resized/450X/uploads/images/6f9da9d6493847ad96d035f7685033cfrealwedding/D+K_Wedding-242.jpg"
                    alt=""
                  />
                  <div className="more-images">
                    <p className="white-more-icon">+</p>
                    <p className="more-photos">80 Photos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default RealWeddings;
