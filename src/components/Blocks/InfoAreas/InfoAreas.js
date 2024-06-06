import React from "react";
import './InfoAreas.css';
const InfoAreas = ({ data, areas }) => {
  return (
    <div>
      {
        data.rooms &&
        <div className="Areas-info">
          <div>
            <h3>Areas Available ({areas?.length})</h3>
          </div>
          <div className="seating">
            {
              areas.map((item, id) => (
                <div key={id} className="demo" style={{ marginBottom: "10px" }}>
                  <div className="seating-txt">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {
                        item.type === "indoor" ?
                          <img
                            src="https://images.wedmegood.com/images/outdoor.svg"
                            alt="$"
                          />
                          :
                          <img
                            src="https://images.wedmegood.com/images/indoor.svg"
                            alt="$"
                          />
                      }
                    </div>
                    <div>
                      <p>{item.type}</p>
                    </div>
                  </div>
                  <div>
                    <div className="demo-text">
                      <div>
                        <p>{item.seating} Seating |&nbsp; </p>
                      </div>
                      <div>
                        <p>{item.floating} Floating </p>
                      </div>
                    </div>
                    <div className="demo-location">
                      <p>{item.location}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      }
    </div>
  );
};

export default InfoAreas;
