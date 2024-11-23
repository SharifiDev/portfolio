import React from 'react'
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors'
import { useTheme } from '@mui/material/styles';
export default function SitebarContainer({children}) {
    const theme= useTheme()
    return (
        <>
            <Grid className='sidebar' size={{ xs: 0, sm: 0, md: 4, lg: 3, xl: 2 }} sx={{ backgroundColor:theme.palette.mode == 'dark' ?  grey[900] :'white' ,height:'100vh', overflow:'auto'}}>
                {children}
            </Grid>
        </>
    )
}
