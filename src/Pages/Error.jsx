import React from 'react'
import error_banner from '../assets/error_banner.png'
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { Link } from 'react-router-dom';
import { TiHomeOutline } from "react-icons/ti";
const Error = () => {
  return (
   <section style={{
    backgroundImage:`url(${error_banner})`
   }}
   className='object-cover py-20 lg:py-[185px]'
   >
  <Container>
    <Flex className={`items-center justify-center flex-col`}>
    <span className='font-medium font-prompt text-[80px] md:text-[100px] lg:text-[200px]'>404</span>
    <span className='font-semibold font-prompt text-[50px]'>Error page</span>
    <p className='font-inter font-normal text-[18px] w-full lg:w-[670px] mx-auto text-center my-5 text-hash'>Morbi quis elementum ex, id commodo odio. In maximus, augue eu vestibulum gomat dictum, lorem nibh faucibus quam, non mattis dui augue ac quam. Donec placeratena  purus aliquam, dapibus ipsum vel, accumsan massa.</p>
    <button className='flex items-center gap-2 py-5 px-[30px] bg-main font-inter font-semibold text-[18px] text-white'>
    <TiHomeOutline />
        <Link to='/'>
        Back to home
        </Link>
    </button>
    </Flex>
    
  </Container>
   </section>
  )
}

export default Error