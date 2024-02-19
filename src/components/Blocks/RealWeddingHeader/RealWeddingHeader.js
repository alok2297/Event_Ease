import React from "react";
import "./RealWeddingHeader.css";
import PhotosIdea from "../PhotosIdea/PhotosIdea";
import {Container} from "../../Elements/Container";
import { Iconify } from "../../Elements/Icon";
const RealWeddingHeader = () => {
  return (
    <div className="realwedding-header">
      <div className="real-weddingHeader-image">
        <img src="https://images.wedmegood.com/images/rw-banner.png" alt="" />
      </div>
      <div className="div-background"></div>
      <div className="text-header">
        <span>Real Weddings on Event Ease | Photos and Trending Ideas</span>
        <div>
          Browse pictures from real weddings shared by couples on Event Ease.
          Know latest wedding trends, outfit ideas, vendors chosen by real
          brides & grooms in different cities and culture.
        </div>
      </div>
      <div className="box-shadow-input">
        <div className="search-input">
          <div className="serach-icon">
            <Iconify
              width={20}
              height={20}
              color={"#4a4a4a"}
              icon="material-symbols:search"
            />
          </div>
          <input className="text-bridal-groom" type="text" placeholder="Search by Bride/Groom" />
        </div>
      </div>
      <Container children = {
        <PhotosIdea></PhotosIdea>
      }/>
    </div>
  );
};

export default RealWeddingHeader;
