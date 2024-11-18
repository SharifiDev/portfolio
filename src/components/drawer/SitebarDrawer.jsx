import React from 'react'
import Drawer from '@mui/material/Drawer';
import { useContext } from 'react';
import Mincontext from './../../context'
import SitebarContent from '../sitebar/SitebarContent';


export default function SitebarDrawer() {
    const {open,setOpen} = useContext(Mincontext)
    return (
        <>
            <Drawer open={open} variant='temporary' onClose={() => setOpen(false)} sx={{ '& .MuiDrawer-paper': { width: '300px' }, display: { sx: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
                <SitebarContent/>
            </Drawer>

        </>
    )
}
