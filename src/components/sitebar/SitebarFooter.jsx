import React from 'react'
import { CopyrightRounded } from '@mui/icons-material';
import { Box, Typography, Divider} from '@mui/material';
import { grey } from '@mui/material/colors'
export default function SitebarFooter() {
    return (
        <>
            <Divider variant='middle' color={grey[800]} sx={{ my: 2 }} />
            <Box sx={{ color: '#fff', display: 'flex',mb:4, height:'40px', justifyContent: 'center', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant='subtitle2'>طراحی شده توسط علی شریفی</Typography>
                <Typography sx={{ fontFamily: 'dana' }} variant='caption'>کپی رایت 1403 <CopyrightRounded sx={{ verticalAlign: 'middle' }} /></Typography>
            </Box>

        </>
    )
}
