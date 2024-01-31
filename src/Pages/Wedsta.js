import React from 'react'
import WedstaHeader from '../components/Blocks/Wedsta-header/WedstaHeader'
import '../components/Blocks/Wedsta-header/WedstaHeader.css';
const Wedsta = () => {
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
    </div>
  )
}

export default Wedsta
