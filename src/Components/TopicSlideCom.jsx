import React from 'react'
import slide_pick from '../assets/TopicSlide_pick.png'
import Flex from './Flex'
const TopicSlideCom = ({title, Arttiltle, Viewtitle}) => {
  return (
    <div className='my-[60px]'>
      <div className='w-[270px] mx-auto'>
       <img src={slide_pick} alt="" />
       <div className='px-[55px] py-[30px] rounded-b-[5px] shadow-xl w-full'>
        <h1 className='font-medium font-prompt text-[25px] text-black text-center'>{title}</h1>
        <Flex className={`items-center gap-2`}>
            <h5 className='font-medium font-inter text-[14px] text-hash'>{Arttiltle}</h5>
            <div className='w-[2px] h-[10px] rounded-[4px] bg-main'></div>
            <h5 className='font-medium font-inter text-[14px] text-hash'>{Viewtitle}</h5>
        </Flex>
       </div>
      </div>
    </div>
  )
}

export default TopicSlideCom