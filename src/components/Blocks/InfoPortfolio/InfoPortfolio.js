import React from "react";
import { useState, useRef } from "react";
import "./InfoPortfolio.css";
// import TablePagination from "@mui/material/TablePagination";
import InfoPhotos from "../../Blocks/InfoPhotos/InfoPhotos";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PhotosInfo from "../../../Data/PhotosInfo.json";
import VideoInfo from "../../../Data/VideoInfo.json";
const InfoPortfolio = () => {
  const [page, setPage] = useState(1);
  const [video, setVideo] = useState(0);
  const [photo, setPhoto] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const pageNumber = useRef();
  pageNumber.current =
    photo === 1 ? PhotosInfo.length / 12 : VideoInfo.length / 6;
    console.log(pageNumber.current,Math.ceil(pageNumber.current));
  // State and function for getting the click it is photo or video
  const handlePhotos = () => {
    setPhoto(1);
    setVideo(0);
  };

  const handleVideo = () => {
    setVideo(1);
    setPhoto(0);
  };

  return (
    <div>
      <div className="portfolio">
        <div className="pic-video">
          <div onClick={handlePhotos} className={photo === 1 ? "selected" : ""}>
            <p>PORTFOLIO&nbsp;({PhotosInfo.length})</p>
          </div>
          <div onClick={handleVideo} className={video === 1 ? "selected" : ""}>
            <p>VIDEOS&nbsp;({VideoInfo.length})</p>
          </div>
        </div>
        <div className="component">
          <InfoPhotos
            photosInfo={PhotosInfo}
            videoInfo={VideoInfo}
            pageNumber={page}
            check={photo === 1 ? "photo" : "video"}
          />
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(pageNumber.current)}
                page={page}
                onChange={handleChangePage}
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPortfolio;
