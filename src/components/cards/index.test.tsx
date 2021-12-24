import React from "react";
import { render } from "@testing-library/react";

import cardsData from "../../data/cards.json";
import Cards from ".";

describe("<Cards />", () => {
  it("renders as expected", () => {
    const { container } = render(<Cards {...cardsData} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
