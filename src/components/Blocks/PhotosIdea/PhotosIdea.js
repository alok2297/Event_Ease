import React from 'react'
import Datas from "../../../Data/PhotoIdeas.json"
import "./PhotosIdea.css"
const PhotosIdea = () => {
  return (
    <div className='main-container'>
      <div className='photos-wrapper'>
        {Datas.slice(0,7).map((data, i) => (
          <div className='photos-container' key={i}>
            <div style={{ height: data.height }}>
              <img src={data.image} alt={data.title} />
            </div>
            <h2 className='title'>{data.title}</h2>
            <span className='location'>{data.location}</span>
            <p className='description'>{data.description}</p>
          </div>
        ))}
      </div><div className='photos-wrapper'>
        {Datas.slice(2,7).map((data, i) => (
          <div className='photos-container' key={i}>
            <div style={{ height: data.height }}>
              <img src={data.image} alt={data.title} />
            </div>
            <h2 className='title'>{data.title}</h2>
            <span className='location'>{data.location}</span>
            <p className='description'>{data.description}</p>
          </div>
        ))}
      </div><div className='photos-wrapper'>
        {Datas.slice(1,8).map((data, i) => (
          <div className='photos-container' key={i}>
            <div style={{ height: data.height }}>
              <img src={data.image} alt={data.title} />
            </div>
            <h2 className='title'>{data.title}</h2>
            <span className='location'>{data.location}</span>
            <p className='description'>{data.description}</p>
          </div>
        ))}
      </div><div className='photos-wrapper'>
        {Datas.slice(3,9).map((data, i) => (
          <div className='photos-container' key={i}>
            <div style={{ height: data.height }}>
              <img src={data.image} alt={data.title} />
            </div>
            <h2 className='title'>{data.title}</h2>
            <span className='location'>{data.location}</span>
            <p className='description'>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotosIdea
