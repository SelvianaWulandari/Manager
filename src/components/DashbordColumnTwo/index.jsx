import React from "react";

import { Line, Text } from "components";

const DashbordColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[59px] items-start justify-start w-[94%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterSemiBold24"
              >
                {props?.charttype}
              </Text>
              <div className="flex flex-row items-end justify-between md:ml-[0] ml-[3px] w-full">
                <div className="bg-white-A700 h-[77px] mt-[299px] w-[17%]"></div>
                <div className="bg-white-A700 h-[184px] mt-48 w-[21%]"></div>
                <div className="bg-white-A700 h-[376px] w-[24%]"></div>
                <div className="bg-white-A700 h-[287px] mt-[89px] w-[24%]"></div>
              </div>
            </div>
            <Line className="bg-blue_gray-700 h-px w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

DashbordColumnTwo.defaultProps = { charttype: "Bar Chart" };

export default DashbordColumnTwo;
