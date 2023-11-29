import React from "react";

import { Text } from "components";

const LoginPagePage = () => {
  return (
    <>
      <div className="bg-indigo-800 flex flex-col font-justanotherhand gap-[34px] items-center justify-end mx-auto p-[214px] md:px-10 sm:px-5 w-full">
        <Text
          className="bg-clip-text bg-gradient  mt-[69px] md:text-5xl text-[200.49px] text-center text-transparent"
          size="txtJustAnotherHandRegular20049"
        >
          <>
            TENDA
            <br />
            BIRU
          </>
        </Text>
        <div className="bg-white-A700 border-[7px] border-black-900 border-solid flex flex-col font-alata items-start justify-start max-w-[947px] mx-auto p-[35px] md:px-5 rounded-[54px] shadow-bs w-full">
          <div className="flex flex-col gap-12 justify-start mb-[3px] ml-5 md:ml-[0] w-[87%] md:w-full">
            <Text
              className="md:ml-[0] ml-[338px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-shadow-ts"
              size="txtAlataRegular42"
            >
              Masuk
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-1 sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtAlataRegular42"
                >
                  Email
                </Text>
                <div className="bg-white-A700 border-4 border-gray-900 border-solid h-[61px] rounded-[30px] w-[73%]"></div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between mt-[49px] w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtAlataRegular42"
                >
                  Password
                </Text>
                <div className="bg-white-A700 border-4 border-gray-900 border-solid h-[61px] rounded-[30px] w-[73%]"></div>
              </div>
              <div className="h-[47px] md:h-[81px] md:ml-[0] ml-[311px] mt-[35px] relative w-[24%]">
                <div className="absolute bg-blue-300 h-[46px] inset-[0] justify-center m-auto rounded-[22px] shadow-bs1 w-full"></div>
                <Text
                  className="absolute h-max inset-y-[0] left-[15%] my-auto sm:text-[29px] md:text-[31px] text-[33px] text-black-900"
                  size="txtAlataRegular33"
                >
                  LOGIN
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
