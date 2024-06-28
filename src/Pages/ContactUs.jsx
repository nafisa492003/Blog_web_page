import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
const ContactUs = () => {
  return (
    <section>
      <Breadcrumb title="Contact Us" />
      <Container>
        <Flex className={`lg:my-[100px] my-10 flex-col lg:flex-row gap-10 items-center`}>
          <div className="w-full lg:w-5/12 py-[55px] lg:px-[70px] px-10 border border-secondary rounded-[20px] flex flex-col gap-8">
            <h1 className="font-medium font-prompt text-[26px] lg:text-[35px]">
              Contact Us
            </h1>
            <p className="font-inter font-normal text-[14px] text-hash">
              Morbi quis elementum ex, id commodo odio. In maximus, augue
              europea vestibulum gomat.
            </p>
            <Flex className={`items-center justify-between`}>
              <FaFacebookF className="text-[18px] text-hash hover:text-main duration-100" />
              <BsTwitter className="text-[18px] text-hash hover:text-main duration-100" />
              <FaPinterestP className="text-[18px] text-hash hover:text-main duration-100" />
              <LuInstagram className="text-[18px] text-hash hover:text-main duration-100" />
            </Flex>
            <h1 className="font-prompt font-normal text-[16px] text-hash">
              +012-3456-789
            </h1>
            <h1 className="font-prompt font-normal text-[16px] text-hash">
              +012-3456-789102
            </h1>
            <h1 className="font-prompt font-normal text-[16px] text-hash">
              info@example.com
            </h1>
            <h1 className="font-prompt font-normal text-[16px] text-hash">
              support@example.com
            </h1>
          </div>
          <div className="w-full lg:w-7/12">
          <Flex className={`my-[100px] flex-col w-full gap-8`}>
             <h1 className='font-prompt font-normal text-[28px]'>Have Any Questions</h1>
             <input className='py-[25px] px-[25px] w-full border border-secondary rounded-[5px] ' placeholder='Enter your name' type="text" />
             <Flex className={`items-center gap-4 flex-col lg:flex-row`}>
             <input className='py-[25px] px-[25px] w-full lg:w-[425px] border border-secondary rounded-[5px] ' placeholder='Enter your email' type="text" />
             <input className='py-[25px] px-[25px] w-full lg:w-[425px] border border-secondary rounded-[5px] ' placeholder='Subject' type="text" />
             </Flex>
             <input className='w-full border border-secondary rounded-[5px] px-[25px] pt-[25px] pb-[115px]' placeholder='Your message' type="text" name="" id="" />
             <button className='font-prompt font-semibold text-[18px] text-white bg-[#FF4C60] py-5 px-[25px] rounded-lg w-[210px]'>
             Send Message
             </button>
             </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ContactUs;
