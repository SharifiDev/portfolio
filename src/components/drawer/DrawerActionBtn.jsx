import React from 'react'
import {Fab,Box} from '@mui/material'
import { MenuRounded } from '@mui/icons-material';
import { useContext } from 'react';
import MinContext from '../../context'
export default function DrawerActionBtn() {
    const {toggleChangeDrawer} = useContext(MinContext)
    return (
        <>
            <Box sx={{ m: 0,position:'absolute',top:20,left:5 , display: { xs: 'block', sm: 'block', md: 'none' } }} >
                <Fab size='small' onClick={toggleChangeDrawer}>
                    <MenuRounded />
                </Fab>
            </Box>

        </>
    )
}
