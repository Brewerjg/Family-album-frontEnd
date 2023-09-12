import React from 'react'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import { useMemo } from "react"


const DisplayImg = () => {


    const [image, setImage] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(()=>{
    	axios.get("http://localhost:8080/api/image")
    	.then((res)=>{
	    console.log(res.data);
            setImage(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])



    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!filteredImages) {
          return image;
        }
        return image.filter((image) => image.name === filteredImages);
      }
    
      // Avoid duplicate function calls with useMemo
      var filteredList = useMemo(getFilteredList, [filteredImages, image]);
    
      function handleNameChange(e) {
        setFilteredImages(e.target.value);
      }


  return (
    <div>
        <div className='w-full flex justify-center'>
          <label for="name" className='text-red-700 text-4xl m-2'>Choose a name:</label>
                    <select name="name" id="name" onChange={handleNameChange}>
                    <option  value="">Select a Name</option>
                    <option  value="">All</option>
                    <option value="Grammer">Grammer</option>
                    <option value="Bhakta">Bhakta</option>
                    <option value="Hooks">Hooks</option>
                    </select>
          </div>
        <div className=" my-8 grid 2xl:grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 justify-center gap-8 p-6">
            
            {filteredList.map((image, index)=>{
                    return (
            <div className='bg-transparent rounded-3xl p-2' key={index}>  
                <Link to={"/image/" + image.id}>
                <img src={image.file} alt=" random imgee" className="w-full object-cover object-center rounded-3xl bg-slate-600 shadow-md"/>
                </Link>
            </div>
            )})
            }
        </div>
    </div>
  )
}

export default DisplayImg