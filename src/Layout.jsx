import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignedInNav from "./Components/SignedInNavbar";
import LandingPage from "./Views/LandingPage";
import Login from "./Views/Login";
import SignUp from "./Views/SignUp";
import VideoFeed from "./Views/VideoFeed"
import UserProfile from "./Views/UserProfile";
import VideoPage from "./Views/VideoPage";
import './Layout.css';
import { useEffect } from "react";


const Layout = () => {

   
    return (
        <BrowserRouter>
            {/* <Navbar/> */}
            <SignedInNav/>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/feed" element={<VideoFeed />} />
                <Route path="/watch" element={<VideoPage />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Layout;