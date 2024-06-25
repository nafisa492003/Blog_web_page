import React from "react";
import ba_bg from "../assets/bg.png";
import Container from "./Container";
import Flex from "./Flex";
import { ImFire } from "react-icons/im";
import { Link } from "react-router-dom";
const BecomeAuther = () => {
  return (
    <section className="my-[100px]">
      <Container>
        <div
          style={{ backgroundImage: `url(${ba_bg})` }}
          className="object-cover py-[80px] bg-no-repeat px-2"
        >
            <Flex className={`items-center justify-center flex-col gap-[30px]`}>
             <Flex className={`items-center gap-2`}>
             <ImFire className="text-[18px] text-main" />
             <h4 className="font-inter font-medium text-[18px] italic text-main">Get Every Update</h4>
             </Flex>
             <h1 className="font-prompt font-bold text-[22px] lg:text-[40px] text-black w-full lg:w-[608px] text-center">Become An Author And Share
             Your Great Stories.</h1>
             <button className="py-[20px] px-[22px] bg-main text-white font-prompt font-medium text-[18px] rounded-[5px]">
                <Link>Become An Author</Link>
             </button>
            </Flex>
        </div>
      </Container>
    </section>
  );
};

export default BecomeAuther;
