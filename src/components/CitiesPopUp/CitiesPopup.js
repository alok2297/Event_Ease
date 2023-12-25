import React, { useState } from "react";

const CitiesPopup = (props) => {
  const handleCityClick = (city) => {
    props.parentCallback(city);
}

  const TopCities = [
    { id: 0, category: "Top Cities", city: "All Cities" },
    { id: 1, category: "Top Cities", city: "Delhi NCR" },
    { id: 2, category: "Top Cities", city: "Mumbai" },
    { id: 3, category: "Top Cities", city: "Bangalore" },
    { id: 4, category: "Top Cities", city: "Hyderabad" },
    { id: 5, category: "Top Cities", city: "Chennai" },
    { id: 6, category: "Top Cities", city: "Pune" },
    { id: 7, category: "Top Cities", city: "Kolkata" },
    { id: 8, category: "Top Cities", city: "Lucknow" },
    { id: 9, category: "Top Cities", city: "Jaipur" },
  ];
  const PopularCities = [
    { id: 10, category: "Popular Cities", city: "Gurugram" },
    { id: 11, category: "Popular Cities", city: "Goa" },
    { id: 12, category: "Popular Cities", city: "Udaipur" },
    { id: 13, category: "Popular Cities", city: "Chandigarh" },
    { id: 14, category: "Popular Cities", city: "Ahmedabad" },
    { id: 15, category: "Popular Cities", city: "Chennai" },
    { id: 16, category: "Popular Cities", city: "Indore" },
    { id: 17, category: "Popular Cities", city: "Agra" },
    { id: 18, category: "Popular Cities", city: "Kanpur" },
    { id: 19, category: "Popular Cities", city: "Kochi" },
  ];

  const OtherCity = [
    { id: 20, category: "Other Cities", city: "Nagpur" },
    { id: 21, category: "Other Cities", city: "Dehradun" },
    { id: 22, category: "Other Cities", city: "Thane" },
    { id: 23, category: "Other Cities", city: "Surat" },
    { id: 24, category: "Other Cities", city: "Vadodara" },
    { id: 25, category: "Other Cities", city: "Visakhapatnam" },
    { id: 26, category: "Other Cities", city: "Raipur" },
    { id: 27, category: "Other Cities", city: "Coimbatore" },
    { id: 28, category: "Other Cities", city: "Jalandhar" },
    { id: 29, category: "Other Cities", city: "Ranchi" },
  ];

  const InternationalCity = [
    { id: 30, category: "International Cities", city: "Chicago" },
    { id: 31, category: "International Cities", city: "New York" },
    { id: 32, category: "International Cities", city: "New Jersey" },
    { id: 33, category: "International Cities", city: "Houston" },
    { id: 34, category: "International Cities", city: "Washington" },
    { id: 35, category: "International Cities", city: "Arizona" },
    { id: 36, category: "International Cities", city: "Dubai" },
    { id: 37, category: "International Cities", city: "Thailand" },
    { id: 38, category: "International Cities", city: "USA" },
    { id: 39, category: "International Cities", city: "Canada" },
  ];

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
            <input type="text" placeholder="Search your city..." />
          </div>
        </div>
        <div className="container">
          <div class="child1">
            <div className="Top-Cities">
              <a className="HeadDing-City" href="#">
                Top Cities
              </a>
              <div className="CityName">
                {TopCities.map((item) => (
                  <li
                    className="CityName"
                    key={item.id}
                    onClick={() => handleCityClick(item.city)}
                    name={item.name}
                    href="$"
                  >
                    {item.city}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div class="child2">
            <div className="Popular-Cities">
              <a className="HeadDing-City" href="#">
                Popular Cities
              </a>
              <div className="CityName">
                {PopularCities.map((item) => (
                  <li
                    className="CityName"
                    key={item.id}
                    onClick={() => handleCityClick(item.city)}
                    name={item.name}
                    href="$"
                  >
                    {item.city}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div class="child3">
            <div className="Other-Cities">
              <a className="HeadDing-City" href="#">
                Other Cities
              </a>
              <div className="CityName">
                {OtherCity.map((item) => (
                  <li
                    className="CityName"
                    key={item.id}
                    onClick={() => handleCityClick(item.city)}
                    name={item.name}
                    href="$"
                  >
                    {item.city}
                  </li>
                ))}
              </div>
              
            </div>
          </div>
          <div class="child4">
            <div className="International-Cities">
              <a className="HeadDing-City" href="#">
                International Cities
              </a>
              <div className="CityName">
                {InternationalCity.map((item) => (
                  <li
                    className="CityName"
                    key={item.id}
                    onClick={() => handleCityClick(item.city)}
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
