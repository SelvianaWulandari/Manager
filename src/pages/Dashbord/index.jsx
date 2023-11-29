import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Input, Line, List, ReactTable, Text } from "components";
import DashbordColumnTwo from "components/DashbordColumnTwo";

import { CloseSVG } from "../../assets/images";

const DashbordPage = () => {
  const tableData = React.useRef([
    {
      gambar: "images/img_ellipse10.png",
      bahan: "Ayam",
      persediaankg: "50",
      status: "50",
    },
    {
      gambar: "images/img_ellipse11.png",
      bahan: "Beras",
      persediaankg: "60",
      status: "50",
    },
    {
      gambar: "images/img_ellipse12.png",
      bahan: "Minyak",
      persediaankg: "20",
      status: "20",
    },
    {
      gambar: "images/img_ellipse13.png",
      bahan: "Bawang ",
      persediaankg: "Bawang ",
      status: "50",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("gambar", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-1">
            <Img
              className="h-[63px] md:h-auto ml-[33px] mt-3 rounded-[50%] w-[24%]"
              alt="ellipseTen"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[296px] sm:pl-5 pl-[35px] pt-[9px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
            size="txtInterSemiBold2149"
          >
            Gambar
          </Text>
        ),
      }),
      tableColumnHelper.accessor("bahan", {
        cell: (info) => (
          <Text
            className="pb-[23px] pl-[5px] pt-[35px] text-[17.19px] text-white-A700"
            size="txtInterSemiBold1719"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[305px] py-1 sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
            size="txtInterSemiBold2149"
          >
            Bahan
          </Text>
        ),
      }),
      tableColumnHelper.accessor("persediaankg", {
        cell: (info) => (
          <Text
            className="pl-[-332px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
            size="txtInterSemiBold2149"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[332px] pb-[7px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
            size="txtInterSemiBold2149"
          >
            Persediaan/kg
          </Text>
        ),
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="pl-[-332px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
            size="txtInterSemiBold2149"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[309px] pb-[9px] pl-[18px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
            size="txtInterSemiBold2149"
          >
            Status
          </Text>
        ),
      }),
    ];
  }, []);

  const [frame137value, setFrame137value] = React.useState("");

  return (
    <>
      <div className="bg-indigo-800 font-inter h-[1366px] mx-auto relative w-full">
        <Text
          className="ml-[210px] mt-[141px] md:text-5xl text-[78px] text-white-A700"
          size="txtInterSemiBold78"
        >
          Dashbord
        </Text>
        <div className="absolute sm:h-[1260px] h-[1366px] md:h-[1569px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[188px] bg-black-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto">
            <Text
              className="ml-3.5 md:ml-[0] mr-[43px] mt-12 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtInterSemiBold25"
            >
              Navigation
            </Text>
            <div className="md:h-[1171px] h-[255px] mb-[923px] mr-[22px] relative w-[88%]">
              <Img
                className="absolute h-9 inset-x-[0] mx-auto object-cover rounded-[18px] top-[13%] w-full"
                src="images/img_tandatempat.png"
                alt="tandatempat"
              />
              <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-end left-[7%] my-auto py-[13px] w-[73%]">
                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[3px] mt-6 pr-[3px] w-[97%] md:w-full">
                  <Img className="h-6" src="images/img_home.svg" alt="home" />
                  <Text
                    className="ml-0.5 text-[15px] text-black-900_02"
                    size="txtInterSemiBold15"
                  >
                    DashBoard
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[3px] mt-[19px] md:pr-10 sm:pr-5 pr-[46px] w-[97%] md:w-full">
                  <Img className="h-6" src="images/img_user.svg" alt="lock" />
                  <Text
                    className="ml-0.5 text-[15px] text-white-A700"
                    size="txtInterSemiBold15WhiteA700"
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
                <div className="h-7 md:h-9 ml-0.5 md:ml-[0] mt-2 relative w-[84%]">
                  <Text
                    className="absolute h-max inset-y-[0] my-auto right-[0] text-[15px] text-white-A700"
                    size="txtInterSemiBold15WhiteA700"
                  >
                    Pemasok
                  </Text>
                  <Img
                    className="absolute h-7 inset-y-[0] left-[0] my-auto object-cover w-[35%]"
                    src="images/img_ifikasi64.png"
                    alt="ifikasiSixtyFour"
                  />
                </div>
                <div className="flex flex-row items-start justify-start ml-1 md:ml-[0] sm:pr-5 pr-[33px] w-[97%] md:w-full">
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
                wrapClassName="bg-white-A700 border border-black-900 border-solid flex md:ml-[0] ml-[381px] md:mt-0 my-[41px] pl-8 pr-[35px] py-1.5 rounded-[18px] w-[21%] md:w-full"
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
              <div className="flex flex-col font-inter items-end justify-start md:ml-[0] ml-[392px] w-[6%] md:w-full">
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
          <div className="absolute bottom-[5%] flex flex-col md:gap-10 gap-[78px] items-center justify-start right-[3%] w-[83%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[97%] md:w-full">
              <div className="bg-black-900_01 flex flex-col items-center justify-end md:mt-0 mt-[49px] py-4 w-[54%] md:w-full">
                <div className="flex flex-col gap-7 justify-start mt-0.5 w-full">
                  <Text
                    className="md:ml-[0] ml-[7px] sm:text-[16.64px] md:text-[18.64px] text-[20.64px] text-white-A700"
                    size="txtInterSemiBold2064"
                  >
                    List Staff
                  </Text>
                  <div className="flex flex-col justify-start w-full">
                    <div className="sm:h-[168px] h-[27px] relative w-full">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[3%] my-auto w-[89%]">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <Text
                            className="sm:text-[18.18px] md:text-[20.18px] text-[22.18px] text-white-A700"
                            size="txtInterSemiBold2218"
                          >
                            Profile
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[92px] sm:text-[18.18px] md:text-[20.18px] text-[22.18px] text-white-A700"
                            size="txtInterSemiBold2218"
                          >
                            Nama
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[129px] sm:text-[18.18px] md:text-[20.18px] text-[22.18px] text-white-A700"
                            size="txtInterSemiBold2218"
                          >
                            Email
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[122px] sm:text-[18.18px] md:text-[20.18px] text-[22.18px] text-white-A700"
                            size="txtInterSemiBold2218"
                          >
                            Job
                          </Text>
                        </div>
                      </div>
                      <Line className="absolute bg-white-A700 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[17px] mt-[13px] w-[91%] md:w-full">
                      <Img
                        className="h-[73px] md:h-auto rounded-[50%] w-[14%] sm:w-full"
                        src="images/img_image1.png"
                        alt="imageOne_One"
                      />
                      <Text
                        className="sm:ml-[0] ml-[89px] text-[16.51px] text-white-A700"
                        size="txtInterSemiBold1651"
                      >
                        Selvi
                      </Text>
                      <Text
                        className="ml-20 sm:ml-[0] text-[16.51px] text-white-A700"
                        size="txtInterSemiBold1651"
                      >
                        selvi03@gmail.com
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[75px] text-[16.51px] text-white-A700"
                        size="txtInterSemiBold1651"
                      >
                        Manajer
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[23px] items-center ml-2.5 md:ml-[0] mt-[39px] w-[93%]"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[97%] md:w-full">
                        <Img
                          className="h-[75px] md:h-auto rounded-[50%] w-[76px]"
                          src="images/img_ellipse15.png"
                          alt="ellipseFifteen"
                        />
                        <Text
                          className="sm:ml-[0] ml-[100px] sm:mt-0 mt-[35px] text-[16.51px] text-white-A700"
                          size="txtInterSemiBold1651"
                        >
                          Firza
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[79px] sm:mt-0 mt-9 text-[16.51px] text-white-A700"
                          size="txtInterSemiBold1651"
                        >
                          firzaekaputra21@gmail.com
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[27px] sm:mt-0 mt-[35px] text-[16.51px] text-white-A700"
                          size="txtInterSemiBold1651"
                        >
                          Koki
                        </Text>
                      </div>
                      <Line className="self-center h-px bg-white-A700 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Img
                          className="h-[75px] md:h-auto rounded-[50%] w-[76px]"
                          src="images/img_ellipse16.png"
                          alt="ellipseSixteen"
                        />
                        <Text
                          className="md:ml-[0] ml-[91px] md:mt-0 mt-[38px] text-[16.51px] text-white-A700"
                          size="txtInterSemiBold1651"
                        >
                          Tyrone
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[66px] md:mt-0 mt-9 text-[16.51px] text-white-A700"
                          size="txtInterSemiBold1651"
                        >
                          tyrone001@gmail.com
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[58px] md:mt-0 mt-10 text-[16.51px] text-white-A700"
                          size="txtInterSemiBold1651"
                        >
                          Pemasok
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <DashbordColumnTwo className="bg-black-900_01 flex flex-col items-center justify-end pt-[22px] w-[33%] md:w-full" />
            </div>
            <div className="bg-black-900_01 flex flex-col items-center justify-end py-[15px] w-full">
              <div className="flex flex-col gap-[21px] justify-start mt-1.5 w-full">
                <Text
                  className="md:ml-[0] ml-[23px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
                  size="txtInterSemiBold2149"
                >
                  List Persediaan
                </Text>
                <div className="overflow-auto w-full">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={"border-b border-white-A700"}
                    headerClass="border-b border-white-A700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashbordPage;
