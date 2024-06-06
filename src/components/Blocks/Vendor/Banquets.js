import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid } from '@mui/material';
import cities from "../../../Data/Cities.json"
import { setBanquet, getBanquet, getAdmin } from 'Api/services';

export const Banquets = () => {
  const [adminData, setAdminData] = useState()
  const [formData, setFormData] = useState({
    name: '',
    fixedCapacity: '',
    floatingCapacity: '',
    roomPrice: '',
    decorPrice: '',
    rooms: '',
    address: '',
    banquet: '',
    album: '',
    city: '',
    pricing: '',
  });

  const banquetType = [
    "4 Star and Above Hotels",
    "Banquet Halls",
    "Lawns/FarmHouses",
    "Hotels",
    "Resorts",
    "Restaurant/Party Laounge",
  ]

  const fetchData = async () => {
    try {
      const data = await getBanquet();
      setFormData({ ...data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getAdminData = async () => {
    try {
      const data = await getAdmin();
      setAdminData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    getAdminData();
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await setBanquet({ ...formData, type: adminData.vendorType })
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 className='content-heading'>
        Add New Service
      </h1>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>Select City</InputLabel>
              <Select
                value={formData.city}
                name="city"
                onChange={handleChange}
                label="Select Banquet"
              >
                <MenuItem disabled>Select City</MenuItem>
                {
                  cities.map((item, id) => (
                    <MenuItem key={id} value={item.city}>{item.city}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          {
            adminData && adminData.vendorType === "Venues" &&
            <React.Fragment>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Fixed Capacity"
                  variant="outlined"
                  type="number"
                  name="fixedCapacity"
                  value={formData.fixedCapacity}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Floating Capacity"
                  variant="outlined"
                  type="number"
                  name="floatingCapacity"
                  value={formData.floatingCapacity}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Number of rooms"
                  variant="outlined"
                  type="number"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth required>
                  <InputLabel>Select Banquet</InputLabel>
                  <Select
                    name="banquet"
                    value={formData.banquet}
                    onChange={handleChange}
                    label="Select Banquet"
                  >
                    <MenuItem disabled>Select Banquet</MenuItem>
                    <MenuItem value="Indoor">Indoor</MenuItem>
                    <MenuItem value="Outdoor">Outdoor</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth required>
                  <InputLabel>Select Banquet Type</InputLabel>
                  <Select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    label="Select Banquet Type"
                  >
                    <MenuItem disabled>Select Banquet Type</MenuItem>
                    {
                      banquetType.map((item, idx) => (
                        <MenuItem key={idx} value={item}>{item}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </Grid>
            </React.Fragment>
          }
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Select Album</InputLabel>
              <Select
                value={formData.album}
                name="album"
                onChange={handleChange}
                label="Select Album"
              >
                <MenuItem disabled>Select Album</MenuItem>
                <MenuItem value="album1">Album 1</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {
            adminData && adminData.vendorType === "Venues" ?
            <React.Fragment>
                        <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Starting Room Pricing"
              variant="outlined"
              type="number"
              name="roomPrice"
              value={formData.roomPrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Starting Decor Pricing"
              variant="outlined"
              type="number"
              name="decorPrice"
              value={formData.decorPrice}
              onChange={handleChange}
            />
          </Grid>
            </React.Fragment>
            :
            <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Pricing"
              variant="outlined"
              type="number"
              name="pricing"
              value={formData.pricing}
              onChange={handleChange}
            />
          </Grid>
          }
          <Grid item xs={12}>
            <Button variant="contained" color="primary" style={{ backgroundColor: '#e72e77' }} onClick={handleSave}>
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
