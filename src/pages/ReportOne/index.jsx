import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ReportOnePage = () => {
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
          <div className="md:h-[1173px] h-[255px] mb-[923px] mr-[15px] relative w-[92%]">
            <Img
              className="absolute bottom-[13%] h-9 inset-x-[0] mx-auto object-cover rounded-[18px] w-full"
              src="images/img_tandatempat_36x172.png"
              alt="tandatempat"
            />
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[6%] my-auto pt-[38px] w-[69%]">
              <div className="flex flex-row items-center justify-end pr-[3px] w-[98%] md:w-full">
                <Img className="h-6" src="images/img_sort.svg" alt="home" />
                <Text
                  className="ml-0.5 text-[15px] text-white-A700"
                  size="txtInterSemiBold15WhiteA700"
                >
                  DashBoard
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start mt-[19px] md:pr-10 sm:pr-5 pr-[46px] w-[98%] md:w-full">
                <Img className="h-6" src="images/img_user.svg" alt="lock" />
                <Text
                  className="ml-0.5 text-[15px] text-white-A700"
                  size="txtInterSemiBold15WhiteA700"
                >
                  Staff
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start mt-[13px] pr-10 sm:pr-5 w-[98%] md:w-full">
                <Img className="h-6" src="images/img_volume.svg" alt="user" />
                <Text
                  className="ml-0.5 text-[15px] text-white-A700"
                  size="txtInterSemiBold15WhiteA700"
                >
                  Stock
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start mt-2.5 pr-10 sm:pr-5 w-[98%] md:w-full">
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
              <div className="h-7 md:h-[38px] mt-2.5 relative w-[99%]">
                <div className="absolute flex flex-col inset-x-[0] items-end justify-end mx-auto p-0.5 top-[0] w-full">
                  <Text
                    className="mr-[13px] text-[15px] text-black-900"
                    size="txtInterSemiBold15Black900"
                  >
                    Pemasok
                  </Text>
                </div>
                <Img
                  className="absolute h-7 inset-y-[0] left-[0] my-auto object-cover w-[30%]"
                  src="images/img_ifikasi64.png"
                  alt="ifikasiSixtyThree"
                />
              </div>
              <div className="flex flex-row items-start justify-start mt-[19px] sm:pr-5 pr-[33px] w-[98%] md:w-full">
                <Img
                  className="h-[17px]"
                  src="images/img_frame138.svg"
                  alt="cursor"
                />
                <Text
                  className="ml-0.5 mt-1 text-[15px] text-white-A700"
                  size="txtInterSemiBold15WhiteA700"
                >
                  Report
                </Text>
              </div>
            </div>
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
                  wrapClassName="bg-white-A700 border border-black-900 border-solid flex sm:flex-1 mb-1.5 sm:mt-0 mt-[31px] pl-8 pr-[35px] py-1.5 rounded-[18px] sm:w-full"
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
        <div className="absolute flex flex-col font-inter gap-[49px] h-max inset-y-[0] justify-start my-auto md:px-5 right-[10%] w-3/4">
          <Text
            className="md:text-5xl text-[66px] text-white-A700"
            size="txtInterSemiBold66"
          >
            List Pemasok
          </Text>
          <div className="md:h-[3391px] h-[934px] md:ml-[0] ml-[47px] relative w-[96%] md:w-full">
            <div className="md:h-[3391px] h-[934px] m-auto w-full">
              <div className="absolute bg-black-900_01 border-2 border-blue-300 border-solid flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[89%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[76px] items-end justify-start md:mt-0 mt-[25px] w-[5%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtInterSemiBold30"
                    >
                      No
                    </Text>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="ml-0.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtInterSemiBold30"
                      >
                        1.
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] mt-[93px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtInterSemiBold30"
                      >
                        2.
                      </Text>
                      <Text
                        className="mt-[213px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                        size="txtInterSemiBold27"
                      >
                        4.
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700 md:h-1 h-[927px] ml-5 md:ml-[0] md:mt-0 mt-1 w-1 md:w-full" />
                  <div className="flex flex-col justify-start ml-6 md:ml-[0] md:mt-0 mt-6 w-[63%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[13px] w-[91%] md:w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtInterSemiBold30"
                      >
                        Perusahaan
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtInterSemiBold30"
                      >
                        Nama/No.Telp
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-7 md:ml-[0] mt-[70px] w-[96%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtInterSemiBold30"
                      >
                        PT. Unggas
                      </Text>
                      <Text
                        className="mb-[9px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtInterSemiBold30"
                      >
                        Joni/0851679802
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[94px] w-full">
                      <Text
                        className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                        size="txtInterSemiBold27"
                      >
                        PT. Makmur Jaya
                      </Text>
                      <Text
                        className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                        size="txtInterSemiBold27"
                      >
                        Shinta/0852970013
                      </Text>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[87px] items-center justify-start md:ml-[0] ml-[23px] mt-[90px] w-[94%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                          size="txtInterSemiBold27"
                        >
                          PT. Indofood
                        </Text>
                        <Text
                          className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                          size="txtInterSemiBold27"
                        >
                          Hardi/0895970213
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                        <Text
                          className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                          size="txtInterSemiBold27"
                        >
                          PT. Bawang
                        </Text>
                        <Text
                          className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                          size="txtInterSemiBold27"
                        >
                          Jodi/0891870013
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-white-A700 h-px md:ml-[0] ml-[55px] rotate-[-89deg] w-[1%]" />
                  <div className="flex flex-col md:gap-10 gap-[84px] items-end justify-start md:ml-[0] ml-[83px] md:mt-0 mt-[21px] w-[14%] md:w-full">
                    <Text
                      className="mr-[3px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtInterSemiBold30"
                    >
                      Kategori
                    </Text>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtInterSemiBold30"
                      >
                        Ayam
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[3px] mt-[94px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                        size="txtInterSemiBold27"
                      >
                        Beras
                      </Text>
                      <Text
                        className="mt-[89px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                        size="txtInterSemiBold27"
                      >
                        Minyak
                      </Text>
                      <Text
                        className="mt-[87px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                        size="txtInterSemiBold27"
                      >
                        Bawang
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="absolute bg-white-A700 h-[934px] inset-y-[0] left-[33%] my-auto w-0.5" />
            </div>
            <Line className="absolute bg-white-A700 h-px inset-x-[0] mx-auto top-[8%] w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportOnePage;
