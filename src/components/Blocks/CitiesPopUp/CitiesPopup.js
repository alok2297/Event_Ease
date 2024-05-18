import React, {useState}from "react";
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import{ actionCreaters} from "../../../state/index";

const CitiesPopup = (props) => {
  const Cities = [
    { category: "TC", city: "All Cities" },
    { category: "TC", city: "Delhi NCR" },
    { category: "TC", city: "Mumbai" },
    { category: "TC", city: "Bangalore" },
    { category: "TC", city: "Hyderabad" },
    { category: "TC", city: "Chennai" },
    { category: "TC", city: "Pune" },
    { category: "TC", city: "Kolkata" },
    { category: "TC", city: "Lucknow" },
    { category: "TC", city: "Jaipur" },
    { category: "PC", city: "Gurugram" },
    { category: "PC", city: "Goa" },
    { category: "PC", city: "Udaipur" },
    { category: "PC", city: "Chandigarh" },
    { category: "PC", city: "Ahmedabad" },
    { category: "PC", city: "Chennai" },
    { category: "PC", city: "Indore" },
    { category: "PC", city: "Agra" },
    { category: "PC", city: "Kanpur" },
    { category: "PC", city: "Kochi" },
    { category: "OC", city: "Nagpur" },
    { category: "OC", city: "Dehradun" },
    { category: "OC", city: "Thane" },
    { category: "OC", city: "Surat" },
    { category: "OC", city: "Vadodara" },
    { category: "OC", city: "Visakhapatnam" },
    { category: "OC", city: "Raipur" },
    { category: "OC", city: "Coimbatore" },
    { category: "OC", city: "Jalandhar" },
    { category: "OC", city: "Ranchi" },
    { category: "IC", city: "Chicago" },
    { category: "IC", city: "New York" },
    { category: "IC", city: "New Jersey" },
    { category: "IC", city: "Houston" },
    { category: "IC", city: "Washington" },
    { category: "IC", city: "Arizona" },
    { category: "IC", city: "Dubai" },
    { category: "IC", city: "Thailand" },
    { category: "IC", city: "USA" },
    { category: "IC", city: "Canada" },
  ];
  let [filteredCities,setCities] = useState(Cities)
  const handleCityClick = (city) => {
    props.parentCallback(city);
}
  const getInput = (input) => {
    const searchInput = input.toLowerCase()
    filteredCities = Cities.filter((item)=>{
      return item.city.toLowerCase().includes(searchInput)
    })
    setCities(filteredCities)
}
const dispatch = useDispatch();
const {clickedCity} = bindActionCreators(actionCreaters,dispatch);

  return (
    <div className="popup-container">
      <div className="UpperDiv-CityPop">
        <div className="Search-Div" style={{ marginLeft: "20px" }}>
          <div className="search-input-container">
            <svg
              className="MuiSvgIcon-root icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input className="search-city" type="search" placeholder="Search your city..." onChange={e=> getInput(e.target.value)}/>
          </div>
        </div>
        <div className="container">
          <div className="child1">
            <div className="Top-Cities">
              <span className="HeadDing-City" href="$">
                Top Cities
              </span>
              <div className="CityName" onClick={()=>handleCityClick("DUM")}>
                {filteredCities.filter((city)=> city.category === "TC").map((item, id) => (
                  <li
                    className="CityName"
                    key={id}
                    onClick={() => {clickedCity(item.city)}}
                    name={item.name}
                    href="$"
                  >
                    {item.city}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div className="child2">
            <div className="Popular-Cities">
              <span className="HeadDing-City" href="$">
                Popular Cities
              </span>
              <div className="CityName" onClick={()=>handleCityClick("DUM")}>
                {filteredCities.filter((city)=> city.category === "PC").map((item, id) => (
                  <li
                    className="CityName"
                    key={id}
                    onClick={() => {clickedCity(item.city)}}
                    name={item.name}
                    href="$"
                  >
                    {item.city}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div className="child3">
            <div className="Other-Cities">
              <span className="HeadDing-City" href="$">
                Other Cities
              </span>
              <div className="CityName" onClick={()=>handleCityClick("DUM")}>
                {filteredCities.filter((city)=> city.category === "OC").map((item, id) => (
                  <li
                    className="CityName"
                    key={id}
                    onClick={() => {clickedCity(item.city)}}
                    name={item.name}
                    href="$"
                  >
                    {item.city}
                  </li>
                ))}
              </div>
              
            </div>
          </div>
          <div className="child4">
            <div className="International-Cities">
              <span className="HeadDing-City" href="$">
                International Cities
              </span>
              <div className="CityName" onClick={()=>handleCityClick("DUM")}>
                {filteredCities.filter((city)=> city.category === "IC").map((item, id) => (
                  <li
                    className="CityName"
                    key={id}
                    onClick={() => {clickedCity(item.city)}}
                    name={item.name}
                    href="$"
                  >
                    {item.city}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesPopup;
