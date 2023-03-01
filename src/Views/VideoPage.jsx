import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import Comments from "../Components/Comments";
import VideoRating from "../Components/VideoRating";
import axios from "axios";
const INITIAL_HEIGHT = 46;
import img from "../assets/landing-page-image.png"

const VideoPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [addPlaylist, setAddPlaylist] = useState({});

  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [thumbnail, setThumbnail] = useState(img);
  const [video, setVideo] = useState('');

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const getVideoInfo = async () => {
      const response = await axios.get(
        "https://api.serenitystream.tv/api/v2/videos/public"
      );
      console.log(response.data.Items[0]);
      setTitle(response.data.Items[0].title.S);
      setUserName(response.data.Items[0].username.S);
    //   setThumbnail(response.data.Items[0].thumbnails.L[0].S);
    setVideo(response.data.Items[0].url.S);
      setAddPlaylist([response.data.Items[0].id.S, title]);
    };
    getVideoInfo();
  }, []);

  console.log(addPlaylist);
  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div>
      <div className="container">
        <p>{title}</p>
    
        <iframe
      width="560"
      height="315"
      src={video}
    //   title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
        <VideoRating></VideoRating>
        <span>
        <button type="submit" >
            
            Add to Playlist
            {addPlaylist[1]}
          </button>

        <button type="submit" onClick={ () => onExpand()}>
            Add Comment
          </button>

        </span>
      </div>
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: commentValue.length > 0,
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
        }}
      >
        <div className="header">
          <div className="user">
            <img src="avatar/path" alt="User avatar" />
            <span>{userName}</span>
          </div>
        </div>
        <label htmlFor="comment"></label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="Add Comment"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={commentValue.length < 1}>
            Post Comment
          </button>
        </div>
      </form>
      {/* <div className="comment-container">
        Comments
        <Comments userName={"Pepa Pig"} number={1}></Comments>
        <Comments number={2}></Comments>
        <Comments number={3}></Comments>
        <Comments number={4}></Comments>
      </div> */}
    </div>
  );
};

export default VideoPage;