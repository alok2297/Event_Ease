import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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

  const handleOpen = (e, value) => {
    e.preventDefault();
    selectedImg(value);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Calculate the start and end indices based on the pageNumber
  const itemsPerPage = props.check === "photo" ? 12 : 6;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;

  // Use slice to extract the appropriate range of items
  const displayedPhotos = props.photosInfo.slice(startIndex, endIndex);

  return (
    <>
      {check === "photo" ? (
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
      ) : <div className="video-grid"> {displayedPhotos.map((item, i) => (
        <div className="photo-divison" key={i}>
          <iframe src="https://www.youtube.com/embed/-rePN9cxfaQ?si=OY8LlF2l7-DbC8PX&showinfo=0&controls=0&autohide=1"
            title="YouTube video player"
            frameborder="0"
            allowfullscree
            >
          </iframe>
        </div>
      ))} </div>}
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
