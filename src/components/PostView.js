// // components/PostView.js

// import React, { useState, useEffect } from 'react';
// import './styles/PostView.css'
// import heart from "./images/heart@2x.png";
// import share from "./images/share@2x.png";
// import more_icon from "./images/more_icon.svg";

// import axios from 'axios'; 
// // import sampleData from '../sampleData';
// // import PostCard from './PostCard';
// // import NewPostForm from './NewPostForm';
// // import NavigationBar from "./NavigationBar";

// const Postview = ({ updateFlag }) => {
//   const [view, setView] = useState([]);
//   const fetchPosts = () => {
//     // Fetch data from your backend API endpoint
//     axios.get(`${process.env.INSTACLONE_BACKEND_URL}/posts`)
//     // https://igclone-q3xt.onrender.com/
//     .then(response => {
//       setView(response.data);
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// };

// useEffect(() => {
//   fetchPosts();
// }, [updateFlag]);

//   return (
//     <>
//     <div>
//       {view.map((post) => ( 
//         <div key={post.id} className="post">
//           <div className="top">
//             <div className="left">
//               <h3>{post.name}</h3>
//               <h3 id="city">{post.location}</h3>
//             </div>
//             <div className="right">
//               <img src={more_icon} alt="" />
//             </div>
//           </div>
//           <div className="middle">
//             <img  src={`${process.env.REACT_APP_INSTACLONE_BACKEND_URL}/${post.PostImage}`} height="auto"alt="Post_pictures" />
//           </div>
//           <div className="bottom">
//             <div className="post-footer">
//               <div className="left">
//                 <div className="bottom-top">
//                   <img src={heart} alt="icon" />
//                   <img src={share} alt="icon" />
//                 </div>
//                 <p>{post.likes} Likes</p>
//               </div>
//               <div className="right">
//                 <span>{post.Date}</span>
//               </div>
//             </div>
//             <p>{post.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default Postview;

import { useEffect, useState } from "react"
import "./post.css"
import { Link } from "react-router-dom";
import icon from "./images/icon@2x.png"
import camera from "./images/camera@2x.png"
import like from "./images/heart@2x.png";
import share from "./images/share@2x.png"
export default function PostView(){

let [data , setdata] = useState([]);
let [loading ,setLoading] = useState(true)


    
    useEffect(()=>{
        setTimeout(() =>{
            fetch("https://instagram-backend-6ykv.onrender.com/data").then(
                res => res.json()
            ).then(ss =>{
                setdata(ss.data);
                setLoading(false);
            }).catch(err =>{
                console.log(err);
                setLoading(false);
            });
        },2000)
        
    },[])
    return <div>
    <div>
    
    {loading ? <div className="spinnerContainer"><div className="spinner"></div></div>:<div><header >
        <div id="headerpv"><img id="icon" src={icon} alt=""></img><h1>instagram </h1>
        <Link id="link" to="/CreatePost"><img id="camera" src={camera} alt="not available"></img></Link></div>
       </header>
       
       <main id="mainpv">
       {data.map(post =>(
        <div className="mainpv2" key={post._id}><div className="name">{post.name}<div className="location"> {post.location}</div></div>
         <br></br>    
        <div id="imgdiv"><img className="postImage" src={`https://instagram-backend-6ykv.onrender.com/uploads/${post.image}`} alt="not available"></img></div>
        <div><img id="likeImg" src={like} alt="like symbel"></img><img id="share" src={share} alt="share"></img> <div className="date">{post.date}</div></div>
        <div className="likes">{post.likes} likes</div>
       <div id="desc">{post.description}</div>
        </div>    

       ) )}
       </main></div>}

    </div>
    

       
      
           </div>
}
