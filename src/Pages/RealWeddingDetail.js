import React from 'react'
import RealWeddingDetailsHead from '../components/Blocks/RealWeddingDetailsHead/RealWeddingDetailsHead';
import NavForPic from "../components/Blocks/NavForPic/NavForPic";
import TagVendor from '../components/Blocks/TagVendor/TagVendor';
import RealWeddings from "../components/Blocks/RealWeddings/RealWeddings";
import WeddingStories from "../Data/WeddingStories.json"
import { useSelector } from 'react-redux';

const RealWeddingDetail = () => {
  const city = useSelector(state=>state.city);
  return (
    <div>
      <RealWeddingDetailsHead/>
      <NavForPic/>
      <TagVendor/>
      <h1 style={{margin:"20px 80px 0px 80px", fontFamily:"proxima-nova, sans-serif", fontSize:"24px", color:"#4a4a4a"}}>Similar {city} Weddings</h1>
      <div style={{display:"flex", marginTop:"-80px"}}>
        <RealWeddings photosInfo = {WeddingStories} numberSlice={3} type={1}/>
      </div>
      <h1 style={{margin:"20px 80px 0px 80px", fontFamily:"proxima-nova, sans-serif", fontSize:"24px",color:"#4a4a4a"}}>Similar Weddings</h1>
      <div style={{display:"flex", marginTop:"-80px"}}>
        <RealWeddings photosInfo = {WeddingStories} numberSlice={3} type={1}/>
      </div>
    </div>
  )
}

export default RealWeddingDetail
