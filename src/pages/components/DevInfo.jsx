import React from 'react'
import { KeyboardArrowLeftRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';
export default function DevInfo({children}) {
  return (
    <Typography   color="text.primary" sx={{mb:1}} >
        <KeyboardArrowLeftRounded sx={{verticalAlign:'bottom',color:'primary.main'}}/>
        {children}
    </Typography>
  )
}
