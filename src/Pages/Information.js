import { Container } from "../components/Elements/Container";
// import TablePagination from "@mui/material/TablePagination";
import InfoHeader from '../components/Blocks/InfoHeader/InfoHeader'
import InfoPageNav from "../components/Blocks/InfoPageNav/InfoPageNav";
import InfoAreas from "../components/Blocks/InfoAreas/InfoAreas";
import InfoPortfolio from "../components/Blocks/InfoPortfolio/InfoPortfolio";

const Information = () => {
  // const [rowsPerPage, setRowsPerPage] = React.useState(12);

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
          </div>
        </div>
      }
    />
  );
};

export default Information;
