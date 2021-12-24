import React from "react";
import BannerTpl, { BannerContentProps } from "./index.tpl";

const Banner = (props: BannerContentProps) => {
  if (props) {
    return <BannerTpl {...props} />;
  } else {
    return null;
  }
};

export default Banner;
