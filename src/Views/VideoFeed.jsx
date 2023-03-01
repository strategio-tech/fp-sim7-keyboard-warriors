import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VideoFeed = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    const getVideoInfo = async () => {
      const response = await axios.get(
        "https://api.serenitystream.tv/api/v2/videos/public "
      );
      console.log(response.data.Items[0]);
    };
    getVideoInfo();
  }, []);
  return (
    <div>
      <h1>Videos</h1>
      <button type="submit">
        <Link to="/upload">Upload Videos</Link>
      </button>
      {/* <input type = "text">Search Bar</input> */}
      <input
        type="text"
        placeholder="Search here"
        onChange={handleSearch}
        value={searchInput}
      />
      <div className="border border-info">
        <span className="border border-info">
          Difficulty:
          <input type="radio" value="beginner" id="beginner" />
          <label htmlFor="beginner">Beginner</label>
          <input type="radio" value="intermediate" id="intermediate" />
          <label htmlFor="intermediate">Intermediate</label>
          <input type="radio" value="advanced" id="advanced" />
          <label htmlFor="advanced">Advanced</label>
        </span>
        Category:
        <select>
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

      <div></div>
    </div>
  );
};

export default VideoFeed;
