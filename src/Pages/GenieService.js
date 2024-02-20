import React from "react";
import { Container } from "../components/Elements/Container";
import { Iconify } from "../components/Elements/Icon";
import FQ from "../components/Blocks/FQ/FQ";
import NewsLetter from "../components/Blocks/NewsLetter/NewsLetter"
import GenieFQ from "../Data/GenieFQ.json";
const GenieService = () => {
  return (
    <><Container
      children={
        <div className="Container">
          <div >
            <h3
              style={{
                fontFamily: "proxima-nova, sans-serif",
                fontSize: "20px",
                color: "#4a4a4a",
                marginTop: "-20px",
              }}
            >
              WMG Genie Service
            </h3>
            <img
              style={{ marginTop: "20px", borderRadius: "10px" }}
              src="https://testimage.wedmegood.com/resized-nw/1900X/uploads/14684dd92bf94ded96517201ebe69554/genie-infographic-Web-prod.png"
              alt="$"
            />

            <div>
              <p
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "20px",
                  color: "#4a4a4a",
                  marginTop: "20px",
                }}
              >
                Select Package
              </p>
              <span
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "16px",
                  color: "rgb(144, 144, 144)",
                  display: "inline-block",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                WMG Genie can helo out!
              </span>
              <div className="main-card-container">
                <div className="wedsta-main" style={{height:"360px"}}>
                  <div className="header-div-round">WMG Discovery Agent</div>
                  <div className="packages">
                    <div className="packages inner-package padding-10">
                      <div className="packages-services">
                        <div>
                          <span
                            style={{
                              fontFamily: "proxima-nova, sans-serif",
                              fontSize: "14px",
                              color: "rgb(144, 144, 144)",
                              display: "inline-block",
                              marginTop: "10px",
                              marginBottom: "20px",
                            }}
                          >
                            Quickly book any one Category
                          </span>
                        </div>
                        <div className="services">
                          <p>Services:</p>
                        </div>
                        <div className="category-icon">
                          <Iconify
                            width={25}
                            height={20}
                            color={"#4a4a4a"}
                            icon="material-symbols:check"
                          />
                          <p>Get Vendor Suggestions with date availability & quotes within your budget & location</p>
                        </div>
                        <div className="category-icon">
                          <Iconify
                            width={25}
                            height={20}
                            color={"#4a4a4a"}
                            icon="material-symbols:check"
                          />
                          <p>Get Vendor Suggestions with date availability & quotes within your budget & location</p>
                        </div>
                        <div className="category-icon">
                          <Iconify
                            width={13}
                            height={20}
                            color={"#4a4a4a"}
                            icon="material-symbols:check"
                          />
                          <p>Best Price Negotiation</p>
                        </div>
                        <div className="category-icon">
                          <Iconify
                            width={13}
                            height={20}
                            color={"#4a4a4a"}
                            icon="material-symbols:check"
                          />
                          <p>Valid for 45 days</p>
                        </div>
                        <div className="category-icon">
                          <Iconify
                            width={17}
                            height={20}
                            color={"#4a4a4a"}
                            icon="material-symbols:check"
                          />
                          <p>Follow on communication / Virtual support till booking stage</p>
                        </div>
                      </div>
                      <div className="package-cost">
                        <div className="icon-package-cost">
                          <div>
                            <h3>400/-</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                <hr/>
                  <div style={{display:"flex", marginLeft:"280px",marginTop:"10px"}}>
                    <a href="$" alt="" style={{color:"#e72e77", }}>Continue</a>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Iconify
                            width={20}
                            height={20}
                            color={"#e72e77"}
                            icon="ep:arrow-right-bold"
                          />
                    </div>
                  </div>
                </div>
                <div className="wedsta-main" style={{height:"400px"}}>
                <div className="header-div-round package2">
                  WMG Booking Assitance
                </div>
                <div className="packages">
                  <div className="packages inner-package padding-10">
                    <div className="packages-services">
                      <div>
                      <span
                            style={{
                              fontFamily: "proxima-nova, sans-serif",
                              fontSize: "14px",
                              color: "rgb(144, 144, 144)",
                              display: "inline-block",
                              marginTop: "10px",
                              marginBottom: "20px",
                            }}
                          >
                            Assitance upto 3 main Categories
                          </span>
                      </div>
                      <div className="services">
                        <p>Services:</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={25}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Get Vendor Suggestions with date availability & quotes within your budget & location</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={18}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Valid for 3 categories in one city OR 2 cities for one category</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={14}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>1 Video meeting for assistance</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={14}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Best price negotiation</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={14}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>20% off on Video invites</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={18}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Follow on communication / Virtual support till booking stage</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={14}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Valid for 60 days</p>
                      </div>
                    </div>
                    <div className="package-cost">
                      <div className="icon-package-cost">
                        <div>
                          <h3>600/-</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div style={{display:"flex", marginLeft:"280px",marginTop:"10px"}}>
                    <a href="$" alt="" style={{color:"#e72e77", }}>Continue</a>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Iconify
                            width={20}
                            height={20}
                            color={"#e72e77"}
                            icon="ep:arrow-right-bold"
                          />
                    </div>
                  </div>
                </div>
                <div className="wedsta-main">
                <div className="header-div-round package3">
                  WMG Planning Assistance
                </div>
                <div className="packages">
                  <div className="packages inner-package padding-10">
                    <div className="packages-services">
                      <div>
                      <span
                            style={{
                              fontFamily: "proxima-nova, sans-serif",
                              fontSize: "14px",
                              color: "rgb(144, 144, 144)",
                              display: "inline-block",
                              marginTop: "10px",
                              marginBottom: "20px",
                            }}
                          >
                           Complete planning solution for all categories (venues to safawala ) with standardised contracts.
                          </span>
                      </div>
                      <div className="services">
                        <p>Services:</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={22}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Get vendors with date availability & quotes within your budget & location</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={13}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Vetting of vendor contracts</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={15}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Upto 2 meetings (Video/ In person) for assistance</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={13}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Best Price Negotiation</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={14}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Free digital invite OR 50% off on Video invites</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={25}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p style={{marginLeft:"10px"}}>For Photographers, Jewellery, Bridal Makeup, Bridal Wear, Groom Wear, Decorators, Catering Services, Invitations, Cake, Venues, Cinema/Video, Mehendi Artist, Trousseau Packers, Sangeet Choreographer, Favors, Wedding Planners, Accessories, DJs, Family Makeup, Wedding Pandits , Bartenders, Wedding Entertainment , Pre Wedding Photographers, Pre Wedding Shoot Locations</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={13}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Recommended for Destination Weddings</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={13}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Recommended for Destination Weddings</p>
                      </div>
                      <div className="category-icon">
                        <Iconify
                          width={18}
                          height={20}
                          color={"#4a4a4a"}
                          icon="material-symbols:check"
                        />
                        <p>Follow on communication / Virtual support till booking stage</p>
                      </div>
                    </div>
                    <div className="package-cost">
                      <div className="icon-package-cost">
                        <div>
                          <h3>800/-</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div style={{display:"flex", marginLeft:"280px",marginTop:"10px"}}>
                    <a href="$" alt="" style={{color:"#e72e77", }}>Continue</a>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Iconify
                            width={20}
                            height={20}
                            color={"#e72e77"}
                            icon="ep:arrow-right-bold"
                          />
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <h3
              style={{
                fontFamily: "proxima-nova, sans-serif",
                fontSize: "20px",
                color: "#4a4a4a",
                marginTop: "20px",
              }}
            >
              Frequently Asked Questions
            </h3>
   
            <FQ data = {GenieFQ}/>
        </div>
      }
    /><NewsLetter/></>
  );
};

export default GenieService;
