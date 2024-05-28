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
      <div style={{display:"flex", marginTop:"-80px"}}>
        <RealWeddings photosInfo = {WeddingStories} numberSlice={3} type={1} title={`Similar ${city} Weddings`}/>
      </div>
      <div style={{display:"flex", marginTop:"-80px"}}>
        <RealWeddings photosInfo = {WeddingStories} numberSlice={3} type={1} title={`Similar Weddings`}/>
      </div>
    </div>
  )
}

export default RealWeddingDetail
