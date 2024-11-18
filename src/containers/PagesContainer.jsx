import React from 'react'
import { Box,Typography,Avatar,Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';


export default function PagesContainer({children}) {
  return (
    <Grid  size={{xs:12,sm:12,md:8,lg:9,xl:10,xxl:10}}  sx={{backgroundColor:"black"}}>
      {children}
   </Grid>
  )
}
