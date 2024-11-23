import React from 'react'
import { CopyrightRounded } from '@mui/icons-material';
import { Box, Typography, Divider} from '@mui/material';
import { grey } from '@mui/material/colors'
import { useTheme } from '@mui/material/styles';
export default function SitebarFooter() {
    const theme = useTheme()
    return (
        <>
            <Divider variant='middle'  sx={{ my: 2 }} />
            <Box sx={{ color: 'main.primary', display: 'flex',mb:4, height:'40px', justifyContent: 'center', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant='subtitle2 ' sx={{ fontFamily: 'dana' }} color={theme.palette.mode == 'dark'? 'white':'black'}>طراحی شده توسط علی شریفی</Typography>
                <Typography sx={{ fontFamily: 'dana' }} color={theme.palette.mode == 'dark'? 'white':'black'} variant='caption'>کپی رایت 1403 <CopyrightRounded sx={{ verticalAlign: 'middle' }} /></Typography>
            </Box>

        </>
    )
}
