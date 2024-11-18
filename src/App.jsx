import { useState } from 'react'
import MainLayout from './layouts/mainLayout'
import SideBar from './components/sitebar/SideBar'
import PagesContainer from './containers/PagesContainer'
import Page from './pages/Page'
import SitebarContainer from './containers/SitebarContainer';
import MinContext from "./context"
import DrawerActionBtn from './components/drawer/DrawerActionBtn';


import {Home,About,Resume,Courses,Contact} from './pages'

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  const [open, setOpen] = useState(false)

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
    <MinContext.Provider  value={{pageNumber,setPageNumber,handlePageNumber,open,setOpen,toggleChangeDrawer,closeDrawer}} >
      <MainLayout>

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
            <Resume/>
          </Page>
          <Page value={pageNumber} index={3}>
            <Courses/>
          </Page>
          <Page value={pageNumber} index={4}>
            <Contact/>
          </Page>
        </PagesContainer>

      </MainLayout>
    </MinContext.Provider>
    </>

  )
}

export default App
