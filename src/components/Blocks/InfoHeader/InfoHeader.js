import React from "react";
import { Iconify } from "../../Elements/Icon";
import "./InfoHeader.css";
const InfoHeader = (props) => {
  const {name, address, city, cover} = props?.hotelInfo;
  const rating = 4.5
  const contact = 9876543210
  return (
    <div>
      <div className="profile-img">
        <img
          src={cover}
          alt=""
        />
      </div>
      <div className="full-info">
        <div className="full-info-subdiv">
          <div style={{ display: "flex" }}>
            <div className="vendorName-info">
              <div>
                <p className="shop-name">{name}</p>
              </div>
              <div className="location-info" style={{ display: "flex" }}>
                <Iconify
                  width={15}
                  height={15}
                  color={"#4a4a4a"}
                  icon="mdi:location"
                />
                <p>{city}</p>
                {/* <span>(View on Map)</span> */}
              </div>
              <div className="address" style={{ paddingLeft: "15px" }}>
                <p>{address}</p>
              </div>
            </div>
            <div className="rating-info">{rating}</div>
          </div>

          <div className="location-info" style={{ display: "flex" }}>
            <Iconify
              width={15}
              height={15}
              color={"#5ba829"}
              icon="mdi:contact"
            />
            <div>
              <p style={{ marginLeft: "3px", color: "#5ba829" }}>Contact</p>
              <p>{contact}</p>
            </div>
          </div>

          {/* <div className="pic-like-share">
            <div className="pic-like">
              <div style={{ display: "flex" }}>
                <Iconify
                  width={20}
                  height={20}
                  color={"#4a4a4a"}
                  icon="material-symbols-light:image"
                />
                <p style={{ marginLeft: "3px", color: "#4a4a4a" }}>Photos</p>
              </div>
              <div style={{ display: "flex" }}>
                <Iconify
                  width={20}
                  height={20}
                  color={"#4a4a4a"}
                  icon="icon-park-outline:like"
                />
                <p style={{ marginLeft: "3px", color: "#4a4a4a" }}>Shortlist</p>
              </div>
              <div style={{ display: "flex" }}>
                <Iconify
                  width={20}
                  height={20}
                  color={"#4a4a4a"}
                  icon="ic:round-share"
                />
                <p style={{ marginLeft: "3px", color: "#4a4a4a" }}>Share</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
