import React from 'react'
import { Box,Typography,Avatar,Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';

export default function PagesContainer({children}) {
  const theme = useTheme()
  return (
    <Grid  size={{xs:12,sm:12,md:8,lg:9,xl:10,xxl:10}}  >
      {children}
   </Grid>
  )
}
