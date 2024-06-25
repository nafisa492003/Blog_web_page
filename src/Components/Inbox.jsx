import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaTelegramPlane } from "react-icons/fa";
import { MdSend } from "react-icons/md";
const Inbox = () => {
  return (
    <section className=' bg-[#F8F7F5] py-[80px]'>
    <Container>
        <Flex className={`justify-center items-center flex-col gap-10`}>
        <FaTelegramPlane className='lg:text-[100px] text-[60px] text-main' />
        <h1 className="font-prompt font-bold text-[22px] lg:text-[40px] text-black w-full lg:w-[690px] text-center">Get the best blog stories into your inbox Connect Us now.</h1>
        <Flex>
           <input className='py-[24px] px-[30px] placeholder:font-inter w-full lg:w-[506px] border border-secondary rounded-l-full placeholder:font-normal placeholder:text-[14px] placeholder:text-hash outline-none' placeholder='Enter Your Email...' type="text" /> 
           <button className='flex items-center gap-2 py-6 px-[25px] bg-white border border-secondary rounded-r-full'>
           Subscribe
           <MdSend />
           </button>
        </Flex>
        </Flex>
    </Container>
    </section>
  )
}

export default Inbox