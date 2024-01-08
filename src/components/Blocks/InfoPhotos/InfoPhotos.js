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
const InfoPhotos = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [count,setCount] = React.useState(0);
  return (
    <div className="photos">
      <div className="photos-grid">
        <div className="img-divison">
          <img
            onClick={handleOpen}
            src="https://image.wedmegood.com/resized/450X/uploads/member/911781/1700895862_IMG_20230819_WA0043.jpg?crop=0,154,1600,900"
            alt=""
          ></img>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://image.wedmegood.com/resized/450X/uploads/member/911781/1700895862_IMG_20230819_WA0043.jpg?crop=0,154,1600,900"
                  alt=""
                />
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default InfoPhotos;
