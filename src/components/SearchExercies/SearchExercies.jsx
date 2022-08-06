import React, { useState, useEffect } from 'react'
import './SearchExercies.css'
import { exerciesOptions, fetchData } from '../../api/fetchData'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'
import { Box, Stack, Button, Typography, TextField } from '@mui/material'

const SearchExercies = ({ setExercises, bodyPart, setBodyPart, setCurrentPage }) => {

  const [Search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciesOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (Search) {
      const exerciesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciesOptions)

      const searchRes = exerciesData.filter(
        (item) => item.name.toLowerCase().includes(Search) ||
          item.target.toLowerCase().includes(Search) ||
          item.equipment.toLowerCase().includes(Search) ||
          item.bodyPart.toLowerCase().includes(Search)
      )
      setSearch('')
      setCurrentPage(1)
      setExercises(searchRes)
      window.scrollTo({ top: 1600, left: 100, behavior: 'smooth' });
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

      <Typography textAlign="center" fontWeight={700} mb="35px" sx={{ fontSize: { lg: "40px", xs: "30px" } }}> Awesome Exercies You <br /> Should Know </Typography>

      <Box position="relative" mb="50px">
        <TextField value={Search} onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" placeholder="Search for exercies" sx={{ borderRadius: '40px', width: { lg: '800px', xs: '350px' }, input: { fontWeight: '700', border: 'none', borderRadius: '40px' } }} />
        <Button className='search-btn' sx={{ position: 'absolute', right: '0', height: '56px', width: { lg: '173px', xs: '80px' }, backgroundColor: '#ff2625', color: '#fff', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} setCurrentPage={setCurrentPage} isBodyParts />
      </Box>

    </Stack>
  )
}

export default SearchExercies