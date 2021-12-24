import React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import HomeViewDataContext from "./context";
//import bannerData from "../../data/banner.json";
//import cardsData from "../../data/cards.json";

export { HomeViewDataContext };

const HomeViewDataContextProvider = (props: any) => {
  const GET_BANNER_DATA = gql`
    query GetBanners {
      data @rest(type: "GET", path: "/getBanner", method: "GET") {
        image
        tag
        header
        description
      }
    }
  `;

  const GET_CARDS_DATA = gql`
    query GetCards {
      data @rest(type: "GET", path: "/getCards", method: "GET") {
        large
        image
        tag
        subheader
        description
        cta
      }
    }
  `;

  /*let banner = bannerData,
  cards = cardsData.cards;*/

  // Fetch Banner content from API
  const [fetchBannerData, { data: bannerApiData }] = useLazyQuery(
    GET_BANNER_DATA,
    {
      errorPolicy: "all",
      context: { banner: true },
    }
  );

  let bannerApiContent;
  if (bannerApiData) {
    bannerApiContent = bannerApiData.data;
  }

  // Fetch Cards content from API
  const [fetchCardsData, { data: cardsApiData }] = useLazyQuery(
    GET_CARDS_DATA,
    {
      errorPolicy: "all",
      context: { cards: true },
    }
  );

  let cardsApiContent;
  if (cardsApiData) {
    cardsApiContent = cardsApiData.data;
  }

  const providerValue = {
    //banner,
    //cards,
    bannerApiContent,
    fetchBannerData,
    cardsApiContent,
    fetchCardsData,
  };

  return <HomeViewDataContext.Provider {...props} value={providerValue} />;
};

export default HomeViewDataContextProvider;
