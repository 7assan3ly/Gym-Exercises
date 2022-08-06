import React from 'react'
import './Loader.css'
import { Stack } from '@mui/material'
import { Grid } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%" sx={{ mt:{lg:'200px', xs:'100px'} }}>
        <Grid color="grey" />
    </Stack>
  )
}

export default Loader