import React from 'react'
import Header from './Header'
import Nav_bar from './Nav_bar'
import { Outlet } from 'react-router-dom'
import Inbox from './Inbox'
import Footer from './Footer'

const Rootlayout = () => {
  return (
    <>
   <Header/>
   <Nav_bar/>
   <Outlet/>
   <Inbox/>
   <Footer/>
    </>
  )
}

export default Rootlayout