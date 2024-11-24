import React from 'react'
import { Typography, Chip, Box, Divider, LinearProgress } from '@mui/material'
import { grey } from '@mui/material/colors'
export default function Skill({ icon, color, name, value }) {
   
    return (
        <>
            <Divider textAlign="left" sx={{ color: 'black', mb:0 , width: 1,  }}>
                <Chip driection="rtl" color={color}
      
                label={
                    <Typography 
     
                     variant='body1' color="black" sx={{ml:1, textAlign: "center", display:"flex", justifyContent: 'center', alignItems: 'center', gap: 0,width:60 }} >
                       {name}
                    </Typography>
                }
                icon={<Box component='img' src={icon} sx={{height:30,width:30}}/>}
                    sx={{ py: 3, px:1 }} />
            </Divider>
            <Box sx={{display:"flex",alignItems:'center',mb:3}}>
                <Box sx={{width:1,mr:1}}>
                    <LinearProgress variant='determinate' value={value} color={color} sx={{height:10,borderRadius:2}}/>

                </Box>
                <Box sx={{mainwidth:35}}>
                    <Typography variant='body2' color='text.primary'>{value}%</Typography>
                </Box>

            </Box>
        </>
    )
}
