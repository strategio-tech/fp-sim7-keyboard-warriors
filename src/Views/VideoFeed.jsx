import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VideoPage from "./VideoPage";

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
    //   console.log(response.data.Items);
    };
    getVideoInfo();
  }, []);
  const id = "25d551be-5066-4fd2-96aa-2c3a2d4b9bcf";

//   console.log(allVideos)
  return (
    <div style={{background:'#EDFEFF', display:'flex', alignItems:'center', flexDirection:'column'}}>
      <h1>Videos</h1>
      <button type="submit" style={{borderRadius:'60px', background:'#014E58', color:'#00FF19'}}>
        <Link to="/upload">Upload Videos</Link>
      </button> <br />
      {/* <input type = "text">Search Bar</input> */}
      <input
        style={{width:'600px'}}
        type="text"
        placeholder="Search here"
        onChange={handleSearch}
        value={searchInput}
      />
      <div className="border-info" style={{ marginTop: "10px", display: "flex", alignItems:'center' }}>
        <div style={{ marginRight: "20px" }}>
          <span style={{ fontSize: "20px", marginRight: "5px" }}>Difficulty: </span>
          <input type="radio" value="beginner" id="beginner" name="difficulty" style={{ marginRight: "3px" }}
          />
          <label htmlFor="beginner" style={{ marginRight: "10px" }}>Beginner</label>
          <input type="radio" value="intermediate" id="intermediate" name="difficulty" style={{ marginRight: "3px" }}/>
          <label htmlFor="intermediate" style={{ marginRight: "10px" }}>Intermediate</label>
          <input type="radio" value="advanced" id="advanced" name="difficulty" style={{ marginRight: "3px" }}
          />
          <label htmlFor="advanced">Advanced</label>
        </div>

        <div style={{height:'42px'}}>
          <span style={{ fontSize: "20px", marginRight: "9px"}}>Category:</span>
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
      </div>

      <div className ="d-flex flex-column">
        {/* <Watch id={id}></Watch> */}
        {/* <VideoPage id = {id}></VideoPage> */}
        
        {/* {allVideos} */}
        {    
                allVideos.map((video) =>{
              return <Link to={`/watch/${video.id.S}`}>Test Link</Link>

                // console.log()
              })
        }
      </div>
    </div>
  );
};

export default VideoFeed;
