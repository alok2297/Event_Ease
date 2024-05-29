import React, { useState } from "react";
import "./PriceInfo.css";
import { Iconify } from "../../Elements/Icon";
const PriceInfo = (props) => {
  const {vegP, nonVegP, roomP, decorP} = props;
  const [rotate, setRotate] = useState(0); // usefor rotation

  const handleClick = () => {
    setRotate(rotate === 0 ? 1 : 0);
  };
  return (
    <div>
      <div className="price-main-div">
        <div className="display">
          <div>Starting Price</div>
          <div onClick={handleClick} className="price-arrow">
            <span>Price Info</span>
            {/* click and scroll down */}
            <div
              style={{
                color: "black",
                alignItems: "center",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "10px",
                transform: `rotate(${rotate * 180}deg)`,
              }}
            >
              <Iconify
                width={20}
                height={20}
                color={"#e72e77"}
                icon="clarity:caret-line"
              />
            </div>
          </div>
        </div>

        {
          rotate===1?(<hr/>):null
        }
        {/* contditional rendor for room prices */}

        {rotate===1?(<div className="room-prices">
          <div>
            <div style={{fontWeight:"600"}}>Starting price of room</div>
            <div className="price-for-decor">
            <div>
              <Iconify
                width={16}
                height={16}
                color={"#e72e77"}
                icon="mdi:rupee"
              />
            </div>
            <span>{roomP} per room</span>
            </div>
          </div>
          <div>
          <div style={{fontWeight:"600"}}>Starting price of Decor</div>
            <div className="price-for-decor">
            <div>
              <Iconify
                width={16}
                height={16}
                color={"#e72e77"}
                icon="mdi:rupee"
              />
            </div>
            <span>{decorP}</span>
            </div>
          </div>
        </div>):null}

        <div className="Price-info">
          <div>
            <Iconify
              width={20}
              height={20}
              color={"#e72e77"}
              icon="mdi:rupee"
            />
            <span>{vegP}</span>
            <p>per plate (taxes extra)</p>
          </div>
          <p>Veg Price</p>
        </div>
        <div className="Price-info">
          <div>
            <Iconify
              width={20}
              height={20}
              color={"#e72e77"}
              icon="mdi:rupee"
            />
            <span>{nonVegP}</span>
            <p>per plate (taxes extra)</p>
          </div>
          <p>Non Veg Price</p>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
