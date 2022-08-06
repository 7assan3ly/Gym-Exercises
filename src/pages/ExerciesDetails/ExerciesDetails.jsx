import React, { useState, useEffect } from 'react'
import './ExerciesDetails.css'
import { useParams } from 'react-router-dom'
import { exerciesOptions, fetchData, YTOptions } from '../../api/fetchData'
import { Box } from '@mui/material'
import Detail from '../../components/Detail/Detail'
import ExerciseVideo from '../../components/ExerciseVideo/ExerciseVideo'
import SimilarExercises from '../../components/SimilarExercises/SimilarExercises'

const ExerciesDetails = () => {

  const { id } = useParams()
  const [ExerciseDetail, setExerciseDetail] = useState({})
  const [ExerciseVideos, setExerciseVideos] = useState([])
  const [TargetExercise, setTargetExercise] = useState([])
  const [EquipExercise, setEquipExercise] = useState([])
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`
      const YTDbUrl = `https://youtube-search-and-download.p.rapidapi.com`

      const fetchExeData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciesOptions);
      setExerciseDetail(fetchExeData);
      
      const fetchYTData = await fetchData(`${YTDbUrl}/search?query=${fetchExeData.name}`, YTOptions);
      setExerciseVideos(fetchYTData.contents);

      const fetchTargetExercise= await fetchData(`${exerciseDbUrl}/exercises/target/${fetchExeData.target}`, exerciesOptions);
      setTargetExercise(fetchTargetExercise);

      const fetchEquipExercise = await fetchData(`${exerciseDbUrl}/exercises/equipment/${fetchExeData.equipment}`, exerciesOptions);
      setEquipExercise(fetchEquipExercise);
    };
    fetchExercisesData();
  }, [id]);
  
  if (!ExerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{mt:{lg:'95px', xs:'60px'}}}>
      <Detail ExerciseDetail={ExerciseDetail} />
      <ExerciseVideo ExerciseVideos={ExerciseVideos} name={ExerciseDetail.name}/>
      <SimilarExercises TargetExercise={TargetExercise} EquipExercise={EquipExercise} />
    </Box>
  )
}

export default ExerciesDetails