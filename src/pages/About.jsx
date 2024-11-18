import React from 'react'
import { Typography, Box, Avatar, Divider, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import avatar from './../assets/imgs/avatar.jpg'
import { Height } from '@mui/icons-material';
import { CodeRounded, SelfImprovementRounded } from '@mui/icons-material';
import DevInfo from './components/DevInfo'
import Skill from './components/skill.jsx';
import { devSkills } from './../constants/devSkills.js'


export default function About() {
    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript((oldProgress) => {
                const diff = Math.floor( Math.random() * 10)
                return Math.min(oldProgress + diff, 82);
            });

            setHtml((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 95);
            });

            setCss((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 73);
            });

            setReactJs((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 95);
            });

            setNodeJs((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 86);
            });

            setGit((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 66);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);
    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill ,vueSkill,matreialSkill,reduxSkill,wordprssSkill,tailwintSkill,bootstrapSkill,mysqlSkill,mongodbSkill} = devSkills;

    return (
        <Card sx={{ height:'100vh', overflowY: 'auto', backgroundColor: "whitesmoke" }}>
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
                        <Avatar variant='rounded' sx={{ width: 1, height: 'auto', display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }} src={avatar} />

                    </Grid>

                    <Avatar variant='rounded' sx={{  width:300, height: 'auto',mb:3, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} src={avatar} />
                    <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid sx={{textAlign:'start',mr:5}}>
                        <DevInfo>نام و نام خانوادگی : علی شریفی</DevInfo>
                        <DevInfo>سن : 22</DevInfo>
                        <DevInfo> شهر : مشهد</DevInfo>
                        <DevInfo>آدرس ایمیل :alidev@gmail.com</DevInfo>
                        <DevInfo>شماره موبایل : 090343444</DevInfo>
                        </Grid>
                        <Grid sx={{textAlign:'start',display:{xs:'none',sm:'inline',md:'none',lg:'inline'}}} >
                        {/* <DevInfo> من سید علی سینا شریفی برنامه نویس فرانت اند و تسلط به زبان های برنام ه  نویسی زیادی استم</DevInfo> */}

                        </Grid>

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1 ,mt:4}}>
                        <Divider textAlign="center" sx={{ color: 'black', mb: 2, width: 1, "&::before, &::after": { borderColor: 'primary.main' } }}>
                            <Chip color="secondary" label={
                                <Typography variant='body1' color="black" sx={{ textAlign: "center", display: "flex", justifyContent: 'center', alignItems: 'center', gap: 0 }} >
                                    مهارت های من <SelfImprovementRounded />
                                </Typography>
                            }
                                sx={{ p: 3 }} />
                        </Divider>
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={bootstrapSkill.name} icon={bootstrapSkill.icon} color={bootstrapSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={tailwintSkill.name} icon={tailwintSkill.icon} color={tailwintSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javascript} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={vueSkill.name} icon={vueSkill.icon} color={vueSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={reactJs} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={reduxSkill.name} icon={reduxSkill.icon} color={reduxSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={matreialSkill.name} icon={matreialSkill.icon} color={matreialSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={mongodbSkill.name} icon={mongodbSkill.icon} color={mongodbSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={nodeJs} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={mysqlSkill.name} icon={mysqlSkill.icon} color={mysqlSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={wordprssSkill.name} icon={wordprssSkill.icon} color={wordprssSkill.color} value={git} />

                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}
