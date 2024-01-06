import React from 'react';
import { Container } from '../Elements/Container';
import './Footer.css';
import {Iconify} from '../Elements/Icon'
const Footer = () => {
  return (
    <Container children = {
        <div className='Container'>
            <div className='main-div'>
               <div className='div1'>
                  <p style={{fontWeight:600}}>EventEase - Your Personal Wedding Planner</p>
                  <div>Plan Your Wedding with us.</div>
               </div>
               <div className='div2'>
                <p style={{fontWeight:600}}>Contact us to get Best Details.</p>
                <div style={{display:'flex', gap:"40px"}}>
                    <div>
                        <p style={{fontWeight:600}}>For Wendors</p>
                        <p>vendors@eventease.com</p>
                        <p>0124-6812346</p>
                    </div>
                    <div>
                        <p style={{fontWeight:600}}>For Wendors</p>
                        <p>info@eventease.com</p>
                        <p>0124-6812346</p>
                    </div>
                </div>
                <p style={{fontWeight:600}}>Get Latest Blog Alerts</p>
                <div style={{display:'flex'}} >
                   <input type='text' placeholder='Enter Your mail'/>
                   <button className='submit-btn'>Submit</button>
                </div>
                   <div>
                       <button className='btn1'>Submit Wedding</button>
                   </div>
                   <button className='btn2'>Register as a Wendor</button>
               </div>
               <div className='div3'>
                <span style={{fontWeight:600}}>Follow us on</span>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="logos:facebook" className="media-icons"/>
                    <p>facebook</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="logos:twitter"/>
                    <p>Twitter</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="logos:pinterest"/>
                    <p>Pinterest</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="skill-icons:instagram"/>
                    <p>Instagram</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="fa:snapchat"/>
                    <p>Snapchat</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="icomoon-free:youtube"/>
                    <p>Youtube</p>
                </div>
               </div>
               <div className='div4'>
                <span style={{fontWeight:600}}>Get the EventEase App</span>
                <div style={{display:'flex', backgroundColor:"white"}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="logos:apple"/>
                    <p>facebook</p>
                </div>
                <div style={{display:'flex', backgroundColor:"white"}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="teenyicons:android-solid"/>
                    <p>facebook</p>
                </div>
               </div>
            </div>
            <div className='footer' style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"}}>
                <div className='footer1'>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                </div>
                <div className='footer2'>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                </div>
                <div className='footer2'>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                </div>
                <div className='footer2'>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                </div>
                <div className='footer2'>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                   <p>Start Planning</p>
                </div>
            </div>
        </div>
    }/>
  );
};

export default Footer;
