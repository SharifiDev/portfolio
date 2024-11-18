import React from 'react'
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors'
export default function SitebarContainer({children}) {
    return (
        <>
            <Grid size={{ xs: 0, sm: 0, md: 4, lg: 3, xl: 2 }} sx={{ backgroundColor: grey[900] , height:'100vh', overflowY:'scroll'}}>
                {children}
            </Grid>
        </>
    )
}
