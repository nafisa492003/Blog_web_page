import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { Link } from 'react-router-dom'
const Breadcrumb = ({title}) => {
  return (
    <section className='py-5 bg-[#F8F8F8]'>
        <Container>
            <Flex className={`items-center gap-1`}>
            <Link className='font-normal font-prompt text-[15px] text-black' to='/'>Home /</Link>
            <Link className='font-normal font-prompt text-[15px] text-hash' to='/about'>{title}</Link>
            </Flex>
        </Container>
    </section>
  )
}

export default Breadcrumb