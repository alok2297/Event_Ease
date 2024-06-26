import React from "react";
import { Container } from "../../Elements/Container";
import "./WedstaImageCategory.css";
import WedstImage from "../../../Data/WedstaImages.json"
import { useNavigate } from "react-router-dom";

const WedstaImageCategory = (props) => {
  const { pageNumber, check } = props;
  const itemsPerPage = 8;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;

  const displayedPhotos = props.photosInfo.slice(startIndex, endIndex);
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/wedsta")
  }

  return (
    <div
      children={
        <div className="Container">
          <div className="category-container">
            {WedstImage.map((item, i) =>
              check === item.packageInfo ? (
                <div key={i} className="wedsta-container" onClick={handleClick}>
                  <div className="category-image">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <span>{item.name}</span>
                  <div>{item.packageInfo} | Shot in Pune</div>
                </div>
              ) : null
            )}
          </div>
        </div>
      }
    />
  );
};

export default WedstaImageCategory;
