import React from "react";

export interface ImageProps {
  small: string;
  small2x: string;
  medium: string;
  medium2x: string;
  large: string;
  large2x: string;
  alt: string;
}

const ImageTpl = (image: ImageProps) => {
  return (
    <div className="c_image">
      <picture>
        <source
          srcSet={`${image.small}, ${image.small2x} 2x`}
          media="(max-width: 414px)"
        />
        <source
          srcSet={`${image.medium}, ${image.medium2x} 2x`}
          media="(min-width: 415px) and (max-width: 1023px)"
        />
        <source
          srcSet={`${image.large}, ${image.large2x} 2x`}
          media="(min-width: 1024px)"
        />
        <img src={image.large} alt={image.alt} srcSet={`${image.large2x} 2x`} />
      </picture>
    </div>
  );
};

export default ImageTpl;
