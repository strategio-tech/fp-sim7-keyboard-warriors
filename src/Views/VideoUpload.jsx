import { useState, useRef } from "react"
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../Layout.css";
import lplogo from '../assets/uploadVideo.png'

function VideoUpload({setloggedIn}) {
    const { register, handleSubmit } = useForm();
    const [title, setTitle] = useState("");
    const [videoFile, setVideoFile] = useState([])

    let navigate = useNavigate()

    const onSubmit = async (data) => {
                
        const formData = new FormData();
        formData.append("videoFile", data.file[0]);
        formData.append("videoTitle", title);
        console.log(formData)
        
        const res = await axios.post(
            `https://api.serenitystream.tv/api/v2/videos`,
            formData,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "content-type": "multipart/form-data",
                    Authorization:
                    "Bearer " + localStorage.getItem("token"),
                },
            }
            
        )
        .then((response) => {
            let data = response.data;
            console.log(data);

            // setAudioURL(data.audioURL);
            // setVideoURL(data.videoURL);
            // setImgURL(data.imgURL);
        })
        .catch((error) => {
            if(error.response && error.response.data == "Invalid session!"){
                localStorage.removeItem("token")
                setloggedIn(false)
                navigate("/home")
            }

            console.log(error);
        });
    }
        return (
            <div className=" flex-column justify-content-around align-items-center"
            style={{ background: '#EDFEFF', height: "100vh",font:'Raleway', alignItems: "center" }}>
    
            <form className="flex-column col-12 col-sm-7 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-around align-items-start" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="chooseFile" >
            <img className="flex-column justify-content-around align-items-start" src={lplogo} alt="" width="100%" height="100%"/>
            </label> 
     
             <input id="chooseFile" type="file" style={{ display: 'none' }} {...register("file")} />   

                <TextField
                    label="Title"
                    variant="outlined"
                    className="col-11 mb-4"
                    name="videoTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* <input
                            type="file"
                            name="video"
                            id="videoUpload"
                            accept="video/mp4, video/mov, video/webM"
                            onChange={(e) => setVideoFile(e.target.files)}
                            
                        /> */}
            <span >
                <h5>Difficulty</h5>
                <input type="radio" value="beginner" id="beginner" name="difficulty" />
                <label htmlFor="beginner">&nbsp;Beginner &nbsp;&nbsp;</label> 
                <input type="radio"  value="intermediate" id="intermediate" name="difficulty"/>
                <label htmlFor="intermediate">&nbsp;Intermediate &nbsp;&nbsp;</label>
                <input type="radio"  value="advanced" id="advanced" name="difficulty"/>
                <label htmlFor="advanced">&nbsp;Advanced&nbsp;&nbsp;</label>
            </span>

            <h5>Category</h5>
            <select style={{background: '#EDFEFF', width: "50%"}}>
                <option value="ashtanga">Ashtanga yoga (eight-limbed yoga)</option>
                <option value="hatha">Hatha yoga (force yoga)</option>
                <option value="hot">Hot yoga (hot room yoga)</option>
                <option value="iyengar">Iyengar yoga (focuses on three aspects: alignment, sequencing, and timing )</option>
                <option value="kundalini">Kundalini yoga (yoga of awareness)</option>
                <option value="power">Power yoga (build strength and endurance)</option>
                <option value="restorative">Restorative yoga (relaxing, calming, and healing effects)</option>
                <option value="vinyasa">Vinyasa yoga (flow yoga)</option>
            </select> 
            <div className=" mt-4 col-12 d-flex justify-content-start gap-4 align-items-start">
            <button type ="submit" size="md" 
               style={{ borderRadius: "60px",
                     background: "#014E58",
                     color: "#00FF19",
                      padding: "6px 30px",
                      fontWeight: "bold",
                      fontFamily:'Raleway'
            }}> Submit </button>
                   <button type ="" size="md" 
                    style={{ borderRadius: "60px",
                     background: "#014E58",
                     color: "#00FF19",
                      padding: "6px 30px",
                      fontWeight: "bold",
                      fontFamily:'Raleway'

             }} ><Link to="/feed">Cancel</Link> </button>
                </div> 

            </form>
        
        </div>
       
    )
}

export default VideoUpload