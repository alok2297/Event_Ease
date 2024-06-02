import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const Information = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    contactPersonName: '',
    additionalEmail: '',
    contactNumber: '',
    contactType: 'Mobile'
  });

  const loginEmail = localStorage.getItem('user')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="personal-info-form">
      <h1 className='content-heading'>Personal Information</h1>
      <form className="personal-info-form">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              type="email"
              fullWidth
              id="loginEmail"
              name="loginEmail"
              label="Email"
              placeholder="e.g.john@doe.com"
              value={loginEmail}
              onChange={handleChange}
              disabled
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              fullWidth
              id="brandName"
              name="brandName"
              label="Brand Name"
              value={formData.brandName}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              fullWidth
              id="contactPersonName"
              name="contactPersonName"
              label="Contact Person Name"
              value={formData.contactPersonName}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              fullWidth
              id="additionalEmail"
              name="additionalEmail"
              label="Additional Email ID"
              value={formData.additionalEmail}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="tel"
              fullWidth
              id="contactNumber"
              name="contactNumber"
              label="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#e72e77' }} onClick={handleSubmit}>
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Information;
