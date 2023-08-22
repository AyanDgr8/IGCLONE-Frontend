// App.js
import React, { useState }  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PostView from './components/PostView';
import NewPostForm from './components/NewPostForm';
import NavigationBar from './components/NavigationBar';

function App() {
  const [updateFlag, setUpdateFlag] = useState(false); // State to trigger updates

  const handleUpdate = () => {
    setUpdateFlag(!updateFlag); // Toggle the flag to trigger an update
  };
  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="wrapper">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/post" 
            element={<PostView updateFlag={updateFlag} />} // Pass the update flag 
            />
            <Route path="/add-post" 
            element={<NewPostForm onUpdate={handleUpdate} />} // Pass the update function 
            /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import Loading_page from './components/Loading_page';
// import PostView from './components/PostView';
// import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
// import Main from './components/Main';
// function App() {
//   return (
//     <div className="App">
      
//       <Main></Main>
//     </div>
//   );
// }

// export default App;