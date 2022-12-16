import React from "react";
import './slideshow.styles.scss';

export default function SlideShow() {
  return (
    <div>
      <div className="wrapframe">
        <div className="slideshows">
          <div className="slideshow slideshow--hero">
            <div className="mainslides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
          <div className="slideshow slideshow--contrast slideshow--contrast--before">
            <div className="secondslides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
          <div className="slideshow slideshow--contrast slideshow--contrast--after">
            <div className="thirdslides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
