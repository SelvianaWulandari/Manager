import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const OrderOnePage = () => {
  const [frame137value, setFrame137value] = React.useState("");

  return (
    <>
      <div className="bg-indigo-800 font-inter h-[1366px] mx-auto relative w-full">
        <div className="md:h-[235px] h-[95px] ml-[210px] mt-[140px] md:px-5 w-[13%]">
          <Text
            className="m-auto md:text-5xl text-[78px] text-white-A700"
            size="txtInterSemiBold78"
          >
            Staff
          </Text>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[78px] text-white-A700 w-max"
            size="txtInterSemiBold78"
          >
            Staff
          </Text>
        </div>
        <div className="absolute md:h-[1260px] h-[1366px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[188px] bg-black-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto">
            <Text
              className="ml-3.5 md:ml-[0] mr-[43px] mt-12 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtInterSemiBold25"
            >
              Navigation
            </Text>
            <div className="md:h-[1172px] h-[255px] mb-[923px] mr-[22px] relative w-[88%]">
              <Img
                className="absolute h-9 inset-x-[0] mx-auto object-cover rounded-[18px] top-[31%] w-full"
                src="images/img_tandatempat_36x165.png"
                alt="tandatempat"
              />
              <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-end left-[7%] my-auto pt-[38px] w-[73%]">
                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[3px] pr-[3px] w-[97%] md:w-full">
                  <Img className="h-6" src="images/img_sort.svg" alt="home" />
                  <Text
                    className="ml-0.5 text-[15px] text-white-A700"
                    size="txtInterSemiBold15WhiteA700"
                  >
                    DashBoard
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[3px] mt-[19px] md:pr-10 sm:pr-5 pr-[46px] w-[97%] md:w-full">
                  <Img
                    className="h-6"
                    src="images/img_user_black_900.svg"
                    alt="lock"
                  />
                  <Text
                    className="ml-0.5 text-[15px] text-black-900"
                    size="txtInterSemiBold15Black900"
                  >
                    Staff
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[3px] mt-[13px] pr-10 sm:pr-5 w-[97%] md:w-full">
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
                <div className="flex mt-2.5 relative w-[85%]">
                  <Img
                    className="h-7 my-auto object-cover w-[34%]"
                    src="images/img_ifikasi64.png"
                    alt="ifikasiSixtyFour"
                  />
                  <Text
                    className="ml-[-1px] my-auto text-[15px] text-white-A700 z-[1]"
                    size="txtInterSemiBold15WhiteA700"
                  >
                    Pemasok
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start ml-1 md:ml-[0] mt-[11px] sm:pr-5 pr-[33px] w-[97%] md:w-full">
                  <Img
                    className="h-6"
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
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
              <div className="flex flex-col font-inter items-end justify-start md:ml-[0] ml-[396px] w-[54%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                  <Input
                    name="frame137"
                    placeholder="Search "
                    value={frame137value}
                    onChange={(e) => setFrame137value(e)}
                    className="font-semibold leading-[normal] p-0 placeholder:text-black-900 sm:px-5 text-base text-black-900 text-left w-full"
                    wrapClassName="bg-white-A700 border border-black-900 border-solid flex sm:flex-1 mb-[3px] sm:mt-0 mt-[34px] pl-8 pr-[35px] py-1.5 rounded-[18px] sm:w-full"
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
          <div className="absolute bg-black-900_01 flex flex-col font-inter items-center justify-end py-[18px] right-[3%] top-[26%] w-[81%]">
            <div className="flex flex-col justify-start mt-[17px] w-full">
              <Text
                className="md:ml-[0] ml-[13px] text-white-A700 text-xl"
                size="txtInterSemiBold20"
              >
                List Staff
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[30px] mt-[26px] w-[87%] md:w-full">
                <Text
                  className="md:mt-0 my-[5px] sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtInterSemiBold23"
                >
                  Profile
                </Text>
                <Text
                  className="mb-3 md:ml-[0] ml-[234px] sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtInterSemiBold23"
                >
                  Nama
                </Text>
                <Text
                  className="md:ml-[0] ml-[299px] md:mt-0 my-[5px] sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtInterSemiBold23"
                >
                  Email
                </Text>
                <Text
                  className="md:ml-[0] ml-[278px] md:mt-0 mt-3 sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtInterSemiBold23"
                >
                  Job
                </Text>
              </div>
              <div className="flex flex-col gap-[47px] items-start justify-end mt-[3px] pt-[21px] sm:px-5 px-[21px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[7px] w-[93%] md:w-full">
                  <Img
                    className="h-[73px] sm:h-auto rounded-[50%] w-[8%] md:w-full"
                    src="images/img_image1.png"
                    alt="imageOne_One"
                  />
                  <Text
                    className="md:ml-[0] ml-[239px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterSemiBold22"
                  >
                    Selvi
                  </Text>
                  <Text
                    className="ml-60 md:ml-[0] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterSemiBold22"
                  >
                    selvi03@gmail.com
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[179px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterSemiBold22"
                  >
                    Manajer
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-[27.5px] ml-0.5 md:ml-[0] w-[94%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                    <Img
                      className="h-[75px] md:h-auto rounded-[50%] w-[76px]"
                      src="images/img_ellipse15.png"
                      alt="ellipseSeventeen"
                    />
                    <Text
                      className="md:ml-[0] ml-[245px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      Firza
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[232px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      firzaekaputra21@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[106px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      Koki
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-white-A700 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[75px] md:h-auto rounded-[50%] w-[76px]"
                      src="images/img_ellipse16.png"
                      alt="ellipseEighteen"
                    />
                    <Text
                      className="md:ml-[0] ml-[241px] md:mt-0 mt-[38px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      Tyrone
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[218px] md:mt-0 mt-8 text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      tyrone001@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[145px] md:mt-0 mt-[29px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      Pemasok
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderOnePage;
