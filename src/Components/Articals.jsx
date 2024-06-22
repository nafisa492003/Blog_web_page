import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Title from './Title'
import { BsArrowUpRightCircle } from "react-icons/bs";
import ArticalSlide from './ArticalSlide';
const Articals = () => {
  return (
   <section className='my-[100px]'>
    <Container>
        {/* title */}
    <Flex className={`items-center justify-between mb-[60px]`}>
    <Title title='Latest Article' subtitle='Article'/>
    <Flex className={`items-center gap-1`}>
        <h5 className='font-prompt font-medium text-[18px] text-main'>View Article</h5>
        <BsArrowUpRightCircle className='text-[20px] text-main' />
    </Flex>
    </Flex>
      {/* title */}

      <Flex className={`items-center gap-8 flex-col lg:flex-row lg:gap-10 `}>
      <ArticalSlide/>
      <ArticalSlide/>
      <ArticalSlide/>
      </Flex>
    </Container>
   </section>
  )
}

export default Articals