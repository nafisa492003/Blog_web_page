import React from 'react'
import Breadcrumb from './../Components/Breadcrumb';
import Container from '../Components/Container';
import Flex from '../Components/Flex';
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import AuthorCards from './../Components/AuthorCards';
const AuthorPage = () => {
  return (
    <section>
          <Breadcrumb title="Author" />
          <Container>
            <Flex className={`items-center justify-between flex-col md:flex-row mt-[100px] mb-[60px]`}>
                <Flex className={`w-full md:w-1/2`}>
                    <Flex className={`items-center gap-3 lg:gap-8 py-5 px-5 lg:px-8 border border-secondary rounded-l-full bg-[#fffcf7]`}>
                        <h3 className='font-prompt font-normal text-[8px] lg:text-[15px] text-black'>All Category</h3>
                        <FaAngleDown size={14} />
                    </Flex>
                    <Flex className={`items-center gap-3 lg:gap-8 py-5 px-5 lg:px-8 border border-secondary bg-[#fffcf7]`}>
                        <h3 className='font-prompt font-normal text-[8px] lg:text-[15px] text-black'>Trending</h3>
                        <FaAngleDown size={14} />
                    </Flex>
                    <Flex className={`items-center gap-3 lg:gap-8 py-5 px-5 lg:px-8 border border-secondary rounded-r-full bg-[#fffcf7]`}>
                        <h3 className='font-prompt font-normal text-[8px] lg:text-[15px] text-black'>This Month</h3>
                        <FaAngleDown size={14} />
                    </Flex>
                </Flex>
                <div className='relative w-full mt-4 md:w-[270px] md:mt-0 py-[15px] px-[20px] bg-[#FFFAF0] border border-secondary rounded-full' >
                  <input className='bg-transparent outline-none placeholder:font-inter placeholder:font-normal placeholder:text-[12px] placeholder:text-hash' placeholder='Search here...' type="text" />
                  <IoSearchOutline className='text-[20px] text-hash absolute top-[18px] right-[18px]' />
                </div>
            </Flex>
            <Flex className={`items-center gap-[30px] flex-col  lg:flex-row my-12`}>
                <AuthorCards/>
                <AuthorCards/>
                <AuthorCards/>
                <AuthorCards/>
            </Flex>
            <Flex className={`items-center gap-[30px] flex-col  lg:flex-row my-12`}>
                <AuthorCards/>
                <AuthorCards/>
                <AuthorCards/>
                <AuthorCards/>
            </Flex>
            <Flex className={`items-center gap-[30px] flex-col  lg:flex-row my-12`}>
                <AuthorCards/>
                <AuthorCards/>
                <AuthorCards/>
                <AuthorCards/>
            </Flex>
            <Flex className={`items-center justify-center my-[80px]`}>

            <button className='py-[18px] px-[30px] rounded-[10px] bg-main text-white font-inter text-[18px] font-medium'>Load More</button>
            </Flex>
          </Container>
    </section>
  )
}

export default AuthorPage