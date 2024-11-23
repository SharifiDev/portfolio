import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import createCache from '@emotion/cache'
import { prefix, prefixer } from 'stylis'
import { LightTheme,DarkTheme } from './theme'
import Grid from '@mui/material/Grid2';
import { Box,Typography,Avatar,Divider } from '@mui/material';
import { grey } from '@mui/material/colors';


const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

function MainLayout({ children ,mode }) {

    const theme  =  mode === 'dark' ? DarkTheme : LightTheme ;
   
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وب سایت شخصی علی شریفی</title>
                    </Helmet>
                    {/* grid system  */}
                    <Grid container sx={{width:'100%'}}  >
                      {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>


    )
}

export default MainLayout
