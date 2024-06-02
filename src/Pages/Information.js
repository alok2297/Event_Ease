import { Container } from "../components/Elements/Container";
import InfoHeader from '../components/Blocks/InfoHeader/InfoHeader'
import InfoPageNav from "../components/Blocks/InfoPageNav/InfoPageNav";
import InfoAreas from "../components/Blocks/InfoAreas/InfoAreas";
import InfoPortfolio from "../components/Blocks/InfoPortfolio/InfoPortfolio";
import {CheckoutForm} from "../components/Blocks/CheckoutForm/CheckoutForm";
import PriceInfo from "../components/Blocks/PriceInfo/PriceInfo";
import { useParams } from 'react-router-dom';
import { getNumbersFromString } from "Utility";

const Information = () => {
  const {id} =  useParams()
  
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
              <InfoHeader hotelInfo={hotels[0]}/>
              {/* <InfoPageNav/> */}
              <InfoAreas areas={areasAvailable}/>
              <InfoPortfolio/>
            </div>
            <div className="right-section">
              <PriceInfo vegP={2000} nonVegP={2500} roomP={8000} decorP={25000}/>
              <CheckoutForm name={hotels[0].name}/>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Information;
