import React from 'react'
import Datas from "../../../Data/PhotoIdeas.json"
import "./PhotosIdea.css"
const PhotosIdea = () => {

  const dynamicGrid =(items) => {
    return(
      <div className='photos-wrapper'>
      {items.map((data, i) => (
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
    )

  }
  return (
    <div className='main-container'>
      {dynamicGrid(Datas.slice(0,7))}
      {dynamicGrid(Datas.slice(2,9))}
      {dynamicGrid(Datas.slice(1,8))}
      {dynamicGrid(Datas.slice(3,10))}
    </div>
  )
}

export default PhotosIdea
