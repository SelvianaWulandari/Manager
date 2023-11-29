import React from "react";

const sizeClasses = {
  txtAlataRegular33: "font-alata font-normal",
  txtInterSemiBold2031: "font-inter font-semibold",
  txtInterSemiBold3649: "font-inter font-semibold",
  txtInterSemiBold25: "font-inter font-semibold",
  txtInterSemiBold23: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold27: "font-inter font-semibold",
  txtInterSemiBold2149Black900: "font-inter font-semibold",
  txtInterSemiBold1719: "font-inter font-semibold",
  txtInterSemiBold30: "font-inter font-semibold",
  txtJustAnotherHandRegular20049: "font-justanotherhand font-normal",
  txtInterSemiBold2149: "font-inter font-semibold",
  txtInterSemiBold1651: "font-inter font-semibold",
  txtInterSemiBold2064: "font-inter font-semibold",
  txtInterSemiBold15Black900: "font-inter font-semibold",
  txtInterSemiBold15Black90003: "font-inter font-semibold",
  txtInterSemiBold15: "font-inter font-semibold",
  txtJustAnotherHandRegular6049: "font-justanotherhand font-normal",
  txtInterSemiBold78: "font-inter font-semibold",
  txtAlataRegular42: "font-alata font-normal",
  txtInterSemiBold2031WhiteA700: "font-inter font-semibold",
  txtInterSemiBold22: "font-inter font-semibold",
  txtInterSemiBold66: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterSemiBold1625: "font-inter font-semibold",
  txtInterSemiBold2218: "font-inter font-semibold",
  txtInterSemiBold15WhiteA700: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
