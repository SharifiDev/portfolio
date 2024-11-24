import { useEffect, useState } from 'react'
import MainLayout from './layouts/mainLayout'
import SideBar from './components/sitebar/SideBar'
import PagesContainer from './containers/PagesContainer'
import Page from './pages/Page'
import SitebarContainer from './containers/SitebarContainer';
import MinContext from "./context"
import DrawerActionBtn from './components/drawer/DrawerActionBtn';
import { useTheme } from '@mui/material/styles';

import {Home,About,Resume,Courses,Contact,Education,Skills} from './pages'
import { useMediaQuery } from '@mui/material'


function App() {

  const getMode = ()=>{
    const initialModel = localStorage.getItem('theme')
    if(initialModel==null){
        if(window.matchMedia("(prefers-color-scheme:dark").matches){
            return true
        }else{
            return false
        }
    }else{

        return JSON.parse(localStorage.getItem("theme"))
    }
}


  const [pageNumber, setPageNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const [mode , setMode]  = useState(getMode())


  const theme = useTheme()
  // const prefersDarkTheme = useMediaQuery('(prefers-color-scheme: dark');
  
useEffect(()=>{
   localStorage.setItem('theme',JSON.stringify(mode))

},[mode])



  const handleChangeMode = ()=>{
    setMode(!mode)
  }

  const toggleChangeDrawer = () => {
    setOpen(!open)
  }
  const closeDrawer = () => {
    setOpen(false)
  }

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue)
  }


  return (
    <>
    <MinContext.Provider  value={{
      pageNumber,
      setPageNumber,
      handlePageNumber,
      open,
      setOpen,
      toggleChangeDrawer,
      closeDrawer,
      handleChangeMode
      }} >
      <MainLayout mode={mode?'dark':'light'}>

        <SitebarContainer>
          <SideBar/>
        </SitebarContainer>

          <DrawerActionBtn />
        <PagesContainer>
          <Page value={pageNumber} index={0}>
            <Home/>
          </Page>
          <Page value={pageNumber} index={1}>
            <About/>
          </Page>
          <Page value={pageNumber} index={2}>
            <Skills/>
          </Page>
          <Page value={pageNumber} index={3}>
            <Courses/>
          </Page>
          <Page value={pageNumber} index={4}>
            <Resume/>
          </Page>
          <Page value={pageNumber} index={5}>
            <Education/>
          </Page>
          <Page value={pageNumber} index={6}>
            <Contact/>
          </Page>
        </PagesContainer>

      </MainLayout>
    </MinContext.Provider>
    </>

  )
}

export default App
