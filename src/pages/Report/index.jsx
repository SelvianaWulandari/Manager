import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ReportPage = () => {
  const [frame137value, setFrame137value] = React.useState("");

  return (
    <>
      <div className="bg-indigo-800 font-inter h-[1366px] mx-auto relative w-full">
        <Sidebar className="!sticky !w-[188px] bg-black-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5">
          <Text
            className="ml-3.5 md:ml-[0] mr-[43px] mt-12 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
            size="txtInterSemiBold25"
          >
            Navigation
          </Text>
          <div className="h-[260px] mb-[918px] mr-3.5 relative w-[93%]">
            <div className="flex flex-col items-center justify-end mb-[-31.46px] ml-[11px] mt-auto w-[69%] z-[1]">
              <div className="flex flex-row items-center justify-end mt-9 pr-[3px] w-[97%] md:w-full">
                <Img className="h-6" src="images/img_sort.svg" alt="home" />
                <Text
                  className="ml-0.5 text-[15px] text-white-A700"
                  size="txtInterSemiBold15WhiteA700"
                >
                  DashBoard
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start mt-[19px] md:pr-10 sm:pr-5 pr-[46px] w-[97%] md:w-full">
                <Img className="h-6" src="images/img_user.svg" alt="lock" />
                <Text
                  className="ml-0.5 text-[15px] text-white-A700"
                  size="txtInterSemiBold15WhiteA700"
                >
                  Staff
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start mt-[13px] pr-10 sm:pr-5 w-[97%] md:w-full">
                <Img className="h-6" src="images/img_volume.svg" alt="user" />
                <Text
                  className="ml-0.5 text-[15px] text-white-A700"
                  size="txtInterSemiBold15WhiteA700"
                >
                  Stock
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start mt-2.5 pr-10 sm:pr-5 w-[97%] md:w-full">
                <Img
                  className="h-6"
                  src="images/img_trash.svg"
                  alt="frame138"
                />
                <Text
                  className="ml-0.5 text-[15px] text-white-A700"
                  size="txtInterSemiBold15WhiteA700"
                >
                  Order
                </Text>
              </div>
              <div className="h-7 md:h-[38px] mt-2.5 relative w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto p-0.5">
                  <Text
                    className="mr-[13px] text-[15px] text-white-A700"
                    size="txtInterSemiBold15WhiteA700"
                  >
                    Pemasok
                  </Text>
                </div>
                <Img
                  className="absolute h-7 inset-y-[0] left-[0] my-auto object-cover w-[29%]"
                  src="images/img_ifikasi64.png"
                  alt="ifikasiSixtyFour"
                />
              </div>
              <div className="flex flex-row items-start justify-start mt-2.5 sm:pr-5 pr-[33px] w-[97%] md:w-full">
                <Img
                  className="h-6"
                  src="images/img_arrowup.svg"
                  alt="settings"
                />
                <Text
                  className="ml-0.5 mt-1 text-[15px] text-black-900"
                  size="txtInterSemiBold15Black900"
                >
                  Report
                </Text>
              </div>
            </div>
            <Img
              className="h-9 mt-auto mx-auto object-cover rounded-[18px] w-full"
              src="images/img_tandatempat_36x173.png"
              alt="tandatempat"
            />
          </div>
        </Sidebar>
        <div className="absolute bg-black-900_01 flex flex-col font-justanotherhand inset-x-[0] items-center justify-start mx-auto pt-2.5 px-2.5 top-[0] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 w-full">
            <Text
              className="bg-clip-text bg-gradient  md:mt-0 mt-2.5 md:text-5xl text-[60.49px] text-center text-transparent"
              size="txtJustAnotherHandRegular6049"
            >
              <>
                TENDA
                <br />
                BIRU
              </>
            </Text>
            <Img
              className="h-[38px] md:ml-[0] ml-[42px] md:mt-0 mt-[38px]"
              src="images/img_quillhamburger.svg"
              alt="quillhamburger"
            />
            <div className="flex md:flex-1 flex-col font-inter items-end justify-start md:ml-[0] ml-[381px] w-[55%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Input
                  name="frame137"
                  placeholder="Search "
                  value={frame137value}
                  onChange={(e) => setFrame137value(e)}
                  className="font-semibold leading-[normal] p-0 placeholder:text-black-900 sm:px-5 text-base text-black-900 text-left w-full"
                  wrapClassName="bg-white-A700 border border-black-900 border-solid flex sm:flex-1 mb-[7px] sm:mt-0 mt-[30px] pl-8 pr-[35px] py-1.5 rounded-[18px] sm:w-full"
                  prefix={
                    <Img
                      className="mt-px mb-auto cursor-pointer mr-3"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#000000"
                      className="cursor-pointer my-auto"
                      onClick={() => setFrame137value("")}
                      style={{
                        visibility:
                          frame137value?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={22}
                      width={21}
                      viewBox="0 0 21 22"
                    />
                  }
                ></Input>
                <Img
                  className="h-[73px] md:h-auto rounded-[50%]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
              <Text
                className="text-white-A700 text-xl"
                size="txtInterSemiBold20"
              >
                Admin
              </Text>
            </div>
            <Img
              className="h-[34px] md:ml-[0] ml-[26px] md:mt-0 mt-[42px] w-[35px]"
              src="images/img_mdibell.svg"
              alt="mdibell"
            />
          </div>
        </div>
        <Img
          className="absolute bottom-[3%] h-[1161px] inset-x-[0] mx-auto object-cover w-full"
          src="images/img_image3.png"
          alt="imageThree"
        />
      </div>
    </>
  );
};

export default ReportPage;
