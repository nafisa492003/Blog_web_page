import React from 'react'
import Header from './Header'
import Nav_bar from './Nav_bar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
   <Header/>
   <Nav_bar/>
   <Outlet/>
    </>
  )
}

export default Rootlayout