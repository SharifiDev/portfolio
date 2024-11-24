import React from 'react'
import { useTheme } from '@mui/material/styles';
import {Fab,Box} from '@mui/material'
import { MenuRounded } from '@mui/icons-material';
import { useContext } from 'react';
import mainContext from '../context'
import { WbSunnyOutlined,NightlightOutlined } from '@mui/icons-material';

export default function DrawerActionBtn() {
    const theme = useTheme()
    const {handleChangeMode} = useContext(mainContext)


    return (
        <>
            <Box sx={{ m: 0,position:'absolute',top:20,right:5 }} >
                <Fab  size='small'  onClick={handleChangeMode} sx={{color:'whitesmoke', }}>
                    {theme.palette.mode === 'dark' ? <WbSunnyOutlined sx={{mr:0,color:'black',  }}/> : <NightlightOutlined sx={{mr:0,color:'black',rotate:'-50deg'}}/>}
                    {/* {theme.palette.mode === 'dark' ? 'تم روز':'تم شب'} */}
                </Fab>
            </Box>

        </>
    )
}
