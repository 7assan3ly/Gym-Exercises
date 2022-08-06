import React from 'react'
import './Footer.css'
import { Box, Typography } from '@mui/material';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Typography variant="h5" sx={{fontSize:{lg:'22px',xs:'17px'}}} pt="40px" textAlign="center" pb="40px">Hassan ALy</Typography>
    </Box>
  )
}

export default Footer