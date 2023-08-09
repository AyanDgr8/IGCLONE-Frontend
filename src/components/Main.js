import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading_page from "./Loading_page";
import PostView from "./PostView";
import CreatePost from "./CreatePost";
export default function Main(){
    return <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Loading_page></Loading_page>}></Route>
        <Route path="/PostView" element={<PostView></PostView>}></Route>
        <Route path="/CreatePost" element={<CreatePost></CreatePost>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
}