import React, { useState, useEffect } from 'react'
import { TextField, Button, Grid } from '@mui/material';
import { getMenuPrices, setMenuPrices } from 'Api/services';

export const Menu = () => {
  const loginEmail = localStorage.getItem('user')
  const [formData, setFormData] = useState({
    nonVegPrice: '',
    vegPrice: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setMenuPrices({...formData})
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMenuPrices(loginEmail);
        setFormData({...data});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [])

  return (
    <div>
      <h1 className='content-heading'>Menu</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Veg Pricing / plate"
            variant="outlined"
            type="number"
            name="vegPrice"
            value={formData.vegPrice}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Nonveg Pricing / plate"
            variant="outlined"
            type="number"
            name="nonVegPrice"
            value={formData.nonVegPrice}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" style={{ backgroundColor: '#e72e77' }} onClick={handleSave}>
            Update
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
