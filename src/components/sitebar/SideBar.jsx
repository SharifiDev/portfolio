import React, { useState } from 'react'
import SitebarContent from './SitebarContent';
import SitebarDrawer from '../drawer/SitebarDrawer';



export default function SideBar() {



    return (
        <>
  
            <SitebarContent  />
            <SitebarDrawer />
        </>

    )
}









// <Tab sx={{color:'white'}} label={
//     <div>
//         <Typography sx={{display:'flex',alignContent:'center',}}>
//         <HomeRounded sx={{mr:1}}/>
//             رزمه من</Typography>
//     </div>
// } ></Tab>
