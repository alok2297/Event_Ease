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
                        <p>alokkumar.av22@gmail.com</p>
                        <p>010101010101</p>
                    </div>
                    <div>
                        <p style={{fontWeight:600}}>For Wendors</p>
                        <p>alokkumar.av22@gmail.com</p>
                        <p>010101010101</p>
                    </div>
                </div>
                <p style={{fontWeight:600}}>Get Latest Blog Alerts</p>
                <div style={{display:'flex'}}>
                   <input type='text' placeholder='Enter Your mail'/>
                   <button className='submit-btn'>Submit</button>
                </div>
                   <div>
                       <button className='btn1'>Submit Wedding</button>
                   </div>
                   <button className='btn2'>Register as a Wendor</button>
               </div>
               <div className='div3'>
                <p style={{fontWeight:600}}>Follow us on</p>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="mdi:facebook"/>
                    <p>facebook</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="mdi:facebook"/>
                    <p>facebook</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="mdi:facebook"/>
                    <p>facebook</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="mdi:facebook"/>
                    <p>facebook</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="mdi:facebook"/>
                    <p>facebook</p>
                </div>
                <div style={{display:'flex'}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="mdi:facebook"/>
                    <p>facebook</p>
                </div>
               </div>
               <div className='div4'>
                <p style={{fontWeight:600}}>Get the EventEase App</p>
                <div style={{display:'flex', backgroundColor:"white"}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="arcticons:apple"/>
                    <p>facebook</p>
                </div>
                <div style={{display:'flex', backgroundColor:"white"}}>
                    <Iconify width={20} height={20} color={"#4a4a4a"} icon="arcticons:apple"/>
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
