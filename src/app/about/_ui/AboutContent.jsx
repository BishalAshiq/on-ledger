import React from "react";
import AboutHeader from "./AboutHeader";
import AboutSubHeader from "./AboutSubHeader";
import AboutArticle from "./AboutArticle";
import { aboutData } from "../data";

export default function AboutContent() {
  return (
    <div className='about__content__wrapper'>
      {aboutData.map((each, index) => (
        <div key={index}>
          <AboutHeader header={each.title} />
          {each.sub_title.length > 0 &&
            each.sub_title.map((sub, subIndex) => (
              <AboutSubHeader
                changeColor={sub.color}
                key={subIndex}
                subHeader={sub}
              />
            ))}
          {each.main_article && <AboutArticle article={each.main_article} />}
        </div>
      ))}
    </div>
  );
}
