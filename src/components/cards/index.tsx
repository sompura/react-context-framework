import React from "react";
import CardsTpl, { CardsProps } from "./index.tpl";

const Cards = (props: CardsProps) => {
  if (props.cards) {
    return <CardsTpl cards={props.cards} />;
  } else {
    return null;
  }
};

export default Cards;
