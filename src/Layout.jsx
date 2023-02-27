import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Views/LandingPage";
import Login from "./Views/Login";
import NoPage from "./Views/NoPage";
import SignUp from "./Views/SignUp";
import UserProfile from "./Views/UserProfile";
import VideoPage from "./Views/VideoPage";
import './Layout.css';


const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/watch" element={<VideoPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Layout;