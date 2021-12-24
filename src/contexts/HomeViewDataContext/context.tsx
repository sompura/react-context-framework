import React from "react";

export interface Image {
  small: string;
  small2x: string;
  medium: string;
  medium2x: string;
  large: string;
  large2x: string;
  alt: string;
}

export interface Banner {
  image: Image;
  tag: string;
  header: string;
  description: string;
}

export interface Card {
  large: boolean;
  image: Image;
  tag: string;
  header?: string;
  subheader?: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
  };
}

export interface HomeViewDataContext {
  banner: Banner;
  cards: Array<Card>;
  bannerApiContent: any;
  fetchBannerData: any;
  cardsApiContent: any;
  fetchCardsData: any;
}

export default React.createContext({
  banner: {
    image: {
      small: "",
      small2x: "",
      medium: "",
      medium2x: "",
      large: "",
      large2x: "",
      alt: "",
    },
    tag: "",
    header: "",
    description: "",
  },
  cards: [
    {
      large: true,
      image: {
        small: "",
        small2x: "",
        medium: "",
        medium2x: "",
        large: "",
        large2x: "",
        alt: "",
      },
      tag: "",
      header: "",
      subheader: "",
      description: "",
      cta: {
        text: "",
        link: "",
      },
    },
  ],
  bannerApiContent: null,
  fetchBannerData: () => {},
  cardsApiContent: null,
  fetchCardsData: () => {},
} as HomeViewDataContext);
