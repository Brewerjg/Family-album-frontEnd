import React from 'react'
import Navbar from '../components/navbar';
import DisplayImg from '../components/displayImg';
import { useState } from 'react';

const Home = () => {
    const [image, setImage] = useState([]);
    const removeDom = imageId => {
        setImage(image.filter(image => image._id !== imageId));
    }

  return (
    <div>
      <Navbar/>
      <DisplayImg image={image} setImage={setImage} removeDom={removeDom}/>
    </div>
  )
}

export default Home
