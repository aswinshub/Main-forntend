import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
     
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Intenship Portal
        </Typography>
        <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link></Button>
        <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}}to={'/internship'}>Internship</Link></Button>
        <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/Login'}>Login</Link></Button>

      </Toolbar>
    </AppBar>
  </Box>
    </div>
  )
}

export default Navbar
