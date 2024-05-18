import React, { useRef } from "react";
import WedddingStories from "../Data/WeddingStories.json";
import RealWeddingHeader from "../components/Blocks/RealWeddingHeader/RealWeddingHeader";
const RealWedidingStroies = () => {
  
    const pageNumber = useRef();
    pageNumber.current = WedddingStories.length/12;
  return (
    <div>
      <RealWeddingHeader/>
    </div>
  );
};

export default RealWedidingStroies;
