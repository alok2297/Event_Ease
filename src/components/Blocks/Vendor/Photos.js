import React, { useState, useEffect } from 'react';
import { Iconify } from "../../Elements/Icon";
import { TextField, Button, Grid } from '@mui/material';
import { setPhotos, getPhotos } from 'Api/services';

export const Photos = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [album, setAlbum] = useState("");
  const [albumList, setAlbumList] = useState([]);
  const [cover, setCover] = useState("");
  const [selectedTab, setTab] = useState('cover');

  const fileChangedHandler = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPhotos();
        setCover(data.cover)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [])

  const uploadHandler = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
    // images
  };

  const handleChange = (e) => {
    setCover(e.target.value);
  };

  const uploadImages = async () => {
    await setPhotos({ cover });
  };

  const handleAlbumChange = (e) => {
    setAlbum(e.target.value);
  };

  const handleAdd = () => {
    if (album.trim() !== '') {
      setAlbumList([album, ...albumList]);
      setAlbum('');
    }
  };

  const handleDelete = (index) => {
    const newList = albumList.filter((_, i) => i !== index);
    setAlbumList(newList);
  };

  const uploadAlbum = async () => {
    await setPhotos({ album: albumList });
  };

  return (
    <div className="project-cntr">
      <h1 className='content-heading'>Photo Uploader</h1>
      <div className='nav-tab'>
        <span className={selectedTab === 'cover' ? 'active' : ''} onClick={() => setTab('cover')}>Cover</span>
        <span className={selectedTab === 'album' ? 'active' : ''} onClick={() => setTab('album')}>album</span>
      </div>
      {
        previewUrl ?
          <div className='uploaded-img'>
            <img src={previewUrl} alt="Preview" style={{ width: '100px' }} />
            <button onClick={uploadHandler}>Upload</button>
          </div>
          :
          <div>
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
            {
              selectedTab === "cover" ?
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Paste Your Link Hare"
                      variant="outlined"
                      name="name"
                      value={cover}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#e72e77' }} onClick={uploadImages}>
                      Upload
                    </Button>
                  </Grid>
                </Grid>
                :
                <div style={{ maxWidth: "100%" }}>
                  <div style={{ maxWidth: "100%" }}>
                    {
                      !!albumList?.length &&
                      <div style={{ marginBottom: "24px" }}>
                        <ul className='added-list'>
                          {
                            albumList.map((item, index) => (
                              <li key={index}>
                                <p>
                                  { item }
                                </p>
                                <div onClick={() => handleDelete(index)}>
                                  <Iconify
                                    width={24}
                                    height={24}
                                    style={{ color: "red" }}
                                    icon="mdi:delete"
                                  />
                                </div>
                              </li>
                            ))
                          }
                        </ul>
                        <Grid item xs={12}>
                          <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#e72e77' }} onClick={uploadAlbum}>
                            Upload
                          </Button>
                        </Grid>
                      </div>
                    }
                    <Grid container spacing={3}>
                      <Grid item xs={12} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <TextField
                          required
                          fullWidth
                          label="Paste Your Link Hare"
                          variant="outlined"
                          name="name"
                          value={album}
                          onChange={handleAlbumChange}
                        />
                        <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#e72e77', marginTop: "12px" }} onClick={handleAdd}>add</Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
            }
          </div>
      }
    </div>
  );
}
