import { createTheme } from "@mui/material";

export  const LightTheme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl:5036,
        },
    },
    direction:"rtl",
     palette:{
        mode:'light',
     },
    typography:{
      fontFamily:'tanha',
      button:{
        fontFamily:'dana-bold'
      },

    }
  })

  
export  const DarkTheme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl:5036,
        },
    },
    direction:"rtl",
     palette:{
        mode:'dark',
        
     },
    typography:{
      fontFamily:'tanha',
      button:{
        fontFamily:'dana-bold'
      },
    }
  })