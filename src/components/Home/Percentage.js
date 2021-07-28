import React from "react";
import CircularProgressWithLabel from "@material-ui/core/CircularProgress";
import homeStyle from "../../utilities/styles/output/homeStyle.module.css";

function Percentage() {
  setTimeout(() => {
    const scrollEvent = () => {
      if (window.scrollY >= 1) {
        document.getElementById("percentage").style.transform =
          "translateX(101%)";
        document.getElementById("percentage").style.transition = "transform 1s";
      } else {
        document.getElementById("percentage").style.transform = "translateX(0)";
        document.getElementById("percentage").style.transition = "transform 1s";
      }
    };

    window.addEventListener("scroll", scrollEvent);
  }, 1000);

  return (
    <div className={homeStyle.cont__home_percentage} id="percentage">
      <CircularProgressWithLabel value={75} variant="determinate" />

      <span></span>

      <p>Percentuale di Aggiudicazioni Recenti</p>
    </div>
  );
}

export default Percentage;
