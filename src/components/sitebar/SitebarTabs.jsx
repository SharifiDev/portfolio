import React from 'react'
import { HomeRounded, FaceRounded, TextSnippetRounded, TerminalRounded, MessageRounded, ConnectWithoutContactRounded, CopyrightRounded } from '@mui/icons-material';
import {  Tabs, Tab } from '@mui/material';
import { useContext } from 'react';
import MinContext from './../../context'


export default function SitebarTabs() {
    const {pageNumber,handlePageNumber,closeDrawer} = useContext(MinContext)

    const tabprops = (index) => {
        return {
            id: `sidbar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`
        }
    } 

    const tabs =[
        {label:'صفحه اصلی',icon:<HomeRounded />,...tabprops(0)},
        {label:'درباره من',icon:<FaceRounded />,...tabprops(1)},
        {label:'روزمه من',icon:<TextSnippetRounded />,...tabprops(2)},
        {label:'نمونه کار ها',icon:<TerminalRounded/>,...tabprops(3)},
        {label:'ارتباط با من',icon:<ConnectWithoutContactRounded />,...tabprops(4)},
    ]
    return (
        <>
            <Tabs value={pageNumber} onChange={handlePageNumber} orientation='vertical' allowScrollButtonsMobile variant="scrollable"  >
                {
                    tabs.map((tab,index)=>{
                        return <Tab key={index} onClick={closeDrawer}  {...tab} sx={{ "&.MuiTab-root": { minHeight: 40 },fontFamily:'tanha', color: 'white', height: '10px' }} label={tab.label} icon={tab.icon} iconPosition='start'></Tab>
                    })
                }
            </Tabs>

        </>
    )
}
