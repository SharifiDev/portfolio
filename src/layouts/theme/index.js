import { createTheme } from "@mui/material";

export  const theme = createTheme({
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
        ali:{
            main:"#199292",
           
        }
     },
    typography:{
      fontFamily:'tanha',
      button:{
        fontFamily:'dana-bold'
      },
      body3:{
        fontSize:"50px",
        fontFamily:"vazir",
        color:'#404',
        background: '#eee',
        fontWeight:'900',
        padding:'10px',
        margin:'80px',
        border:'1px solid red'
        
      }
    }
  })