import React from 'react'
import Container from './Container'
import offer_banner from '../assets/Offer_banner.png'
const OfferBanner = () => {
  return (
    <section className='my-[100px]'>
    <Container>
    <img src={offer_banner} alt="" />
    </Container>
    </section>
  )
}

export default OfferBanner