import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VideoRating from "../Components/VideoRating";
import thumbnailImage from "../assets/thumbnail.jpg"

const VideoFeed = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allVideos, setAllVideos] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    const getVideoInfo = async () => {
      const response = await axios.get(
        "https://api.serenitystream.tv/api/v2/videos/public"
      );
      setAllVideos(response.data.Items);
    };
    getVideoInfo();
  }, []);
  
  return (
    <div
      className=" flex-column justify-content-start align-items-center"
      style={{
        background: "#EDFEFF",
        display: "flex",
        height: "100%",
        alignItems: "center",   
        width: "100%"             
         

      }}
    >
      <h1>Videos</h1>
      <button
        type="submit"
        style={{ borderRadius: "60px", background: "#014E58" }}
      >
        <Link
          to="/upload"
          style={{
            color: "#00FF19",
            textDecoration: "none",
            fontFamily: "Raleway",
            fontWeight: "bold",
            padding: "6px 30px",
          }}
        >
          Upload Videos
        </Link>
      </button>{" "}
      <br />
      <input
        style={{ width: "50%" }}
        type="text"
        placeholder="Search here"
        onChange={handleSearch}
        value={searchInput}
      />
      <div
        className="border-info"
        style={{ marginTop: "10px", display: "flex", alignItems: "center", marginBottom: "1rem" }}>
      
      <span >
                <h5>Difficulty</h5>
                <input type="radio" value="beginner" id="beginner" name="difficulty" />
                <label htmlFor="beginner">&nbsp;Beginner &nbsp;&nbsp;</label> 
                <input type="radio"  value="intermediate" id="intermediate" name="difficulty"/>
                <label htmlFor="intermediate">&nbsp;Intermediate &nbsp;&nbsp;</label>
                <input type="radio"  value="advanced" id="advanced" name="difficulty"/>
                <label htmlFor="advanced">&nbsp;Advanced&nbsp;&nbsp;</label>
            </span>
            </div>
        <div style={{ height: "42px" }}>
          <span style={{ fontSize: "20px", marginRight: "9px" }}>
            Category:
          </span>
          <select style={{ marginTop: "10px" }}>
            <option value="ashtanga">Ashtanga</option>
            <option value="hatha">Hatha</option>
            <option value="hot">Hot</option>
            <option value="iyengar">Iyengar</option>
            <option value="kundalini">Kundalini</option>
            <option value="power">Power</option>
            <option value="restorative">Restorative</option>
            <option value="vinyasa">Vinyasa</option>
          </select>
        </div>
      
      <div className="d-flex flex-column justify-content-center align-items-center">
        {allVideos.map((video) => {
          return (
            <div className="square">
              <Link to={`/watch/${video.id.S}`}><img className="col-12 col-sm-8 justify-content-around align-items-center" src={thumbnailImage} alt="" style={{height:'20em'}} /></Link><br />

              <Link to={`/watch/${video.id.S}`}>Yoga Title</Link>
              <VideoRating></VideoRating>
              <p style={{marginBottom:'3rem'}}>
                Dui proin mauris neque vulputate morbi quis et semper. Dui
                tortor.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoFeed;
