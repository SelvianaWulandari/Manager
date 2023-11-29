import React from "react";

import { Img, Line, List, Text } from "components";

const OrderColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[27px] justify-start mb-3.5 mt-[5px] w-full">
          <Text
            className="sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
            size="txtInterSemiBold2149"
          >
            {props?.orderan}
          </Text>
          <div className="flex flex-col justify-start ml-1.5 md:ml-[0] w-full">
            <div className="md:h-[120px] h-[33px] relative w-full">
              <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-y-[0] items-start justify-start left-[2%] my-auto w-[83%]">
                <div className="flex flex-col items-center justify-start md:mt-0 mt-1 w-[29%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
                      size="txtInterSemiBold2149"
                    >
                      {props?.no}
                    </Text>
                    <Text
                      className="sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
                      size="txtInterSemiBold2149"
                    >
                      {props?.gambar}
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[283px] text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  {props?.bahan}
                </Text>
                <Text
                  className="md:ml-[0] ml-[262px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
                  size="txtInterSemiBold2149"
                >
                  {props?.beratkg}
                </Text>
              </div>
              <Line className="absolute bg-white-A700 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
            </div>
            <List
              className="flex flex-col gap-[17.5px] md:ml-[0] ml-[22px] mt-[13px] w-[83%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Text
                  className="sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
                  size="txtInterSemiBold2149"
                >
                  {props?.orderone}
                </Text>
                <Img
                  className="md:flex-1 h-[63px] sm:h-auto md:ml-[0] ml-[174px] rounded-[50%] w-[8%] md:w-full"
                  src="images/img_ellipse12.png"
                  alt="ellipseTwelve"
                />
                <Text
                  className="md:ml-[0] ml-[296px] text-[17.19px] text-white-A700"
                  size="txtInterSemiBold1719"
                >
                  {props?.minyak}
                </Text>
                <Text
                  className="bg-white-A700 h-9 justify-center md:ml-[0] ml-[262px] md:mt-0 my-[13px] pl-[11px] sm:pr-5 pr-[35px] py-1 rounded-[18px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-black-900 w-[104px]"
                  size="txtInterSemiBold2149Black900"
                >
                  {props?.frameonehundred}
                </Text>
              </div>
              <Line className="self-center h-px bg-white-A700 w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Text
                  className="md:mt-0 mt-2.5 sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-white-A700"
                  size="txtInterSemiBold2149"
                >
                  {props?.ordertwo}
                </Text>
                <Img
                  className="md:flex-1 h-[63px] sm:h-auto md:ml-[0] ml-[171px] rounded-[50%] w-[8%] md:w-full"
                  src="images/img_ellipse13.png"
                  alt="ellipseThirteen"
                />
                <Text
                  className="md:ml-[0] ml-[296px] md:mt-0 mt-[13px] text-[17.19px] text-white-A700"
                  size="txtInterSemiBold1719"
                >
                  {props?.bawang}
                </Text>
                <Text
                  className="bg-white-A700 h-9 justify-center mb-5 md:ml-[0] ml-[255px] md:mt-0 mt-[7px] pl-[11px] sm:pr-5 pr-[35px] py-1 rounded-[18px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-black-900 w-[104px]"
                  size="txtInterSemiBold2149Black900"
                >
                  {props?.frameonefifty}
                </Text>
              </div>
            </List>
            <div className="h-[47px] md:h-[78px] md:ml-[0] ml-[461px] mt-[31px] relative w-[17%]">
              <div className="absolute bg-green-600 h-[47px] inset-[0] justify-center m-auto rounded-[23px] w-full"></div>
              <Text
                className="absolute inset-x-[0] mx-auto sm:text-[32.49px] md:text-[34.49px] text-[36.49px] text-white-A700 top-[0] w-max"
                size="txtInterSemiBold3649"
              >
                {props?.ordertwotext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

OrderColumn.defaultProps = {
  orderan: "Orderan",
  no: "No",
  gambar: "Gambar",
  bahan: "Bahan",
  beratkg: "Berat/kg",
  orderone: "1",
  minyak: "Minyak",
  frameonehundred: "100",
  ordertwo: "2",
  bawang: "Bawang",
  frameonefifty: "150",
  ordertwotext: "Order",
};

export default OrderColumn;
