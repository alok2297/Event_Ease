import React from 'react'
import {Container} from '../../Elements/Container';
import './WMGInHouse.css';
const WMGInHouse = () => {
  return (
    <Container children={
        <div className="Container">
        <div className="VMG_Services">VMG Inhouse Services</div>
            <div className="Pair_two_Services">
                <div className="First_Contianer_Service Know-More-One">
                    <div className="Wedsta_container">
                        <img className="Wedsta_img" alt=''
                            src="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg"/>
                    </div>
                    <div className="Wedsta_txt">Wedsta</div>
                    <div className="Wedsta_Second_txt">WMG At Home, Family Makeup Services</div>
                    <div className="Button-Know-More">
                        <div className="Know_more">Know More</div>
                    </div>
                </div>
                <div className="First_Contianer_Service Know-More-Two" style={{marginLeft:"auto"}}>
                    <div className="Wedsta_container">
                        <img className="Wedsta_img" alt=''
                            src="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg"/>
                    </div>
                    <div className="Wedsta_txt">Wedsta</div>
                    <div className="Wedsta_Second_txt">WMG At Home, Family Makeup Services</div>
                    <div className="Button-Know-More">
                        <div className="Know_more">Know More</div>
                    </div>
                </div>
            </div>
            <div className="First_Contianer_Service Know-More-One" style={{marginTop:"20px"}}>
                    <div className="Wedsta_container">
                        <img className="Wedsta_img" alt=''
                            src="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg"/>
                    </div>
                    <div className="Wedsta_txt">Wedsta</div>
                    <div className="Wedsta_Second_txt">WMG At Home, Family Makeup Services</div>
                    <div className="Button-Know-More">
                        <div className="Know_more">Know More</div>
                    </div>
                </div>
        </div>
    }/>
  )
}

export default WMGInHouse;
