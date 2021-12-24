import React, { Fragment } from "react";
import { Card } from "../../contexts/HomeViewDataContext/context";
import ImageComponent from "../../components/image";
import IntroComponent from "../../components/intro";
import "./cards.scss";

export interface CardsProps {
  cards: Array<Card>;
}

const CardsTpl = (content: CardsProps) => {
  const chunk = (array: Array<any>, size: number) => {
    return array.reduce((chunks, item, i) => {
      if (i % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  const cardSections = chunk(content.cards, 3);

  return (
    <div className="c_cards">
      {cardSections.map((cards: any, index: number) => (
        <Fragment key={index}>
          <div className="c_cards-row">
            {cards.map((card: any, i: number) => (
              <Fragment key={i}>
                <div
                  className={
                    card.large
                      ? "c_cards-item c_cards-item--large"
                      : "c_cards-item"
                  }
                >
                  <IntroComponent {...card} />
                  <div className="c_cards-item-image">
                    <ImageComponent {...card.image} />
                  </div>
                  <div className="c_cards-item-overlay"></div>
                </div>
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default CardsTpl;
