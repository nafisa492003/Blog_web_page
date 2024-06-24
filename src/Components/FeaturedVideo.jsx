import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Title from "./Title";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image from "../assets/Image.png";
import { MdOutlinePlayCircle } from "react-icons/md";
const FeaturedVideo = () => {
  return (
    <section className="my-[100px]">
      <Container>
        {/* title */}
        <Flex className={`items-center justify-between mb-[60px]`}>
          <Title title="Featured Video" subtitle="Video Post" />
          <Flex className={`items-center gap-1`}>
            <h5 className="font-prompt font-medium text-[18px] text-main">
              <Link>Explore All</Link>
            </h5>
            <BsArrowUpRightCircle className="text-[20px] text-main" />
          </Flex>
        </Flex>
        {/* title */}
        <Flex className={`flex-col lg:flex-row gap-[30px]`}>
          {/* 1st part */}
          <div className="w-full mx-auto lg:w-7/12">
            <div className="w-full">
              {/* img part */}
              <div className="relative w-full">
                <img className="w-full" src={Image} alt="" />
                <MdOutlinePlayCircle className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[80px] text-white" />
              </div>
              {/* img part */}
              <div>
                
              </div>
            </div>
          </div>
          {/* 1st part */}
          {/* 2nd part */}
          <div className="w-full mx-auto lg:w-5/12"></div>
          {/* 2nd part */}
        </Flex>
      </Container>
    </section>
  );
};

export default FeaturedVideo;
