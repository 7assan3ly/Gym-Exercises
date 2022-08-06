import React from 'react'
import './Navbar.css'
import { Stack } from '@mui/material'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap:{ sm:'123px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none' }} px="20px">
      <Link to="/">
        <img className='navLogo' src={Logo} alt='Logo' />
      </Link>

      <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end" >
        <Link className='navLink' to="/">Home</Link>
        <a className='navLink' href="#exercies">Exercies</a>
      </Stack>
    </Stack>
  )
}

export default Navbar