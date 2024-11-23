import React from 'react'
import { Typography, Box, Avatar, Divider, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import avatar from '../assets/imgs/avatar.jpg'
import { CodeRounded } from '@mui/icons-material';
import DevInfo from './components/DevInfo'
import { KeyboardArrowLeftRounded } from '@mui/icons-material';
import CountUp from 'react-countup';
import {devWorkInfo} from '../constants/details.js'
import { useTheme } from '@mui/material';
export default function About() {
 
   const theme = useTheme()
    return (
        <Card sx={{ height:'100vh', overflowY: 'auto' ,backgroundColor:theme.palette.mode == 'dark'?'#111827':'#F3F4F6'}}>
            <Divider textAlign="center" sx={{ color: 'black', my:2, width: 1, "&::before, &::after": { borderColor: 'primary.main' } }}>
                <Chip color="primary" label={
                    <Typography variant='body1' color="black" sx={{width:{xs:200,sm:400} , textAlign: "center", display: "flex", justifyContent: 'center', alignItems: 'center', gap: 3 }} >
                         توسعه دهنده فرانت اند <CodeRounded  />
                    </Typography>
                }
                    sx={{ p: 3 }} />
            </Divider>
            <CardContent>
                <Grid container sx={{ diplay: 'flex', alignItems:'center' ,justifyContent:'center'}}>
                    <Grid size={{ xs: 0, sm: 0, md: 4, lg: 4, xl: 4 }} sx={{ pr: 4 }}>
                        <Avatar variant='rounded' sx={{ width: 1, height:1, backgroundPosition:'center', display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }} src={avatar} />

                    </Grid>

                    <Avatar variant='rounded' sx={{  width:300, height: 'auto',mb:3, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} src={avatar} />
                    <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} sx={{ display: 'flex', flexDirection:{xs:'column',sm:'row'}, justifyContent: 'center', alignItems: 'center' }}>
                        <Grid sx={{textAlign:'start',mr:5}}>
                        <DevInfo>نام و نام خانوادگی : علی شریفی</DevInfo>
                        <DevInfo>سن : 22</DevInfo>
                        <DevInfo> شهر : مشهد</DevInfo>
                        <DevInfo>آدرس ایمیل :alidev@gmail.com</DevInfo>
                        <DevInfo>شماره موبایل : 090343444</DevInfo>
                        </Grid>
                        <Grid sx={{textAlign:'start',mb:6,backgroundColor:'blure',display:{xs:'inline',sm:'inline',md:'none',lg:'inline'},justifyContent:'center',width:300,mt:5}} >
                          <Typography color={'text.primary'}  variant='h6'><KeyboardArrowLeftRounded sx={{verticalAlign:'bottom',color:'primary.main'}}/>من یک:</Typography>
                        <Typography  color={'text.primary'} sx={{backgroundColor:'dred',ml:3}} >برنامه‌نویس فرانت‌اند با تجربه و اشتیاق به یادگیری. به دنبال فرصتی در یک تیم خلاق هستم تا با تمرکز بر کیفیت و تجربه کاربری، به موفقیت پروژه‌ها کمک کنم.</Typography>

                        </Grid>

                    </Grid>
                </Grid>
             <Box component="div" sx={{width:1,mb:2, display:'flex',flexDirection:{xs:'column',sm:'row'} ,alignItems:{xs:'center',sm:'start'},justifyContent:'center',gap:1 , mt:{xs:0,sm:5}}}>
                {

                    devWorkInfo.map((item,index) =>{
                        console.log(item)
                        return (
                            <Box key={index} component="div" sx={{width:{xs:1,sm:200},mb:2}}>
                            <Chip icon={<item.icon/>} label={
                                <Typography  variant="body1" color="whitesmoke">
                                  <CountUp start={0} end={item.total} duration={7}/>
                                </Typography>
                            } sx={{p:2,backgroundColor:item.color,width:1}}/>
                            <Typography color="text.primary" sx={{mt:1}}>{item.tooltipTitle}  </Typography>
                        </Box>
                        )
                    })
                }
                    </Box>
            </CardContent>
        </Card>
    )
}

