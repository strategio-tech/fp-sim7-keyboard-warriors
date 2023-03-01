import { useState, useRef } from "react"
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios";
function VideoUpload() {
    const { register, handleSubmit } = useForm();
    const [title, setTitle] = useState("");
    const [videoFile, setVideoFile] = useState([])
    const onSubmit = async (data) => {
                
        const formData = new FormData();
        formData.append("videoFile", data.file[0].name);
        formData.append("title", title);
        console.log(formData)
        
        const res = await axios.post(
            `https://api.serenitystream.tv/api/v2/videos`,
            formData,
            {
                headers: {
                    // "Access-Control-Allow-Origin": "*",
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
        .catch((error) => console.error(error));
    }
        return (
        <div>
            <p>Video Upload Page</p>
            <span className="border border-info" >
                Difficulty            
                <input type="radio" value="beginner" id="beginner" />
                <label htmlFor="beginner">Beginner</label>
                <input type="radio"  value="intermediate" id="intermediate" />
                <label htmlFor="intermediate">Intermediate</label>
                <input type="radio"  value="advanced" id="advanced" />
                <label htmlFor="advanced">Advanced</label>
            </span>

            <h3>Category</h3>
            <select>
                <option value="ashtanga">Ashtanga yoga (eight-limbed yoga)</option>
                <option value="hatha">Hatha yoga (force yoga)</option>
                <option value="hot">Hot yoga (hot room yoga)</option>
                <option value="iyengar">Iyengar yoga (focuses on three aspects: alignment, sequencing, and timing )</option>
                <option value="kundalini">Kundalini yoga (yoga of awareness)</option>
                <option value="power">Power yoga (build strength and endurance)</option>
                <option value="restorative">Restorative yoga (relaxing, calming, and healing effects)</option>
                <option value="vinyasa">Vinyasa yoga (flow yoga)</option>
            </select>
            <button type = "submit">Cancel</button>
            <button type = "submit">Submit</button>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                <input type="file" {...register("file")} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default VideoUpload