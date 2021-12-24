import React from "react";
import ImageTpl, { ImageProps } from "./index.tpl";

const Image = (props: ImageProps) => {
  if (props) {
    return <ImageTpl {...props} />;
  } else {
    return null;
  }
};

export default Image;
