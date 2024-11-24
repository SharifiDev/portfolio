import React from 'react'
import bghome from '../assets/imgs/bg03.jpeg'
import { Typography ,Box} from '@mui/material';
import { useRef,useEffect,useCallback } from 'react';

import Typed from 'typed.js';






export default function Home() {
    const nameEl = useRef(null)
    const infoEl = useRef(null)
    const string = ["من یک توسعه دهنده فول استک هستم","من یک مدرس برنامه نویس هستم ","من یک فرلنسر هستم",]
   useEffect(()=>{
        const typeName = new Typed(nameEl.current,{
            strings:[" علی شریفی "],
            typeSpeed:50,
            backSpeed:20,
            backDelay:10,
            showCursor:false,

        })
        const typedInfo = new Typed(infoEl.current,{
            strings:["من یک توسعه دهنده فرانت اند هستم","من یک  برنامه نویس هستم ","من یک فرلنسر هستم",],
            startDelay:1500,
            typeSpeed:80,
            backSpeed:60,
            loop:true,
            showCursor:false,

        });
        return()=>{
            typedInfo.destroy();
            typeName.destroy()
        }
    },[])





    return (
        <>
            <Box sx={{    backgroundImage:`linear-gradient( to left,rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.1) 100%),url(${bghome})`,width:1, height: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',display:'flex',flexDirection:'column', alignItems:'center' ,justifyContent:'center' }}   >
                <Box sx={{ }}>
                <Typography sx={{ textAlign: 'center',fontWeight:'bold' }} color="whitesmoke" variant='h3' ref={nameEl}></Typography>
                <Typography sx={{ textAlign: 'center',fontFamily:'tanha' }} color="whitesmoke" variant='h4' ref={infoEl}> </Typography>
                </Box>
                {/* <Typography sx={{ textAlign: 'center',fontFamily:'dana' }} color="whitesmoke" variant='h4'>   <ReactTyped strings={[" من یک توسعه دهند فول استک هستم "]} typeSpeed={60} /></Typography> */}
             
            </Box>

        </>
    )
}
