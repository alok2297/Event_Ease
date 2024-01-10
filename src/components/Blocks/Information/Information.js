import React, { useState } from "react";
import "./Information.css";
import { Container } from "../../Elements/Container";
// import TablePagination from "@mui/material/TablePagination";
import { Iconify } from "../../Elements/Icon";
import InfoPhotos from "../InfoPhotos/InfoPhotos";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Information = () => {
  // const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const [page, setPage] = React.useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const [pageNum,setPageNum] = useState("");


  const handleClick=(e,value)=>{
    e.preventDefault();
    const pageNumber = value.page;
    setPageNum(pageNumber);
    console.log(pageNumber);
  }

  return (
    <Container
      children={
        <div className="Container">
          <div className="left-section">
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
                      <p style={{ marginLeft: "3px", color: "#4a4a4a" }}>
                        Photos
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-outline:like"
                      />
                      <p style={{ marginLeft: "3px", color: "#4a4a4a" }}>
                        Shortlist
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="ic:round-share"
                      />
                      <p style={{ marginLeft: "3px", color: "#4a4a4a" }}>
                        Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navs">
              <div className="nav-items">
                <a href="$">Banquets</a>
                <a href="$">Projects</a>
                <a href="$">About</a>
                <a href="$">Reviews</a>
              </div>
            </div>
            <div className="Areas-info">
              <div>
                <h3>Areas Available (4)</h3>
              </div>
              <div className="seating">
                <div className="demo" style={{ marginBottom: "10px" }}>
                  <div className="seating-txt">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://images.wedmegood.com/images/outdoor.svg"
                        alt="$"
                      />
                    </div>
                    <div>
                      <p>Outdore</p>
                    </div>
                  </div>
                  <div>
                    <div className="demo-text">
                      <div>
                        <p>450 Seating |&nbsp; </p>
                      </div>
                      <div>
                        <p>450 Floating </p>
                      </div>
                    </div>
                    <div>
                      <span>Lawns</span>
                    </div>
                  </div>
                </div>
                <div className="demo" style={{ marginBottom: "10px" }}>
                  <div className="seating-txt">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://images.wedmegood.com/images/indoor.svg"
                        alt="$"
                      />
                    </div>
                    <div>
                      <p>Indoor</p>
                    </div>
                  </div>
                  <div>
                    <div className="demo-text">
                      <div>
                        <p>450 Seating |&nbsp; </p>
                      </div>
                      <div>
                        <p>450 Floating </p>
                      </div>
                    </div>
                    <div>
                      <span>Lawns</span>
                    </div>
                  </div>
                </div>
                <div className="demo">
                  <div className="seating-txt">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://images.wedmegood.com/images/outdoor.svg"
                        alt="$"
                      />
                    </div>
                    <div>
                      <p>Outdore</p>
                    </div>
                  </div>
                  <div>
                    <div className="demo-text">
                      <div>
                        <p>450 Seating |&nbsp; </p>
                      </div>
                      <div>
                        <p>450 Floating </p>
                      </div>
                    </div>
                    <div>
                      <span>Lawns</span>
                    </div>
                  </div>
                </div>
                <div className="demo">
                  <div className="seating-txt">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://images.wedmegood.com/images/indoor.svg"
                        alt="$"
                      />
                    </div>
                    <div>
                      <p>Indoor</p>
                    </div>
                  </div>
                  <div>
                    <div className="demo-text">
                      <div>
                        <p>450 Seating |&nbsp; </p>
                      </div>
                      <div>
                        <p>450 Floating </p>
                      </div>
                    </div>
                    <div>
                      <span>Lawns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio">
              <div className="pic-video">
                <div>
                  <p>PORTFOLIO&nbsp;(40)</p>
                </div>
                <div>
                  <p>VIDEOS&nbsp;(40)</p>
                </div>
              </div>
              <div className="component">
                <InfoPhotos />
                <div className="pagination">
                  <Stack spacing={2}>
                    <Pagination count={100} page={page} onChange={handleChangePage} onClick={(e) => {handleClick(e, {page});
              }}/>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Information;
