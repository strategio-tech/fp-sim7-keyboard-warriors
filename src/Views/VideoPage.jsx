import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import Comments from "../Components/Comments";
import VideoRating from "../Components/VideoRating";
import axios from "axios";
const INITIAL_HEIGHT = 46;
import img from "../assets/landing-page-image.png";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  const { id } = useParams();
  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const onComment = async () => {
    const res = await axios
      .post(
        `https://api.serenitystream.tv/api/v2/videos/${id}/comment`,
        { comment: commentValue },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        let data = response.data;
        console.log(data);
      })
      .catch((error) => {
        if (error.response && error.response.data == "Invalid session!") {
          localStorage.removeItem("token");
          setloggedIn(false);
          navigate("/home");
        }
        console.log(error);
      });
  };

  useEffect(() => {
    const getVideoInfo = async () => {
      const response = await axios.get(
        `https://api.serenitystream.tv/api/v2/videos/${id}`
      );
      //   console.log(response.data);
      setComments(response.data.comments.SS);
      setTitle(response.data.title.S);
      setUserName(response.data.username.S);
      setVideo(response.data.url.S);
      setRating(response.data.rating.N);
    };
    getVideoInfo();
  }, []);

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
        <VideoRating id={id}></VideoRating>
        <span>
          <button type="submit">Add to Playlist</button>

          <button type="submit" onClick={() => onExpand()}>
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
          <button
            type="submit"
            disabled={commentValue.length < 1}
            onClick={onComment}
          >
            Post Comment
          </button>
        </div>
      </form>
      <div className="comment-container">
        Comments
        {comments.map((comment) => {
          return (
            <Comments
              user={comment.username}
              comment={comment.content}
            ></Comments>
          );
        })}
      </div>
    </div>
  );
};

export default VideoPage;
