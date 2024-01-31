import React from "react";
import "./PriceInfo.css";
import { Iconify } from "../../Elements/Icon";
const PriceInfo = () => {
  return (
    <div>
      <div className="price-main-div">
        <div className="display">
          <p>Starting Price</p>
          <span>Price Info</span>
          <div>
            <Iconify
              width={20}
              height={20}
              color={"#e72e77"}
              icon="clarity:caret-line"
            />
          </div>
        </div>
        <hr />
        <div className="Price-info">
          <div>
            <Iconify
              width={20}
              height={20}
              color={"#e72e77"}
              icon="mdi:rupee"
            />
          </div>
          <span>1299</span>
          <p>per plate</p>
        </div>
        <hr />
        <div className="Price-info">
          <div>
            <Iconify
              width={20}
              height={20}
              color={"#e72e77"}
              icon="mdi:rupee"
            />
          </div>
          <span>1299</span>
          <p>per plate</p>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
