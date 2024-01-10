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
const InfoPhotos = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e, value) => {
    e.preventDefault();
    selectedImg(value);
    console.log(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [img, selectedImg] = React.useState("");
  const [count, setCount] = React.useState(0);
  return (
    <div className="photos">
      <div className="photos-grid">
        {PhotosInfo.map((item, i) => (
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
      </div>
    </div>
  );
};

export default InfoPhotos;
