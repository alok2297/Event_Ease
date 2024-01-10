import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PhotosInfo from "../../../LocalFile/PhotosInfo.json";
import "./InfoPhotos.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #fff",
  boxShadow: 24,
  p: 2,
};

const InfoPhotos = (props) => {
  const [open, setOpen] = React.useState(false);
  const [img, selectedImg] = React.useState("");

  const { pageNumber, check } = props;
  console.log(check);

  const handleOpen = (e, value) => {
    e.preventDefault();
    selectedImg(value);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Calculate the start and end indices based on the pageNumber
  const itemsPerPage = 12;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;

  // Use slice to extract the appropriate range of items
  const displayedPhotos = PhotosInfo.slice(startIndex, endIndex);

  return (
    <>
      {check === "photo" && (
        <div className="photos">
          <div className="photos-grid">
            {displayedPhotos.map((item, i) => (
              <div className="img-divison" key={i}>
                <img
                  onClick={(e) => {
                    handleOpen(e, item.imgUrl);
                  }}
                  src={item.imgUrl}
                  alt=""
                ></img>
              </div>
            ))}
          </div>
        </div>
      )}
      :
      <div className="main-video-info">
        <div>
          <img
            src="https://images.wedmegood.com/uploads/video_youtube_image/122295/youtube_122295_geYOhcbfvbQ.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <a href="$" className="icon">
              <i class="fa fa-user"></i>
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://images.wedmegood.com/uploads/video_youtube_image/122295/youtube_122295_geYOhcbfvbQ.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <a href="$" className="icon">
              <i class="fa fa-user"></i>
            </a>
          </div>
        </div>
      </div>
      {
        <Modal
          style={{
            backgroundColor: "transparent",
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <img style={{ height: "100%", width: "100%" }} src={img} alt="" />
            </Typography>
          </Box>
        </Modal>
      }
    </>
  );
};

export default InfoPhotos;
