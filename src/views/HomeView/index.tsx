import React, { useContext, useEffect } from "react";
import Banner from "../../components/banner";
import Cards from "../../components/cards";
import { HomeViewDataContext } from "../../contexts/HomeViewDataContext";

const HomeView = () => {
  const { fetchBannerData, bannerApiContent, fetchCardsData, cardsApiContent } =
    useContext(HomeViewDataContext);

  useEffect(() => {
    fetchBannerData();
  }, [fetchBannerData]);

  useEffect(() => {
    fetchCardsData();
  }, [fetchCardsData]);

  return (
    <div className="wrapper">
      <div className="container">
        {bannerApiContent && <Banner {...bannerApiContent} />}
        {cardsApiContent && <Cards cards={cardsApiContent} />}
      </div>
    </div>
  );
};

export default HomeView;
