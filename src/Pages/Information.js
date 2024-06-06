import React, { useEffect, useState } from "react";
import { Container } from "../components/Elements/Container";
import InfoHeader from '../components/Blocks/InfoHeader/InfoHeader'
import InfoPageNav from "../components/Blocks/InfoPageNav/InfoPageNav";
import InfoAreas from "../components/Blocks/InfoAreas/InfoAreas";
import InfoPortfolio from "../components/Blocks/InfoPortfolio/InfoPortfolio";
import {CheckoutForm} from "../components/Blocks/CheckoutForm/CheckoutForm";
import PriceInfo from "../components/Blocks/PriceInfo/PriceInfo";
import { useParams } from 'react-router-dom';
import { getVenue } from "Api/services";

const Information = () => {
  const {id} =  useParams()
  const [data, setData] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVenue(id);
        setData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [])
  
  const hotels = [
    {
      name: "Hyatt Residency House",
      city: "Gomti Nagar, Lucknow",
      address: "Hyatt Regency Lucknow, Regency Road, behind Chandra Eye Hospital, Vibhuti Khand",
      rating: 4.5,
      contact: 9876543210
    }
  ] 
  const areasAvailable = [
    {
      type: "indoor",
      floating: 350,
      seating: 200,
      location: "hall"
    },
    {
      type: "outdoor",
      floating: 350,
      seating: 200,
      location: "hall"
    },
    {
      type: "indoor",
      floating: 350,
      seating: 200,
      location: "hall"
    },
  ]
  return (
    <Container
      children={
        <div className="Container">
          <div className="Main-info-div">
            <div className="left-section">
              <InfoHeader hotelInfo={data}/>
              {/* <InfoPageNav/> */}
              <InfoAreas data={data} areas={areasAvailable}/>
              <InfoPortfolio/>
            </div>
            <div className="right-section">
              <PriceInfo data={data}/>
              <CheckoutForm data={data}/>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Information;
