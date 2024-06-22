import React from "react";
import Flex from "./Flex";
import { ImFire } from "react-icons/im";
const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="font-bold font-prompt md:text-[35px] text-[26px] text-black">
        {title}
      </h1>
      <Flex className={`items-center gap-1 my-4`}>
        <ImFire className="text-[18px] text-main" />
        <h5 className="italic font-medium font-inter text-[18px] text-main">
          {subtitle}
        </h5>
      </Flex>
    </div>
  );
};

export default Title;
