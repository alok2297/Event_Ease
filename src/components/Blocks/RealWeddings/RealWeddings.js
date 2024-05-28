import React from "react";
import "./RealWeddings.css";
import {Iconify} from "../../Elements/Icon";
import { Container } from "../../Elements/Container";
const RealWeddings = (props) => {
  const {photosInfo, pageNumber,type, title} = props;
  const itemsPerPage = 21;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;

  var displayedPhotos = photosInfo.slice(startIndex, endIndex);
  if(type===1){
    displayedPhotos=photosInfo.slice(0,3);
  }
  return (
    <Container
      children={
        <div className="main-cntr-wed">
          <h1>{title}</h1>
          <div className="wedding-story-main">
            {displayedPhotos.map((item,i)=>(<div key = {i} className="real-wedding">
              <div className="wedding-main-image">
                <img
                  src={item.imgArr[0]}
                  alt=""
                />
              </div>
              <div className="lower-images">
                <div>
                  <img
                    src={item.imgArr[1]}
                    alt=""
                  />
                </div>
                <div className="image-for-more">
                  <img
                    src={item.imgArr[2]}
                    alt=""
                  />
                  <div className="more-images">
                    <p className="white-more-icon">+</p>
                    <p className="more-photos">{item.imgArr.length} Photos</p>
                  </div>
                </div>
              </div>
              <span>{item.name}</span>
              <div className="location-realwedding">
                <div>
                <Iconify
                  width={20}
                  height={18}
                  color={"#4a4a4a"}
                  icon="mdi:location"
                  />
                </div>
                <p>{item.city}</p>
              </div>
            </div>))}
          </div>
          <div className="pagination">
          </div>
        </div>
      }
    />
  );
};

export default RealWeddings;
