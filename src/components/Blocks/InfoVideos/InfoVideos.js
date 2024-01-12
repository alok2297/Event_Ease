import YouTube from "react-youtube";
import '../InfoPhotos/InfoPhotos.css';

const InfoVideos = ({ setHasLoaded, videoId }) => {
  // Once the YouTube package (react-youtube) has loaded
  // tell the thumbnail it is no longer needed.
  // Play the video.
  const _onReady = (event) => {
    setHasLoaded(true);
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={_onReady}
      className="videoInner"
      iframeClassName="videoInner"
    />
  );
};

export default InfoVideos;