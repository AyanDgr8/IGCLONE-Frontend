// src/components/PostView.js

import React, { useState, useEffect } from 'react';
import "./post.css"
import { Link } from "react-router-dom";

import './styles/PostView.css'
import heart from "./images/heart@2x.png";
import share from "./images/share@2x.png";
// import more_icon from "./images/more_icon.svg";
import icon from "./images/icon@2x.png";
import camera from "./images/camera@2x.png";


// // import axios from 'axios'; 
// // import sampleData from '../sampleData';
// // import PostCard from './PostCard';
// // import NewPostForm from './NewPostForm';
// // import NavigationBar from "./NavigationBar";

const Postview = ({ updateFlag }) => {
    const [view, setView] = useState([]);
    const [loading ,setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() =>{
            fetch(`${process.env.INSTACLONE_BACKEND_URL}/posts`).then(
                res => res.json()
            ).then(ss =>{
                setView(ss.view);
                setLoading(false);
            }).catch(err =>{
                console.log(err);
                setLoading(false);
            });
        },2000)
    }, []);

    return (
        <>
        <div>
        {loading ? <div className="spinnerContainer">
            <div className="spinner"></div>
            </div>:<div>
                <header >
                    <div id="headerpv">
                        <img id="icon" src={icon} alt="">
                        </img>
                        <h1>instagram </h1>
                        <Link id="link" to="/CreatePost">
                            <img id="camera" src={camera} alt="not available">
                            </img>
                        </Link>
                    </div>
                </header>
        
        <main id="mainpv">
        {view.map(post =>(
        <div className="mainpv2" key={post._id}>
            <div className="name">{post.name}
            <div className="location"> {post.location}
            </div>
            </div>
            <br></br>    
            <div id="imgdiv">
                <img className="postImage" src={`https://instagram-backend-6ykv.onrender.com/uploads/${post.image}`} alt="not available">
                    </img>
                    </div>
                    <div>
                        <img id="likeImg" src={heart} alt="like symbel">
                        </img>
                        <img id="share" src={share} alt="share">
                        </img> 
                        <div className="date">{post.date}
                        </div>
                    </div>
                <div className="likes">{post.likes} likes</div>
        <div id="desc">{post.description}
        </div>
            </div>    

        ) )}
        </main>
        </div>}

        </div>
    </>
    );
        }

export default Postview;