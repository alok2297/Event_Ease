import React from 'react'
import {Container} from '../../Elements/Container';
import './WMGInHouse.css';
import { useNavigate } from "react-router-dom";

const WMGInHouse = () => {

    const navigate = useNavigate();

    const handleClick = (path)=>{
      navigate(`/${path}`)
    }
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
                    <div className="Button-Know-More" onClick={() => {handleClick("wedsta")}}>
                        <div className="Know_more">Know More</div>
                    </div>
                </div>
                <div className="First_Contianer_Service Know-More-Two" style={{marginLeft:"auto"}}>
                    <div className="Wedsta_container">
                        <img className="Wedsta_img" alt=''
                            src="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/genie_dweb.jpg"/>
                    </div>
                    <div className="Wedsta_txt">Genie Services</div>
                    <div className="Wedsta_Second_txt">Plan your Dream Wedding in your Budget</div>
                    <div className="Button-Know-More" onClick={() => {handleClick("genie")}}>
                        <div className="Know_more">Know More</div>
                    </div>
                </div>
            </div>
            <div className="First_Contianer_Service Know-More-One" style={{marginTop:"20px"}}>
                    <div className="Wedsta_container">
                        <img className="Wedsta_img" alt=''
                            src="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/venue_dweb.jpg"/>
                    </div>
                    <div className="Wedsta_txt">Venue Booking</div>
                    <div className="Wedsta_Second_txt">Best Service Guaranteed</div>
                    <div className="Button-Know-More" onClick={() => {handleClick("genie")}}>
                        <div className="Know_more">Know More</div>
                    </div>
                </div>
        </div>
    }/>
  )
}

export default WMGInHouse;
