import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const getLabelText = (value) => {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const VideoRating = ({id}) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [flag, setFlag] = React.useState(true)
  
  const handleRate = () => {
  flag && console.log("click");
  flag && axios
      .post(
          `https://api.serenitystream.tv/api/v2/videos/${id}/rate/${Math.round(
              value
          )}`
      )
      .then((res) => {
          let rating = Math.round(res.data.rating);
          setValue(rating);
      })
      .catch((err) => {
          console.log(err);
      });
      setFlag(false)
  }


  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        getLabelText={getLabelText}
        onClick={()=>handleRate()}
        onChange={(event, newValue) => {
          setValue(newValue);
          setFlag(true)
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

export default VideoRating