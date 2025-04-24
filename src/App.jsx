import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import eezib from "./assets/images/eezib2.png"
import TableComponent from './TableComponent'

const App = () => {
  return (
    <Box sx={{  display:'flex', flexDirection:"column", minHeight:'100vh' }} >

      <AppBar position="static" sx={{ width:"100%" }} >
        <Toolbar>
          <Box component='img' src={eezib} sx={{ width:"10rem" }} />
        </Toolbar>
      </AppBar>


      <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', mt:5, paddingX:5 }} >
        <TableComponent />
      </Box>

    <Box
      sx={{
        px: { xs: 2, sm: 5, md: 10, lg: 15 }, // Responsive horizontal padding
        mb: { xs: 5, md: 10 }, // Responsive bottom margin
      }}
    >
      <Typography
        sx={{
          fontFamily: 'roboto',
          fontSize: { xs: 20, sm: 24, md: 29 },
          mt: 5,
          fontWeight: 600,
          color: '#2c34d1',
        }}
      >
        Excluded Taxes*
      </Typography>

      <Typography
        sx={{
          fontFamily: 'roboto',
          fontSize: { xs: 16, sm: 20, md: 25 },
          mt: 0,
          fontWeight: 500,
          color: 'gray',
        }}
      >
        Note :-
      </Typography>

      <Box
        component="ol"
        sx={{
          pl: { xs: 2, sm: 3 },
          fontSize: { xs: 14, sm: 16, md: 18, lg:30 },
          fontFamily: 'roboto',
          color: 'text.primary',
        }}
      >
        <li>
          Eezib at its sole discretion may waive any charge(s) completely or partially.
        </li>
        <li>
          The above charges are subject to change from time to time based on the discretion of Eezib.
        </li>
        <li>
          The charges may be different in the case of Co-branding cards. If different, the same shall be disclosed to the customer separately.
        </li>
        <li>
          The surcharge may differ depending on the acquirer and prevailing rates.
        </li>
      </Box>
    </Box>


    </Box>
  )
}

export default App