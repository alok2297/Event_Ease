import React from "react";
import { Container } from "../../Elements/Container";
import { Iconify } from "../../Elements/Icon";
import "./TagVendor.css"
const TagVendor = () => {
  return (
    <Container
      children={
        <div className="Container">
          <h3
            style={{
              fontFamily: "sans-serif",
              color: "#4a4a4a",
            }}
          >
            Tag Vendors
          </h3>
          <div className="tag-vendor-main">
            <div className="icon-with-vendor">
              <div className="padding-vendor">
              <div className="camera-icon">
                <Iconify
                  width={25}
                  height={25}
                  color={"#B01E28"}
                  icon="solar:camera-outline"
                />
                <p>Heart and Craft</p>
              </div>
              <p className="role">Photographer</p>
              </div>
            </div>
            <div className="icon-with-vendor">
              <div className="padding-vendor">
              <div className="camera-icon">
                <Iconify
                  width={25}
                  height={25}
                  color={"#B01E28"}
                  icon="solar:camera-outline"
                />
                <p>Heart and Craft</p>
              </div>
              <p className="role">Photographer</p>
              </div>
            </div>
            <div className="icon-with-vendor">
              <div className="padding-vendor">
              <div className="camera-icon">
                <Iconify
                  width={25}
                  height={25}
                  color={"#B01E28"}
                  icon="solar:camera-outline"
                />
                <p>Heart and Craft</p>
              </div>
              <p className="role">Photographer</p>
              </div>
            </div>
            <div className="icon-with-vendor">
              <div className="padding-vendor">
              <div className="camera-icon">
                <Iconify
                  width={25}
                  height={25}
                  color={"#B01E28"}
                  icon="solar:camera-outline"
                />
                <p>Heart and Craft</p>
              </div>
              <p className="role">Photographer</p>
              </div>
            </div>
            <div className="icon-with-vendor">
              <div className="padding-vendor">
              <div className="camera-icon">
                <Iconify
                  width={25}
                  height={25}
                  color={"#B01E28"}
                  icon="solar:camera-outline"
                />
                <p>Heart and Craft</p>
              </div>
              <p className="role">Photographer</p>
              </div>
            </div>
            <div className="icon-with-vendor">
              <div className="padding-vendor">
              <div className="camera-icon">
                <Iconify
                  width={25}
                  height={25}
                  color={"#B01E28"}
                  icon="solar:camera-outline"
                />
                <p>Heart and Craft</p>
              </div>
              <p className="role">Photographer</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default TagVendor;
