import React from 'react'

import SitebarTabs from './SitebarTabs';
import SitebarFooter from './SitebarFooter';
import SitebarHeader from './SitebarHeader';

import Drawer from '@mui/material/Drawer';

export default function SitebarContent() {

    return (
        <>
         {/* ----------------side-bar-header-------------------- */}
         <SitebarHeader/>
         {/* ----------------side-bar-header-------------------- */}
         <SitebarTabs/>
         {/* ----------------side-bar-footer-------------------- */}
        <SitebarFooter/>


    </>

    )
}
