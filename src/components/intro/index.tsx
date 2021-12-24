import React from "react";
import IntroTpl, { IntroProps } from "./index.tpl";

const Intro = (props: IntroProps) => {
  if (props) {
    return <IntroTpl {...props} />;
  } else {
    return null;
  }
};

export default Intro;
