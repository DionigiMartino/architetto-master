import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import homeStyle from "../../utilities/styles/output/homeStyle.module.css";
import Intro from "../Header/Intro";

import LogoHome from "../../utilities/media/img/icona_logo_home.svg";
import Arrow_2 from "../../utilities/media/img/freccia_2.svg";
import video from "../../utilities/media/video/video.mp4";
import poster from "../../utilities/media/video/poster.jpg";
import LastScore from "./LastScore";


import image1 from "../../utilities/media/img/clienti/1.png";
import image2 from "../../utilities/media/img/clienti/2.png";
import image3 from "../../utilities/media/img/clienti/3.png";
import image4 from "../../utilities/media/img/clienti/4.png";
import image5 from "../../utilities/media/img/clienti/5.png";
import image6 from "../../utilities/media/img/clienti/6.png";
import image7 from "../../utilities/media/img/clienti/7.png";
import image8 from "../../utilities/media/img/clienti/8.png";
import image9 from "../../utilities/media/img/clienti/9.png";
import image10 from "../../utilities/media/img/clienti/10.png";
import image11 from "../../utilities/media/img/clienti/11.png";
import image12 from "../../utilities/media/img/clienti/12.png";
import image13 from "../../utilities/media/img/clienti/13.png";
import image14 from "../../utilities/media/img/clienti/14.png";
import image15 from "../../utilities/media/img/clienti/15.png";
import image16 from "../../utilities/media/img/clienti/16.png";
import image17 from "../../utilities/media/img/clienti/17.png";
import image18 from "../../utilities/media/img/clienti/18.png";
import image19 from "../../utilities/media/img/clienti/19.png";
import image20 from "../../utilities/media/img/clienti/20.png";
import image21 from "../../utilities/media/img/clienti/21.png";
import image22 from "../../utilities/media/img/clienti/22.png";
import image23 from "../../utilities/media/img/clienti/23.png";
import image24 from "../../utilities/media/img/clienti/24.png";
import image25 from "../../utilities/media/img/clienti/25.png";
import image26 from "../../utilities/media/img/clienti/26.png";
import image27 from "../../utilities/media/img/clienti/27.png";

import italia from '../../utilities/media/img/italia.png'

function Home() {
  const loghi = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27
  ];

  const listOfServices = [
    {
      title: "Offerte Tecniche Migliorative",
      link: "/offerteTecniche",
      element: 1,
    },
    {
      title: "Appalti Integrati",
      link: "/offerteTecniche",
      element: 2,
    },
    {
      title: "Servizi Post-Aggiudicazione",
      link: "/offerteTecniche",
      element: 3,
    },
    {
      title: "Alcune Nostre Offerte Tecniche",
      link: "/tuttiGliEsiti",
      element: 4,
    },
  ];

  useEffect(() => {
    document.title = "Coproject Studio - Gare d'Appalto e Progettazione";
  });

  return (
    <div id="cont__main">
      <Intro
        section="home"
        title="Siamo specializzati nella preparazione dell’offerta tecnica migliorativa."
      />

      <img src={italia} alt="Podio Italia" className={homeStyle.cont__home_image} />

      <div className={homeStyle.cont__home}>
        <LastScore title="Alcuni dei nostri Risultati" section="home" />

        <div className={homeStyle.cont__home_formAccess}>
          <h4>
            <b>CoProject</b> Studio
          </h4>

          <h2>
            Applichiamo un metodo di calcolo dei coefficienti dei punteggi che
            ci permette di aggiudicarci circa il 25% delle gare preparate!
          </h2>

          <p>
            <b>Accedi</b> al nostro form di <b>contatto</b>
          </p>

          <div className={homeStyle.cont__home_formAccess_cta}>
            <img src={LogoHome} alt="Logo CoProject Studio" />

            <Link to="/contatti">
              <img src={Arrow_2} id="arrow" alt="Logo CoProject Studio" />
            </Link>
          </div>
        </div>

        <div className={homeStyle.cont__home_wrapper}>
          <div className={homeStyle.cont__home_descr}>
            <h4>Chi Siamo</h4>

            <p>
              CoProject studio nasce da un gruppo multidisciplinare di
              professionisti con sede a Milano che da anni opera nel pubblico
              partecipando alle procedure di gare d’appalto con criterio
              dell’offerta economicamente più vantaggiosa.
            </p>

            <Link to="/chiSiamo">leggi di più</Link>
          </div>

          <div className={homeStyle.cont__home_servizi}>
            <div className={homeStyle.cont__home_servizi_intro}>
              <h2>Offerte tecniche e Servizi</h2>

              <Link to="/servizi">leggi di più</Link>
            </div>
          </div>
        </div>

        <div className={homeStyle.cont__home_wrapper} id="servizi">
          <ul className={homeStyle.cont__home_servizi_list}>
            {listOfServices.map((arg) => {
              return (
                <li id={arg.element} key={arg.element}>
                  <h2>{arg.title}</h2>

                  {arg.link !== "" && <Link to={arg.link}>leggi di più</Link>}
                </li>
              );
            })}
          </ul>

          <video src={video} controls muted poster={poster} />
        </div>

        <p>
          Il nostro metodo ha un approccio specialistico sulle offerte tecniche
          migliorative. <br />
          <br />
          Scelta mirata delle migliorie, chiarezza espositiva degli elaborati e
          capacità di comunicazione ci permettono di preparare offerte tecniche
          di impatto con ottimi risultati di aggiudicazione. <br />
          <br />
          <Link to="/offerteTecniche">leggi di più</Link>
        </p>

        <div className={homeStyle.cont__home_servizi_intro} id="intro_2">
          <h2>Servizi per gli Appalti</h2>

          <p>
            I nostri servizi sono incentrati sull’offerta tecnica, estendendosi
            però anche agli altri campi del settore degli appalti pubblici. Con
            il nostro gruppo e nostri Partner assistiamo l’impresa nella
            partecipazione alle procedure di Appalto integrato o nella fase di
            post aggiudicazione per contabilità e Giustificazione dei prezzi.
          </p>

          <Link to="/ilNostroMetodo">leggi di più</Link>
        </div>
      </div>

      <div className={homeStyle.cont__home_bannerClienti}>
        <h3>Alcuni dei Nostri Clienti</h3>
        <div>
          <ul>
            {loghi.map((el, index) => {
              return (
                <li key={index}>
                  <img src={el} alt={index} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
