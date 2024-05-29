import { Container } from "../components/Elements/Container";
import InfoHeader from '../components/Blocks/InfoHeader/InfoHeader'
import InfoPageNav from "../components/Blocks/InfoPageNav/InfoPageNav";
import InfoAreas from "../components/Blocks/InfoAreas/InfoAreas";
import InfoPortfolio from "../components/Blocks/InfoPortfolio/InfoPortfolio";
import {CheckoutForm} from "../components/Blocks/CheckoutForm/CheckoutForm";
import PriceInfo from "../components/Blocks/PriceInfo/PriceInfo";
import { useParams } from 'react-router-dom';

const Information = () => {
  const {id} =  useParams() 
  return (
    <Container
      children={
        <div className="Container">
          <div className="Main-info-div">
            <div className="left-section">
              <InfoHeader/>
              <InfoPageNav/>
              <InfoAreas/>
              <InfoPortfolio/>
            </div>
            <div className="right-section">
              <PriceInfo/>
              <CheckoutForm/>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Information;
