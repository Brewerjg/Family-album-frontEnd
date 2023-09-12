import React from 'react'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';


const Edit = () => {
    const { id } = useParams(); 
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [file, setFile] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    const deleteImage = () => {
        axios.delete('http://localhost:8080/api/image/' + id)
            .then(res => {

                navigate("/");
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/image/' + id)
            .then(res => {
                setName(res.data.name);
                setDescription(res.data.description);
                setFile(res.data.file);

            })
            .catch(err => console.log(err))
    }, [])
    
    const updateImage = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/image/' + id, {
            name,
            description,
            file,
        })   
            .then(res => {
                console.log(res);
                navigate("/"); 
            })

            .catch((err) => {
                const errorResponse = err.response.data.errors;
                console.log(err.response);
                const errorArr = Object.values(errorResponse).map((error) => error.message);
                setErrors(errorArr);
        });            
}


    return (
        <div className='flex flex-col justify-center w-full m-5 p-10'>
            <div >
            {errors.map((err, index) => (
                <p key={index}>{err}</p>
            ))}
            <form className='' onSubmit={updateImage}>

                <p className='m-4'>
                <label for="name" className='text-red-700'>Choose a name:</label>
                    <select name="name" id="name" onChange={(e) => { setName(e.target.value) }}>
                    <option value="">--Please choose an option--</option>
                    <option value="Grammer">Grammer</option>
                    <option value="Bhakta">Bhakta</option>
                    <option value="Hooks">Hooks</option>
                    </select>
                </p>
                <p className='flex flex-col w-1/3'>
                    <label for="formGroupExampleInput2" className="text-2xl text-red-800">Description</label>
                    <textarea class="form-control border border-dark" id="exampleFormControlTextarea1" rows="3" value={description}  onChange={(e)=>setDescription(e.target.value)}></textarea>
                </p>
                <p className='hidden m-4'>
                    <label className="text-2xl text-red-800">Image</label><br />
                    <input type="text" 
                    title="file" 
                    value={file} 
                    onChange={(e) => { setFile(e.target.value) }} />
                </p>
                <input className='m-2 btn btn-primary btn-sm' type="submit" />
            </form>
            <div class="col">
                <div>
                    <img className='w-[300px]' src={file} alt="" />
                </div>
                
                <button onClick={(e)=>{deleteImage(id)}} className='ms-2' >Delete</button>
                
            </div>
            </div>
        </div>
  )
}

export default Edit