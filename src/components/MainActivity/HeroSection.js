// function HeroSection(){

//     const city = [
//         {
//           id:0,
//           city: "lucknow",
//           img :"https://www.bing.com/images/search?view=detailV2&ccid=DgGCjUfA&id=ACAA718CD610768EC4F82B3409CD1B3F49C3653B&thid=OIP.DgGCjUfAHjcKvOnEUwlB3gHaEK&mediaurl=https%3a%2f%2fcdn.wallpapersafari.com%2f90%2f65%2f84LQpe.png&exph=1080&expw=1920&q=pixer+image&simid=607998560271688372&FORM=IRPRST&ck=8FB7FC9FA75000388E02BF110398C848&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0"
//         }
//       ];
//     return(
//         <div className="HeroDiv"> 
//           <div className="HeroSection-div">
//             <img src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/17/jaipur_bg.jpg" alt=""/>
//             <div className="img-wrapper">
//                 <h1 className='HeroSection-Img'>Plan a Delhi NCR Wedding</h1>
//                 <h2>Alok</h2>
//             </div>
//         </div>
//             {/* <img src={city[0].img} alt=""/> */}
//         </div>
//     )
// }
// export default HeroSection;

import React from 'react';

function HeroSection() {
  return (
    <div className="HeroDiv">
      <div className="HeroSection-div">
        <img src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/17/jaipur_bg.jpg" alt="" />
        <div class="absolute sc-iujRgT bWGfDV" height="50%" width="100%"></div>
        <div className="img-wrapper">
          <h1 className='HeroSection-Img'>Plan a Delhi NCR Wedding</h1>
          <h2>Alok</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
