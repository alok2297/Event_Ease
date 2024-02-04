import React, { useRef, useState } from 'react'
import WedstaHeader from '../components/Blocks/Wedsta-header/WedstaHeader'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import '../components/Blocks/Wedsta-header/WedstaHeader.css';
import WedstaImages from "../Data/WedstaImages.json";
import WedstaImageCategory from '../components/Blocks/WedstaImageCategory/WedstaImageCategory';
const Wedsta = () => {
  const [page, setPage] = useState(1);
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(1);
  const [diamond, setDiamond] = useState(0);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const pageNumber = useRef();
  pageNumber.current = WedstaImages.length / 12; 
  const handleSilver = () => {
    setSilver(1);
    setGold(0);
    setDiamond(0);
  };

  const handleGold = () => {
    setGold(1);
    setSilver(0);
    setDiamond(0);
  };
  const handleDiamond=()=>{
    setDiamond(1);
    setGold(0);
    setSilver(0);
  }
  return (
    <div>
      <div className="HeroDivWedsta">
      <div className="HeroDivWedstaSection-div shadow">
        <img
          src="https://image.wedmegood.com/resized/1280X/images/wedsta/backgoundImage/family_makeup_banner.jpg"
          alt=""
        />
        <div className="absolute sc-iujRgT bWGfDV" height="50%" width="100%"></div>
        <div className="img-wrapper">
          <p className="HeroDivWedstaSection-Img">Wedsta Family Service by <span>Event Ease</span></p>
        </div>
      </div>
    </div>
      <WedstaHeader/>

      <h3 style={{margin:"50px 80px 0 80px", fontFamily:"sans-serif",color:"#4a4a4a"}}>Our Latest Work</h3>
      <div  style={{margin:"80px 80px 0 80px", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)"}}>
      <div className="pic-video" style={{marginTop: "-30px",paddingBottom:"10px"}}>
          <div onClick={handleSilver} className={silver === 1 ? "selected" : ""}>
            <p>Silver&nbsp;({23})</p>
          </div>
          <div onClick={handleGold} className={gold === 1 ? "selected" : ""}>
            <p>Gold&nbsp;({34})</p>
          </div>
          <div onClick={handleDiamond} className={diamond === 1 ? "selected" : ""}>
            <p>Diamond&nbsp;({34})</p>
          </div>
        </div>
      </div>
      <div className='paginationWedst'>
        <WedstaImageCategory
          photosInfo={WedstaImages}
          pageNumber={page}
          check = {silver === 1 ? "silver" : gold === 1 ? "gold" : "diamond"}
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
  )
}

export default Wedsta
