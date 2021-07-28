import React from "react";
import headerModule from "../../utilities/styles/output/header.module.css";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import galleryStyle from "../../utilities/styles/output/section.module.css";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../utilities/media/img/home/1.jpg";
import image2 from "../../utilities/media/img/home/2.jpg";
import image3 from "../../utilities/media/img/home/3.jpg";

function Intro(props) {
  const image = [image1, image2, image3];

  return (
    <div className={headerModule.cont__header_intro} id={props.section}>

      {props.section === "home" && (
        <div className={galleryStyle.cont__about_slide_container} id="intro">
          <Slide duration={3000} transitionDuration={500} arrows={true}>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${image[0]})` }}
                className={galleryStyle.cont__about_slide}
                id="intro"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${image[1]})` }}
                className={galleryStyle.cont__about_slide}
                id="intro"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${image[2]})` }}
                className={galleryStyle.cont__about_slide}
                id="intro"
              ></div>
            </div>
          </Slide>
        </div>
      )}

      <div className={headerModule.cont__header_intro_cta}>
        <h2>{props.title}</h2>

        <Link to="/">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 612.02 612.02"
            xmlSpace="preserve"
          >
            <g>
              <g id="_x35__11_">
                <g>
                  <path
                    d="M596.96,269.674L342.381,15.094c-20.079-20.079-52.644-20.079-72.723,0c-20.079,20.079-20.079,52.644,0,72.723
				L487.852,306.01L269.658,524.202c-20.079,20.079-20.079,52.644,0,72.723s52.644,20.079,72.723,0L596.96,342.346
				C617.039,322.317,617.039,289.753,596.96,269.674z M290.858,254.258L88.744,41.238c-20.309-21.378-53.204-21.378-73.513,0
				s-20.309,56.058,0,77.462l165.371,174.289L15.231,467.278c-20.309,21.379-20.309,56.083,0,77.462s53.204,21.379,73.513,0
				L290.858,331.72C311.167,310.342,311.167,275.662,290.858,254.258z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
