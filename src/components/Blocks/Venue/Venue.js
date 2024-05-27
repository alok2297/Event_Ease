import React from "react";
import "./Venue.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Iconify } from "../../Elements/Icon";
import { Container } from "../../Elements/Container";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const Venue = () => {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/wedding-venues")
  }
  return (
    <Container
      children={
        <div className="Container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <div><p>2500</p></div>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} onClick={handleClick}>
                <Item>
                  <div className="img-container">
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/member/4073472/1676911076_IMG_20230201_WA0008.jpg?crop=8,5,1238,697"
                      alt="#"
                    />
                  </div>
                  <div className="vendor-name">
                    <h3>Hyatt Regency Lucknow</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols-light:star"
                      />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="vendor-location">
                    <div>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="gridicons:location"
                      />
                      <p>Gomti Nagar,Luck...</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="icon-park-solid:palace"
                      />
                      <p>4 Start Above Hotels, Banq..</p>
                    </div>
                  </div>
                  <div className="price">
                  <div className="price-veg">
                    <div style={{display:"flex", textAlign:"start"}}><span>Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  <div className="price-non">
                    <div style={{display:"flex", textAlign:"start"}}><span>Non-Veg</span></div>
                    <div style={{ marginLeft: "auto", display:"flex"}}>
                      <Iconify
                        width={20}
                        height={20}
                        color={"#4a4a4a"}
                        icon="mdi:rupee"
                      />
                      <p>2500</p>
                      <div><span>per plate</span></div>
                    </div>
                  </div>
                  </div>
                  <div className="Additional-info">
                        <div><p>90-400 pax</p></div>
                        <div><p>205 Rooms</p></div>
                        <p style={{textDecoration:"underline"}}>+8 more</p>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      }
    />
  );
};

export default Venue;
