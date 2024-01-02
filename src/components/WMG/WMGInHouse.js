import React from 'react'
import {Container} from '../Elements/Container';
import './WMGInHouse.css';
const WMGInHouse = () => {
  return (
    <Container children={
        <div className="Container">
        <div class="VMG_Services">VMG Inhouse Services</div>
            <div class="Pair_two_Services">
                <div class="First_Contianer_Service Know-More-One">
                    <div class="Wedsta_container">
                        <img class="Wedsta_img" alt=''
                            src="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg"/>
                    </div>
                    <div class="Wedsta_txt">Wedsta</div>
                    <div class="Wedsta_Second_txt">WMG At Home, Family Makeup Services</div>
                    <div class="Button-Know-More">
                        <div class="Know_more">Know More</div>
                    </div>
                </div>
                <div class="First_Contianer_Service Know-More-Two" style={{marginLeft:"auto"}}>
                    <div class="Wedsta_container">
                        <img class="Wedsta_img" alt=''
                            src="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg"/>
                    </div>
                    <div class="Wedsta_txt">Wedsta</div>
                    <div class="Wedsta_Second_txt">WMG At Home, Family Makeup Services</div>
                    <div class="Button-Know-More">
                        <div class="Know_more">Know More</div>
                    </div>
                </div>
            </div>
            <div class="First_Contianer_Service Know-More-One" style={{marginTop:"20px"}}>
                    <div class="Wedsta_container">
                        <img class="Wedsta_img" alt=''
                            src="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg"/>
                    </div>
                    <div class="Wedsta_txt">Wedsta</div>
                    <div class="Wedsta_Second_txt">WMG At Home, Family Makeup Services</div>
                    <div class="Button-Know-More">
                        <div class="Know_more">Know More</div>
                    </div>
                </div>
        </div>
    }/>
  )
}

export default WMGInHouse;
