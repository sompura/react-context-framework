import React from "react";
import { Image } from "../../contexts/HomeViewDataContext/context";
import ImageComponent from "../../components/image";
import IntroComponent from "../../components/intro";
import "./banner.scss";

export interface BannerContentProps {
  image: Image;
  tag: string;
  header: string;
  description: string;
}

const BannerTpl = (bannerContent: BannerContentProps) => {
  return (
    <div className="c_banner">
      <IntroComponent {...bannerContent} />
      <div className="c_banner-image">
        <ImageComponent {...bannerContent.image} />
      </div>
      <div className="c_banner-overlay"></div>
    </div>
  );
};

export default BannerTpl;
