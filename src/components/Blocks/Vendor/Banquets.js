import React, { useState } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid } from '@mui/material';
import cities from "../../../Data/Cities.json"

export const Banquets = () => {
  const [banquet, setBanquet] = useState('');
  const [album, setAlbum] = useState('');
  const [city, setCity] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    fixedCapacity: '',
    floatingCapacity: '',
    roomPrice: '',
    decorPrice: '',
    rooms: '',
    address: '',
  });

  const handleBanquetChange = (event) => {
    setBanquet(event.target.value);
  };

  const handleAlbumChange = (event) => {
    setAlbum(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const data = {
      ...formData,
      banquet,
      album,
      city,
    }
    console.log(data);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 className='content-heading'>
        Add New Banquet
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
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>Select City</InputLabel>
              <Select
                value={city}
                onChange={handleCityChange}
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
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Fixed Capacity"
              variant="outlined"
              type="number"
              name="fixedCapacity"
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
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>Select Banquet</InputLabel>
              <Select
                value={banquet}
                onChange={handleBanquetChange}
                label="Select Banquet"
              >
                <MenuItem disabled>Select Banquet</MenuItem>
                <MenuItem value="Indoor">Indoor</MenuItem>
                <MenuItem value="Outdoor">Outdoor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Select Album</InputLabel>
              <Select
                value={album}
                onChange={handleAlbumChange}
                label="Select Album"
              >
                <MenuItem disabled>Select Album</MenuItem>
                <MenuItem value="album1">Album 1</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Starting Room Pricing"
              variant="outlined"
              type="number"
              name="roomPrice"
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
              onChange={handleChange}
            />
          </Grid>
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
