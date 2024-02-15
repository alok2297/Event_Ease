import React, { useRef, useState } from "react";
import RealWeddings from "../components/Blocks/RealWeddings/RealWeddings";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import WedddingStories from "../Data/WeddingStories.json";
import RealWeddingHeader from "../components/Blocks/RealWeddingHeader/RealWeddingHeader";
const RealWedidingStroies = () => {
    const [page, setPage] = useState(1);
  
    const handleChangePage = (event, value) => {
      setPage(value);
    };
  
    const pageNumber = useRef();
    pageNumber.current = WedddingStories.length/12;
  return (
    <div>
      <RealWeddingHeader/>
      <RealWeddings 
        photosInfo={WedddingStories}
        pageNumber={page}
      />
      <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(pageNumber.current)}
          page={page}
          onChange={handleChangePage}
        />
      </Stack>
      </div>
    </div>
  );
};

export default RealWedidingStroies;
