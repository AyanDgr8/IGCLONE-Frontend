import { useState } from "react"

import './input.css'
import { Link, Navigate } from "react-router-dom";
import icon from "./images/icon@2x.png"
import camera from "./images/camera@2x.png"
import { useNavigate } from 'react-router-dom';
export default function CreatePost(){

    let [data , setdata] = useState({
        name:'',
        description:'',
        location:'',
        image:null
    })
    let [post, setpost] = useState('');
    let Navigate = useNavigate()

    function handleChange(e) {
      let { name, value } = e.target;
    
      if (name === 'image') {
        setdata({
          ...data,
          [name]: e.target.files[0]
        });
      } else {
        setdata({
          ...data,
          [name]: value
        });
      }
    }

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('location', data.location);
      formData.append('image', data.image);
    
      function postdata(e) {
        e.preventDefault();
        console.log("Submitting data:", data);
      
        fetch("https://instagram-backend-6ykv.onrender.com/createPost", {
          method: "POST",
          body: formData
        })
        .then(res => res.json())
        .then(data => console.log("post created ", data))
        .catch(err => {
          console.log("Error:", err);
        });
        // setpost('su');
        Navigate("/PostView")
      }

    return <div>
       
      <header >
        <div id="headerpv"><img id="icon" src={icon} alt=""></img><h1>instagram </h1>
        <Link id="link" to="/CreatePost"><img id="camera" src={camera} alt="not available"></img></Link></div>
       </header>

        <main id="inputmain">
        <div id="inputmain1">
        
        <br></br>
        {post ? <div>"post created successfully" <Link to="/PostView">view posts</Link> </div> :<div>
    
          <form onSubmit={postdata} encType="multipart/form-data">
          <input type="file" id="brouseFile" name="image" accept="image" onChange={handleChange}></input>
          <br></br>
        
        <input id="name" placeholder="name" type="text" value={data.name} name="name" onChange={handleChange}></input>

        
        <input id="location" placeholder="location" type="text" value={data.location} name="location" onChange={handleChange}></input>
        
        <input id="description" placeholder="description" type="text" value={data.des} name="description" onChange={handleChange}></input>
        
        <input id="button" type="submit" ></input>
        </form></div>
        }
       

        </div>
        </main>
        
        
    </div>
}