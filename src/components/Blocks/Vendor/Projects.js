import React, { useState } from 'react';
import { Iconify } from "../../Elements/Icon";
import { TextField, Button, Grid } from '@mui/material';


export const Projects = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [images, setImages] = useState(null);

  const fileChangedHandler = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const uploadHandler = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
    // images
  };

  const handleChange = (e) => {
    setImages(e.target.value);
  };

  const uploadImages = () => {
    console.log(images);
  };

  return (
    <div className="project-cntr">
      <h1 className='content-heading'>Photo Uploader</h1>
      {
        previewUrl ?
          <div className='uploaded-img'>
            <img src={previewUrl} alt="Preview" style={{ width: '100px' }} />
            <button onClick={uploadHandler}>Upload</button>
          </div>
          :
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <label className='img-cntr'>
              <Iconify
                width={45}
                height={45}
                style={{ color: "rgb(74, 74, 74)" }}
                icon="material-symbols:cloud-upload"
              />
              <span>Max file size: 16 MB</span>
              <span>Accepted Formats: jpg, jpeg, png</span>
              <div>
                Choose File
                <input name='uploader' type="file" onChange={fileChangedHandler} />
              </div>
            </label>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Paste Your Link Hare"
                  variant="outlined"
                  name="name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#e72e77' }} onClick={uploadImages}>
                  Upload
                </Button>
              </Grid>
            </Grid>
          </div>
      }
    </div>
  );
}
