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
  outline: 'none',
};

const InfoPhotos = (props) => {
  const [open, setOpen] = React.useState(false);
  const [media, selectedMedia] = React.useState("");

  const { pageNumber, check } = props;

  const handleOpen = (e, value) => {
    e.preventDefault();
    selectedMedia(value);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Calculate the start and end indices based on the pageNumber
  const itemsPerPage = props.check === "photo" ? 12 : 6;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;

  // Use slice to extract the appropriate range of items
  const displayedPhotos = props.photosInfo.slice(startIndex, endIndex);
  const displayVideos = props.videoInfo.slice(startIndex, endIndex);
  function getYoutubeThumbnail(url){
    if(url){
        let video_id, thumbnail, result;
        if(url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/))
        {
          result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
            video_id = result.pop();
        }
        if(video_id){
            let quality_key = 'maxresdefault'; // Max quality
            thumbnail = "http://img.youtube.com/vi/"+video_id+"/"+quality_key+".jpg";
            return thumbnail;
        }
    }
    return false;
}

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
      ) : (
        <div className="container-main">
          {displayVideos.map((item, i) => (
            <div className="videoRatio" key={i}>
              <button className="thumbnailButton">
                <div className="videoInner">
                  <img
                    alt="Fwar - Mushrooms video thumbnail"
                    src={getYoutubeThumbnail(item)}
                    onClick={(e) => {
                      handleOpen(e, item);
                    }}
                    className="thumbnailImage"
                  />
                  <img
                    alt="Play Video"
                    onClick={(e) => {
                      handleOpen(e, item);
                    }}
                    src="https://floodframe.com/wp-content/uploads/2018/01/play_icon.png"
                    className="playIcon"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
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
              {check === "photo" ? (
                <div>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={media}
                    alt=""
                  />
                </div>
              ) : (
                <iframe
                  title="YouTube video player"
                  src={media}
                  style={{ height: "400px", width: "600px", border: "none" }}
                ></iframe>
              )}
            </Typography>
          </Box>
        </Modal>
      }
    </>
  );
};

export default InfoPhotos;
