import React from "react";
import { Iconify } from "../../Elements/Icon";
import "./InfoHeader.css";
const InfoHeader = () => {
  return (
    <div>
      <div className="profile-img">
        <img
          src="https://image.wedmegood.com/resized/1000X/uploads/member/911781/1700895862_IMG_20230819_WA0043.jpg?crop=0,154,1600,900"
          alt=""
        />
      </div>
      <div className="full-info">
        <div className="full-info-subdiv">
          <div style={{ display: "flex" }}>
            <div className="vendorName-info">
              <div>
                <p className="shop-name">Hyatt Residency House</p>
              </div>
              <div className="location-info" style={{ display: "flex" }}>
                <Iconify
                  width={15}
                  height={15}
                  color={"#4a4a4a"}
                  icon="mdi:location"
                />
                <p>Gomti Nagar, Lucknow</p>
                <span>(View on Map)</span>
              </div>
              <div className="address" style={{ paddingLeft: "15px" }}>
                <span>
                  Hyatt Regency Lucknow, Regency Road, behind Chandra Eye
                  Hospital, Vibhuti K...
                </span>
              </div>
            </div>
            <div className="rating-info">4.5</div>
          </div>

          <div className="location-info" style={{ display: "flex" }}>
            <Iconify
              width={15}
              height={15}
              color={"#5ba829"}
              icon="mdi:location"
            />
            <p style={{ marginLeft: "3px", color: "#5ba829" }}>Contact</p>
          </div>

          <div className="pic-like-share">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
