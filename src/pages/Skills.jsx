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
import { KeyboardArrowLeftRounded } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

export default function Skills() {
    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [tailwind, setTailwind] = useState(0);
    const [vue, setVue] = useState(0);
    const [matreial, setMatreial] = useState(0);
    const [mongodb, setMongodb] = useState(0);
    const [mysql, setMysql] = useState(0);
    const [wordprss, setWrordprss] = useState(0);
    const [redux, setRedux] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [git, setGit] = useState(0);
    const theme = useTheme()
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
                return Math.min(oldProgress + diff, 80);
            });

            setNodeJs((oldProgress) => {
                const diff = Math.floor(Math.random() * 60)
                return Math.min(oldProgress + diff, 86);
            });

            setVue((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 70);
            });
            setMatreial((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 65);
            });
            setRedux((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 70);
            });
            setTailwind((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 85);
            });
            setMongodb((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 75);
            });
            setWrordprss((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 75);
            });
            setMysql((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 60);
            });
            setBootstrap((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 70);
            });
            setGit((oldProgress) => {
                const diff = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + diff, 70);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);
    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill ,vueSkill,matreialSkill,reduxSkill,wordprssSkill,tailwintSkill,bootstrapSkill,mysqlSkill,mongodbSkill} = devSkills;

    return (
        <Card sx={{ height:'100vh', overflowY: 'auto' ,backgroundColor:theme.palette.mode == 'dark'?'#111827':'#F3F4F6'}}>
            <CardContent>
                <Grid container>
                    <Grid sx={{ width: 1 ,mt:0}}>
                        <Divider textAlign="center" sx={{ color: 'text.primary', mb: 2, width: 1, "&::before, &::after": { borderColor: 'primary.main' } }}>
                            <Chip color="secondary" label={
                                <Typography variant='body1' color="black" sx={{ textAlign: "center", display: "flex", justifyContent: 'center', alignItems: 'center', gap: 0 }} >
                                    مهارت های من <SelfImprovementRounded />
                                </Typography>
                            }
                                sx={{ p: 3 }} />
                        </Divider>
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={bootstrapSkill.name} icon={bootstrapSkill.icon} color={bootstrapSkill.color} value={bootstrap} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={tailwintSkill.name} icon={tailwintSkill.icon} color={tailwintSkill.color} value={tailwind} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javascript} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={vueSkill.name} icon={vueSkill.icon} color={vueSkill.color} value={vue} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={reactJs} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={reduxSkill.name} icon={reduxSkill.icon} color={reduxSkill.color} value={redux} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={matreialSkill.name} icon={matreialSkill.icon} color={matreialSkill.color} value={matreial} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={mongodbSkill.name} icon={mongodbSkill.icon} color={mongodbSkill.color} value={mongodb} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={nodeJs} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={mysqlSkill.name} icon={mysqlSkill.icon} color={mysqlSkill.color} value={mysql} />
                        <Skill sx={{ mb: 10, backgroud: 'red' }} name={wordprssSkill.name} icon={wordprssSkill.icon} color={wordprssSkill.color} value={wordprss} />

                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}
