import React from 'react'
import {Fab,Box} from '@mui/material'
import { MenuRounded } from '@mui/icons-material';
import { useContext } from 'react';
import MinContext from './../../context'
export default function DrawerActionBtn() {
    const {toggleChangeDrawer} = useContext(MinContext)
    return (
        <>
            <Box sx={{ m: 2, display: { xs: 'block', sm: 'block', md: 'none' },position:'absolute' }} >
                <Fab size='small' onClick={toggleChangeDrawer}>
                    <MenuRounded />
                </Fab>
            </Box>

        </>
    )
}
