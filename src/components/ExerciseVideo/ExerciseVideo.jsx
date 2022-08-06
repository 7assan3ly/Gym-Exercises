import React from 'react'
import './ExerciseVideo.css'
import { Typography, Box, Stack } from '@mui/material';
import Loader from '../Loader/Loader'


const ExerciseVideo = ({ ExerciseVideos, name }) => {

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
    <Typography sx={{ fontSize: { lg: '40px', xs: '25px' } }} fontWeight={700} color="#000" mb="35px">
      Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
    </Typography>
    {ExerciseVideos.length !== 0 ? 
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
      {ExerciseVideos?.slice(0, 3)?.map((item, index) => (
        <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img style={{ borderTopLeftRadius: '20px', maxHeight:'218px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
          <Box>
            <Typography sx={{ fontSize: { lg: '25px', xs: '15px' } }} fontWeight={600} color="#000">
              {item.video.title}
            </Typography>
            <Typography fontSize="14px" color="#000">
              {item.video.channelName}
            </Typography>
          </Box>
        </a>
      ))}
    </Stack>
    : <Loader /> }
  </Box>
  )
}

export default ExerciseVideo