import React from 'react'
import './Header.css'
import { Box, Stack, Typography } from '@mui/material'
import Banner from '../../assets/images/banner.jpg'

const Header = () => {
  return (
    <Box sx={
      {mt: {lg:'100px',xs:'50px'},
        ml:{sm:'50px'}
      }} position='relative' p='20px'>

      <Typography color='#ff2625' fontWeight={700} fontSize='25px' mb='20px'>Fitness Club</Typography>
      <Typography fontWeight={700} mt='20px' fontSize='40px' mb='20px'>Sweat, Smile <br /> and Repeat</Typography>
      <Typography fontSize='20px' fontFamily="Alegreya" mb='20px'>Check out exercies</Typography>
      
      <Stack>
        <a href="#exercies" className='goToExercies'>Explore Exercies</a>
      </Stack>

      <Typography fontWeight={600} color='#ff2625'
        sx={{opacity:0.1, fontSize:'200px', display:{lg:'block', xs:'none'}}}
      >Exercise</Typography>

      <img src={Banner} className='bannerImg' alt='banner' />
    </Box>
  )
}

export default Header