import React, { useState } from 'react'
import { TextField, Button, Grid } from '@mui/material';

export const Menu = () => {
  const [formData, setFormData] = useState({
    nonVegPrice: '',
    vegPrice: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log(formData);
  };


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Veg Pricing / plate"
            variant="outlined"
            type="number"
            name="vegPrice"
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
