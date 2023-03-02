import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignedInNav from "./Components/SignedInNavbar";
import LandingPage from "./Views/LandingPage";
import Login from "./Views/Login";
import SignUp from "./Views/SignUp";
import VideoFeed from "./Views/VideoFeed"
import UserProfile from "./Views/UserProfile";
import VideoPage from "./Views/VideoPage";
import './Layout.css';
import { useEffect, useState } from "react";
import VideoUpload from "./Views/VideoUpload"

const Layout = () => {
    const [loggedIn, setloggedIn] = useState(false);

   
    return (
        <BrowserRouter>
            <SignedInNav loggedIn={loggedIn} setloggedIn={setloggedIn}/>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/feed" element={<VideoFeed />} />
                <Route path="/watch/:id" element={<VideoPage setloggedIn={setloggedIn} />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/upload" element={<VideoUpload setloggedIn={setloggedIn} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Layout;