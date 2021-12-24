import React from "react";
import { render } from "@testing-library/react";

import bannerData from "../../data/banner.json";
import Banner from ".";

describe("<Banner />", () => {
  it("renders as expected", () => {
    const { container } = render(<Banner {...bannerData} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
