import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import Comments from "../Components/Comments";
import VideoRating from "../Components/VideoRating";
import axios from "axios";
const INITIAL_HEIGHT = 46;
import img from "../assets/landing-page-image.png";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import profileImage from "../assets/Luuh.jpg";

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
    <div className=" flex-column justify-content-center align-items-start"
    style={{ background: '#EDFEFF', height: "100vh",font:'Raleway' }}>
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
        
        
        <div className="col-12 d-flex gap-4 justify-content-start align-items-start">
        <VideoRating id={id}></VideoRating>
        <span>
          <button type="submit" style={{ borderRadius: "60px",
                     background: "#014E58",
                     color: "#00FF19",
                      padding: "6px 30px",
                      fontWeight: "bold",
                      fontFamily:'Raleway'
            }} >Add to Playlist</button>

          <button type="submit" onClick={() => onExpand()} style={{ borderRadius: "60px",
                     background: "#014E58",
                     color: "#00FF19",
                      padding: "6px 30px",
                      fontWeight: "bold",
                      fontFamily:'Raleway'
            }}>
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
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT, background:'#E7EEED'
        }}
      >
        <div className="header">
          <div className="user">
          <img src={profileImage} height="30" width="30" className="rounded-circle mr-2" alt="User avatar"/>
            
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
          style={{background: '#EDFEFF'}}
        />
        <div className="actions " >
          <button type="button" className="cancel me-2 " onClick={onClose} style={{ borderRadius: "60px",
                     background: "#014E58",
                     color: "#00FF19",
                      padding: "1px 20px",
                      fontWeight: "bold",
                      fontFamily:'Raleway'
            }}>
            Cancel
          </button>
          <button
            type="submit"
            disabled={commentValue.length < 1}
            onClick={onComment}
            style={{ borderRadius: "60px",
                     background: "#014E58",
                     color: "#00FF19",
                      padding: "1px 20px",
                      fontWeight: "bold",
                      fontFamily:'Raleway'
            }}
          >
            Post Comment
          </button>
        </div>
      </form>

      <h3 className="mt-5" stryle={{ marginTop:"10"}}>Comments</h3>
      <div className="comment-container" style={{background:'#E7EEED'}}>
        
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
    </div>
  );
};

export default VideoPage;
