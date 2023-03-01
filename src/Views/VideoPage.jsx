import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import Comments from "../Components/Comments";
import VideoRating from "../Components/VideoRating";
import axios from "axios";
const INITIAL_HEIGHT = 46;
import img from "../assets/landing-page-image.png"
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [addPlaylist, setAddPlaylist] = useState({});

  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState("");
  const [thumbnail, setThumbnail] = useState(img);
  const [video, setVideo] = useState("");
  const [comments, setComments] = useState([]);
  const {id} = useParams();
  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
// const id = "1e9d07f7-7d3c-4e0a-acab-453d9cb089e2";
  useEffect(() => {
    const getVideoInfo = async () => {
      const response = await axios.get(
        // "https://api.serenitystream.tv/api/v2/videos/public"
        `https://api.serenitystream.tv/api/v2/videos/${id}`
      );


    //   console.log(response.data.url.S);
      setComments(response.data.comments.SS)
      setTitle(response.data.title.S);
      setUserName(response.data.username.S);
    //   setThumbnail(response.data.Items[0].thumbnails.L[0].S);
        setVideo(response.data.url.S);
        setRating(response.data.rating.N);
    //   setAddPlaylist([response.data.Items[0].id.S, title]);
    // console.log(response)
    };
    getVideoInfo();
  }, []);

//   console.log(addPlaylist);
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
      <div className="comment-container">
        Comments
        <Comments userName={"Pepa Pig"} number={1}></Comments>
        <Comments number={2}></Comments>
        <Comments number={3}></Comments>
        <Comments number={4}></Comments>
      </div>
    </div>
  );
};

export default VideoPage;