import React from 'react'
import WedstaHeader from '../components/Blocks/Wedsta-header/WedstaHeader'
import '../components/Blocks/Wedsta-header/WedstaHeader.css';
const Wedsta = () => {
  return (
    <div>
      <div className="HeroDiv">
      <div className="HeroSection-div shadow">
        <img
          src="https://image.wedmegood.com/resized/1280X/images/wedsta/backgoundImage/family_makeup_banner.jpg"
          alt=""
        />
        <div className="absolute sc-iujRgT bWGfDV" height="50%" width="100%"></div>
        <div className="img-wrapper">
          <h1 className="HeroSection-Img">Wedsta Family Service by <span>Event Ease</span></h1>
        </div>
      </div>
    </div>
      <WedstaHeader/>
    </div>
  )
}

export default Wedsta
