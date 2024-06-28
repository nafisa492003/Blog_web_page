import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { IoIosClock } from "react-icons/io";
import { AiOutlineComment } from "react-icons/ai";
import { ImFire } from "react-icons/im";
import user from '../assets/Artical_img.png'
import { Link } from 'react-router-dom';
import img from '../assets/Image.png'
import PostViewSlider from '../Components/PostViewSlider';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { HiOutlineReply } from "react-icons/hi";
const PostView = () => {
  return (
    <section>
        <Breadcrumb title="Post View"/>
        <Container>
          {/* header */}
            <Flex className={`items-center justify-center flex-col gap-10 my-[50px]`}>
              {/* icons */}
              <Flex className={`items-center md:gap-5 gap-1`}>
               <Flex className={`items-center gap-2`}>
               <IoIosClock className='text-[15px] text-hash' />
               <span  className='font-inter font-medium text-[15px] text-hash'>5 Jan, 2022</span>
               </Flex>
               <div className='w-[2px] h-[10px] bg-[#D99374] rounded-[5px]'></div>
                <Flex className={`items-center gap-2`}>
               <ImFire className='text-[15px] text-hash' />
               <span  className='font-inter font-medium text-[15px] text-hash'>1.5K View</span>
               </Flex>
                <div className='w-[2px] h-[10px] bg-[#D99374] rounded-[5px]'></div>
                 <Flex className={`items-center gap-2`}>
               <AiOutlineComment className='text-[15px] text-hash' />
               <span  className='font-inter font-medium text-[15px] text-hash'>450 Comment</span>
               </Flex>
              </Flex>
              {/* icons */}
              <h1 className='font-prompt font-semibold text-[26px] lg:text-[52px] leading-[70px] text-center'>Our Begin Now To Beingonl What Are Yourmoi Will Be own.</h1>
              <Flex className={`items-center gap-[10px]`}>
                <img className='w-[30px]' src={user} alt="" />
                <span className='font-inter font-medium text-[15px]'>By<Link className='underline text-main'> Cooper Jogan</Link></span>
              </Flex>
            </Flex>
             {/* header */}
             <img className='w-full' src={img} alt="" />
             <p className='font-inter font-normal text-[18px] text-[#66707E] leading-[38px] my-6'>
              <span className='font-prompt font-medium text-[26px] lg:text-[75px] text-black'>N</span>
              Suspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum ante ypsumi primis inaetahsjanl faucibus orci luctus etenjot ultrices posuere cubilia curae; Curabitur.
              urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue eget porta. Inei odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamus urna worlda mauris, faucibus at egestas quis, fermentum egetonav neque. Duis pharetra lectus nec risusonl pellentesque, vitae aliquet nisi dapibus. Sed volutpat mi velit, ateng maximus est eleifend accui Fusce porttitor ex arcu. Phasellus viverra lorem a nibh placerat tincidunt.bolgotai Aliquam andit rutrum elementum urna, vel fringilla tellus varius ut. Morbi non velit odio.
             </p>
             <p className='font-normal font-prompt text-[22px] text-hash text-center my-10 leading-[45px] w-full lg:w-[830px] mx-auto'>"I work with Alguneb Johnl on many projects, he always toldagona exceeds my expectations with his quality work and fastestopa tope service, very smooth and simple communication."	</p>
             <h1 className='font-prompt font-medium text-[24px] lg:text-[30px] text-center my-6'>Leslie Alexander</h1>
             <p className='font-inter font-normal text-[18px] text-[#66707E] leading-[38px] my-6'>
             urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue eget porta. Inei odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamus urna worlda mauris, faucibus at egestas quis, fermentum egetonav neque. Duis pharetra lectus nec risusonl pellentesque, vitae aliquet nisi dapibus. Sed volutpat mi velit, ateng maximus est eleifend accui Fusce porttitor ex arcu. Phasellus viverra lorem a nibh placerat tincidunt.bolgotai Aliquam andit rutrum elementum urna, vel fringilla tellus varius ut. Morbi non velit odio.
             </p>
             <PostViewSlider/>
             <Flex className={`items-center justify-between flex-col md:flex-row gap-4 lg:gap-0 mt-20 mb-8`}>
              <Flex className={`items-center gap-2`}>
                <h4 className='font-prompt font-normal text-[12px] md:text-[15px] text-hash'><span className='text-main'>#</span> Artist</h4>
                <h4 className='font-prompt font-normal text-[12px] md:text-[15px] text-hash'><span className='text-main'>#</span> Portfolio</h4>
                 <h4 className='font-prompt font-normal text-[12px] md:text-[15px] text-hash'><span className='text-main'>#</span> Crypto</h4>
                  <h4 className='font-prompt font-normal text-[12px] md:text-[15px] text-hash'><span className='text-main'>#</span> Digital Token</h4>
              </Flex>
              <Flex className={`items-center gap-3`}>
                <span className='font-prompt font-semibold text-[20px]'>Share On:</span>
                <FaFacebookF className='text-[18px] text-hash hover:text-main duration-100' />
                <BsTwitter className='text-[18px] text-hash hover:text-main duration-100' />
                <FaPinterestP className='text-[18px] text-hash hover:text-main duration-100' />
                <LuInstagram className='text-[18px] text-hash hover:text-main duration-100' />
              </Flex>
             </Flex>
             <div className='py-[35px] border-b border-t border-secondary'>
              <h1 className='font-normal font-prompt text-[20px] text-hash lg:w-[430px] w-full mx-auto text-center'>The rise of legends for thisi work hard & heard hard. Egestasoni eget.</h1>
             </div>
             <Flex className={`my-[100px] flex-col w-full lg:w-[880px] gap-20`}>
              <h1 className='font-prompt font-normal text-[28px]'>2 Comment</h1>
              <Flex className={`w-full items-center gap-5 flex-col md:flex-row`}>
                <img className='w-[120px] mx-auto' src={user} alt="" />
                <Flex className={`flex-col gap-5`}>
                  <h1 className='font-prompt font-medium text-[22px]'>Polard Girdet</h1>
                  <p className='font-inter font-normal text-[18px] text-hash'>odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamusut urna worlda mauris, faucibus at egestas quis, fermentum egetonav neque. Duisonajt pharetra lectus nec risusonl</p>
                  <button className='py-[14px] px-[30px] border border-main w-[126px] flex items-center gap-2 font-prompt font-normal text-[16px]'>
                  <HiOutlineReply /> Reply
                  </button>
                </Flex>
              </Flex>
              <Flex className={`w-full items-center gap-5 flex-col md:flex-row`}>
                <img className='w-[120px] mx-auto' src={user} alt="" />
                <Flex className={`flex-col gap-5`}>
                  <h1 className='font-prompt font-medium text-[22px]'>Polard Girdet</h1>
                  <p className='font-inter font-normal text-[18px] text-hash'>odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamusut urna worlda mauris, faucibus at egestas quis, fermentum egetonav neque. Duisonajt pharetra lectus nec risusonl</p>
                  <button className='py-[14px] px-[30px] border border-main w-[126px] flex items-center gap-2 font-prompt font-normal text-[16px]'>
                  <HiOutlineReply /> Reply
                  </button>
                </Flex>
              </Flex>
             </Flex>
             <Flex className={`my-[100px] flex-col w-full lg:w-[880px] gap-8 lg:gap-20`}>
             <h1 className='font-prompt font-normal text-[28px]'>Leave A Comment</h1>
             <input className='py-[25px] px-[25px] w-full border border-secondary rounded-[5px] ' placeholder='Enter your name' type="text" />
             <Flex className={`items-center gap-4 flex-col lg:flex-row`}>
             <input className='py-[25px] px-[25px] w-full lg:w-[425px] border border-secondary rounded-[5px] ' placeholder='Enter your email' type="text" />
             <input className='py-[25px] px-[25px] w-full lg:w-[425px] border border-secondary rounded-[5px] ' placeholder='Subject' type="text" />
             </Flex>
             <input className='w-full border border-secondary rounded-[5px] px-[25px] pt-[25px] pb-[115px]' placeholder='Your message' type="text" name="" id="" />
             <button className='font-prompt font-semibold text-[18px] text-white bg-[#FF4C60] py-5 px-[25px] rounded-lg w-[210px]'>
             Post a Comment
             </button>
             </Flex>
        </Container>
    </section>
  )
}

export default PostView