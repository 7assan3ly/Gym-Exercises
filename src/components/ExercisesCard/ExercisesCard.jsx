import React from 'react'
import './ExercisesCard.css'
import { Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ExercisesCard = ({ exercise, setBodyPart, setCurrentPage }) => {

  
  return (
    <div className="exercise-card">
      <Link to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      </Link>

      <Stack direction="row">
        <Button className='cardBtn' sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}
          onClick={() => {
            setBodyPart(exercise.bodyPart);
            setCurrentPage(1)
            window.scrollTo({ top: 1600, left: 100, behavior: 'smooth' });
          }}>
          {exercise.bodyPart}
        </Button>
        <Button className='cardBtn' sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>

      <Link className='cardLink' to={`/exercise/${exercise.id}`}>
        <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
          {exercise.name}
        </Typography>
      </Link>
    </div>

  )
}

export default ExercisesCard