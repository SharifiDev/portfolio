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
  const [pageNumber, setPageNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const [mode , setMode]  = useState()


  const theme = useTheme()
  const prefersDarkTheme = useMediaQuery('(prefers-color-scheme: dark');
  console.log(prefersDarkTheme);
  




  const handleChangeMode = ()=>{
    setMode(pre => pre === 'light'? 'dark' : 'light')
  }
  useEffect(()=>{
    setMode(prefersDarkTheme ? 'dark' : 'light')
  },[])

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
      <MainLayout mode={mode}>

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
            <Resume/>
          </Page>
          <Page value={pageNumber} index={4}>
            <Education/>
          </Page>
          <Page value={pageNumber} index={5}>
            <Courses/>
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
