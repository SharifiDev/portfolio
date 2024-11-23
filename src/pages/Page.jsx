import React from 'react'
import { Box } from '@mui/material'
export default function Page(props) {
    const {children,index,value,...others} = props

  return (
    <div role="tabpanel" hidden={value != index} id={`tabpanel-${index}`} {...others} sx={{backgroundColor:'green'}}>
      { value === index && (
        <Box sx={{height:'100vh'}}>
          {children}
          </Box>
        )}

      
    </div>
  )
}
