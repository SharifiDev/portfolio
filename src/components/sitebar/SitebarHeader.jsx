import React from 'react'
import avatar from './../../../public/imgs/avatar.jpg';
import { Box, Typography, Avatar, Divider, Hidden, Tabs, Tab,IconButton } from '@mui/material';
import { grey } from '@mui/material/colors'
import { GitHub,Facebook,Telegram,Instagram,WhatsApp,LinkedIn } from '@mui/icons-material';
import ThemeActionBtn from './../ThemeActionBtn'
import { useTheme } from '@mui/material/styles';

export default function SitebarHeader() {
  const theme=useTheme()
  return (
    <>
        <ThemeActionBtn/>
        <Box c sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 2, textAlign: 'center' }} color='main.primary'>
            <img src={avatar} style={{ width: 200, height: 200, borderRadius: '5px', marginBottom: '5px' }} alt="" />
            <Hidden mdDown>
                {/* <Avatar variant="rounded" sx={{ width: '200px', height: '200px', mb: 1 }} src={avatar}>AS</Avatar> */}
            </Hidden>
            <Typography color={theme.palette.mode == 'dark'? 'white':'black'} variant='h6'>علی شریفی</Typography>
            <Typography color='grey'  variant=' caption' sx={{ fontFamily: 'tanha' }}>برنامه نویس  فرانت اند</Typography>
        </Box>
        <Box component={'div'} sx={{display:'flex', justifyContent:'center'}}>
            <Box component={'div'} sx={{m:'0 auto',textAlign:'center ',m:0}}>
              <IconButton aria-label='Github'>
                    <a href="https://github.com/SharifiDev" target="_blank" rel="noopener noreferrer">  <GitHub sx={{color:'gray'}} /></a> 
              </IconButton>
            </Box>        
            <Box component={'div'} sx={{m:'0 auto',textAlign:'center ',m:0}}>
              <IconButton aria-label='Github'>
                    <a href="#" target="_blank" rel="noopener noreferrer">  <Instagram sx={{color:'gray'}} /></a> 
              </IconButton>
            </Box>        
            <Box component={'div'} sx={{m:'0 auto',textAlign:'center ',m:0}}>
              <IconButton aria-label='Github'>
                    <a href="#" target="_blank" rel="noopener noreferrer">  <Telegram sx={{color:'gray'}} /></a> 
              </IconButton>
            </Box>        
            <Box component={'div'} sx={{m:'0 auto',textAlign:'center ',m:0}}>
              <IconButton aria-label='Github'>
                    <a href="#" target="_blank" rel="noopener noreferrer">  <WhatsApp sx={{color:'gray'}} /></a> 
              </IconButton>
            </Box>        
        </Box>

        <Divider variant='middle' />
      
    </>
  )
}
