import React, { useEffect } from 'react'
import './Exercises.css'
import { Box, Stack, Typography, Pagination } from '@mui/material'
import ExercisesCard from '../ExercisesCard/ExercisesCard'
import { fetchData, exerciesOptions } from '../../api/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart, setBodyPart, currentPage, setCurrentPage }) => {
    
    const exercisesPerPage = 9

    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value)

        window.scrollTo({ top: 1600, behavior: 'smooth' })
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
          let exercisesData = [];
    
          if (bodyPart === 'all') {
            exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciesOptions);
          } else {
            exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciesOptions);
          }
    
          setExercises(exercisesData);
        };
    
        fetchExercisesData();
      }, [bodyPart]);

    return (
        <Box id="exercises"
            sx={{ mt: { lg: '100px' } }}
            mt='50px' p='20px'>

            <Typography variant='h3' fontWeight={700} mb='40px' sx={{ fontSize: { lg: '40px', xs: '20px' } }}>
                { currentExercises.length > 0 ? `Showing Results ${indexOfFirstExercise} - ${indexOfLastExercise}` : "" }
            </Typography>

            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, idx) => (
                    <ExercisesCard key={idx} exercise={exercise} setBodyPart={setBodyPart} setCurrentPage={setCurrentPage} />
                ))}
            </Stack>

            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large" />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises