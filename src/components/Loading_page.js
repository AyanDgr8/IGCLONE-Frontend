import { Link } from "react-router-dom";
import loadingImg from "../insta/images/lens-1418954@2x.png"
import './loading_page.css'
export default function Loading_page(){
    return <div>
        {/* <h1>welcome to instagram</h1>
        <p>this is the new site for conversation</p>
        <Link to="/PostView">PostView</Link>
        <br>
        </br>
        <Link to="/CreatePost">CreatePost</Link> */}
         <div id="loadingMain">
      
      <img
        src={loadingImg}
        alt="not available"
      />
      <div id="tenxheading">
      <h1 >10 x acadamy</h1>
        <Link to="/PostView"><button id="enter">Enter</button></Link>
      </div>
        
    </div>


    </div>
}