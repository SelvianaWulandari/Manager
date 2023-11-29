import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";
import OrderColumn from "components/OrderColumn";

import { CloseSVG } from "../../assets/images";

const OrderPage = () => {
  const [frame137value, setFrame137value] = React.useState("");

  return (
    <>
      <div className="bg-indigo-800 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="sm:h-[1260px] h-[1366px] md:h-[1724px] md:px-5 relative w-full">
          <Text
            className="ml-[210px] mt-[141px] md:text-5xl text-[78px] text-white-A700"
            size="txtInterSemiBold78"
          >
            Order
          </Text>
          <div className="absolute sm:h-[1260px] h-[1366px] md:h-[1724px] inset-[0] justify-center m-auto w-full">
            <Sidebar className="!sticky !w-[188px] bg-black-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto">
              <Text
                className="ml-3.5 md:ml-[0] mr-[43px] mt-12 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25"
              >
                Navigation
              </Text>
              <div className="md:h-[1168px] h-[260px] mb-[918px] mr-5 relative w-[89%]">
                <div className="absolute md:h-[250px] h-[255px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="absolute bottom-[27%] h-9 inset-x-[0] mx-auto object-cover rounded-[18px] w-full"
                    src="images/img_tandatempat_36x167.png"
                    alt="tandatempat"
                  />
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[7%] my-auto py-[29px] w-[72%]">
                    <div className="flex flex-row items-center justify-end mt-[9px] pr-[3px] w-[97%] md:w-full">
                      <Img
                        className="h-6"
                        src="images/img_sort.svg"
                        alt="home"
                      />
                      <Text
                        className="ml-0.5 text-[15px] text-white-A700"
                        size="txtInterSemiBold15WhiteA700"
                      >
                        DashBoard
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[19px] md:pr-10 sm:pr-5 pr-[46px] w-[97%] md:w-full">
                      <Img
                        className="h-6"
                        src="images/img_user.svg"
                        alt="lock"
                      />
                      <Text
                        className="ml-0.5 text-[15px] text-white-A700"
                        size="txtInterSemiBold15WhiteA700"
                      >
                        Staff
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[13px] pr-10 sm:pr-5 w-[97%] md:w-full">
                      <Img
                        className="h-6"
                        src="images/img_volume.svg"
                        alt="user"
                      />
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
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <Text
                        className="ml-0.5 text-[15px] text-black-900_03"
                        size="txtInterSemiBold15Black90003"
                      >
                        Order
                      </Text>
                    </div>
                    <div className="h-7 md:h-[45px] mt-[17px] relative w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto p-0.5">
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
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-row items-start justify-start left-[9%] sm:pr-5 pr-[33px] w-[69%]">
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
            </Sidebar>
            <div className="absolute bg-black-900_01 flex flex-col inset-x-[0] items-center justify-start mx-auto pt-2.5 px-2.5 top-[0] w-full">
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
                <Input
                  name="frame137"
                  placeholder="Search "
                  value={frame137value}
                  onChange={(e) => setFrame137value(e)}
                  className="font-inter font-semibold leading-[normal] p-0 placeholder:text-black-900 sm:px-5 text-base text-black-900 text-left w-full"
                  wrapClassName="bg-white-A700 border border-black-900 border-solid flex mb-[37px] md:ml-[0] ml-[386px] md:mt-0 mt-[45px] pl-8 pr-[35px] py-1.5 rounded-[18px] w-[21%] md:w-full"
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
                <div className="flex flex-col font-inter items-end justify-start md:ml-[0] ml-[387px] w-[6%] md:w-full">
                  <Img
                    className="h-[73px] md:h-auto rounded-[50%] w-full"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
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
            <div className="absolute bottom-[3%] flex flex-col gap-3.5 items-start justify-start right-[4%] w-[82%]">
              <OrderColumn className="bg-black-900_01 flex flex-col items-center justify-start p-[17px] w-full" />
              <div className="bg-black-900_01 flex flex-col md:gap-10 gap-[60px] items-start justify-start p-[21px] sm:px-5 w-3/5 md:w-full">
                <Text
                  className="sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
                  size="txtInterSemiBold2149"
                >
                  Koki Restock
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start ml-0.5 md:ml-[0] pt-[11px] w-[98%] md:w-full">
                  <div className="flex flex-col gap-[7px] justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[19px] w-[84%] md:w-full">
                      <Text
                        className="mb-1 sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-black-900"
                        size="txtInterSemiBold2149Black900"
                      >
                        No
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[81px] sm:mt-0 mt-[3px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-black-900"
                        size="txtInterSemiBold2031"
                      >
                        Tanggal
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[122px] sm:mt-0 mt-1.5 sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-black-900"
                        size="txtInterSemiBold2031"
                      >
                        Harga
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[146px] sm:mt-0 mt-1 sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-black-900"
                        size="txtInterSemiBold2031"
                      >
                        Aksi
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[16.5px] items-center p-[11px] w-full"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-end justify-start w-[90%] md:w-full">
                        <Text
                          className="mb-[18px] md:mt-0 mt-[21px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-black-900"
                          size="txtInterSemiBold2149Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-[19px] md:ml-[0] ml-[92px] md:mt-0 mt-[27px] text-[16.25px] text-black-900"
                          size="txtInterSemiBold1625"
                        >
                          03-02-2023
                        </Text>
                        <Text
                          className="mb-[18px] md:ml-[0] ml-[102px] md:mt-0 mt-7 text-[16.25px] text-black-900"
                          size="txtInterSemiBold1625"
                        >
                          Rp 2.000.000
                        </Text>
                        <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[69px]">
                          <Text
                            className="bg-green-600 h-[30px] justify-center pt-1 px-3.5 rounded-[15px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-white-A700 w-[99px]"
                            size="txtInterSemiBold2031WhiteA700"
                          >
                            Accept
                          </Text>
                          <Text
                            className="bg-red-900 h-[30px] justify-center px-3.5 py-0.5 rounded-[15px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-white-A700 w-[99px]"
                            size="txtInterSemiBold2031WhiteA700"
                          >
                            Denied
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-blue_gray-700 w-full" />
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full">
                        <Text
                          className="md:mt-0 mt-4 sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-black-900"
                          size="txtInterSemiBold2149Black900"
                        >
                          2
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[88px] md:mt-0 mt-5 text-[16.25px] text-black-900"
                          size="txtInterSemiBold1625"
                        >
                          03-02-2023
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[102px] md:mt-0 mt-[23px] text-[16.25px] text-black-900"
                          size="txtInterSemiBold1625"
                        >
                          Rp 2.250.000
                        </Text>
                        <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[69px]">
                          <Text
                            className="bg-green-600 h-[30px] justify-center pt-1 px-3.5 rounded-[15px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-white-A700 w-[99px]"
                            size="txtInterSemiBold2031WhiteA700"
                          >
                            Accept
                          </Text>
                          <Text
                            className="bg-red-900 h-[30px] justify-center px-3.5 py-0.5 rounded-[15px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-white-A700 w-[99px]"
                            size="txtInterSemiBold2031WhiteA700"
                          >
                            Denied
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <Img
                className="h-[276px] md:h-auto object-cover w-[43%]"
                src="images/img_image2.png"
                alt="imageTwo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
