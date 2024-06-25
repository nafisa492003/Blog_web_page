import React from 'react'
import Banner from '../Components/Banner'
import Topic from '../Components/Topic'
import Articals from '../Components/Articals'
import Travel from '../Components/Travel'
import Featured from '../Components/Featured'
import FeaturedVideo from '../Components/FeaturedVideo'
import OfferBanner from '../Components/OfferBanner'
import Author from '../Components/Author'
import BecomeAuther from '../Components/BecomeAuther'

const Home = () => {
  return (
    <>
   <Banner/>
   <Topic/>
   <Articals/>
   <Travel/>
   <Featured/>
   <FeaturedVideo/>
   <OfferBanner/>
   <Author/>
   <BecomeAuther/>
  
    </>
  )
}

export default Home