import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";





function App() {
    const user=false;
  return (

    <Router>
        <Topbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post/:postId" element={<Single/>}/>
            <Route path="/write" element={user?<Write/>:<Register/>}/>
            <Route path="/settings" element={user?<Settings/>:<Register/>}/>
            <Route path="/login" element={user?<Home/>:<Login/>}/>
            <Route path="/register" element={user?<Home/>:<Register/>}/>

        </Routes>
    </Router>
  );
}

export default App;


//https://fonts.google.com/?query=var