import React from 'react'
import { HomeRounded, SchoolRounded,FaceRounded,SelfImprovementRounded, TextSnippetRounded, TerminalRounded, MessageRounded, ConnectWithoutContactRounded, CopyrightRounded } from '@mui/icons-material';
import {  Tabs, Tab } from '@mui/material';
import { useContext } from 'react';
import MinContext from '../../context'
import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


export default function SitebarTabs() {
    const {pageNumber,handlePageNumber,closeDrawer} = useContext(MinContext)
    const theme = useTheme()
    const tabprops = (index) => {
        return {
            id: `sidbar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`
        }
    } 

    const tabs =[
        {label:'صفحه اصلی',icon:<HomeRounded />,...tabprops(0)},
        {label:'درباره من',icon:<FaceRounded />,...tabprops(1)},
        {label:'مهارت های من',icon:<SelfImprovementRounded/>,...tabprops(2)},
        {label:'نمونه کار ها',icon:<TerminalRounded/>,...tabprops(3)},
        {label:'سوابق تحصیلی  ',icon:<SchoolRounded />,...tabprops(4)},
        {label:'سوابق شغلی  ',icon:<TextSnippetRounded />,...tabprops(5)},
        {label:'ارتباط با من',icon:<ConnectWithoutContactRounded />,...tabprops(6)},
    ]
    return (
        <>
            <Tabs value={pageNumber}  onChange={handlePageNumber} orientation='vertical' allowScrollButtonsMobile variant="scrollable" textColor={theme.palette.mode == 'dark'?'primary':'secondary'} >
                {
                    tabs.map((tab,index)=>{
                        return <Tab key={index} onClick={closeDrawer}  {...tab} sx={{ "&.MuiTab-root": { minHeight: 40 },fontFamily:'tanha',color:'text.primary', height: '10px' }} label={tab.label} icon={tab.icon} iconPosition='start'></Tab>
                    })
                }
            </Tabs>

        </>
    )
}
