// //components/AddPost.js
// import React from 'react';

// export default function AddPost() {
//   return (
//     <div>
//       <h2>Add New Post</h2>
//       {/* Add your form and logic for adding posts */}
//     </div>
//   );
// }





// Postview.js line 86


// const Postview = ({ updateFlag }) => {
// const [view, setView] = useState([]);
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

// export default Postview
