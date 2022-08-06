import React from 'react'
import './SimilarExercises.css'
import { Box, Typography, Stack } from '@mui/material'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'
import Loader from '../Loader/Loader'

const SimilarExercises = ({ EquipExercise, TargetExercise }) => {


  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {TargetExercise.length !== 0 ? <HorizontalScrollbar data={TargetExercise} /> : <Loader />}
      </Stack>

      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {EquipExercise.length !== 0 ? <HorizontalScrollbar data={EquipExercise} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises