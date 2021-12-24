import React from "react";
import "./intro.scss";

export interface IntroProps {
  tag: string;
  header?: string;
  subheader?: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
  };
}

const IntroTpl = (content: IntroProps) => {
  return (
    <div className="c_intro">
      {content.tag && <div className="c_intro-tag">{content.tag}</div>}
      {content.header && (
        <div className="c_intro-header">
          <h2>{content.header}</h2>
        </div>
      )}
      {content.subheader && (
        <div className="c_intro-subheader">
          <h3>{content.subheader}</h3>
        </div>
      )}
      {content.description && (
        <div className="c_intro-description">
          <p>{content.description}</p>
        </div>
      )}
      {content.cta && (
        <div className="c_intro-cta">
          <a href={content.cta.link}>{content.cta.text}</a>
        </div>
      )}
    </div>
  );
};

export default IntroTpl;
