import React, {useEffect} from "react";
import Intro from "../Header/Intro";
import offersStyle from "../../utilities/styles/output/section.module.css";
import homeStyle from "../../utilities/styles/output/homeStyle.module.css";
import { Link } from "react-router-dom";


function Offers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={offersStyle.cont__about} id="listaServizi">
      <Intro section="offersPage" title="Offerte Tecniche & Servizi" />

      <ul className={homeStyle.cont__home_servizi_list}>
        <li id="1">
          <h2>Offerte Tecniche Mgliorative</h2>
        </li>

        <p id="offers">
          <b>Il nostro metodo</b> ha un approccio specialistico sulle{" "}
          <b>offerte tecniche migliorative</b>. <br />
          <br />
          <b>Scelta mirata</b> delle migliorie, chiarezza espositiva degli
          elaborati e capacità di comunicazione ci permettono di preparare{" "}
          <b>offerte tecniche di impatto</b> con ottimi risultati di
          <b> aggiudicazione</b>.
        </p>

        <li id="2">
          <h2>Appalti Integrati</h2>
        </li>

        <p id="offers">
          <b>Partecipiamo</b> alle procedure per la progettazione ed esecuzione
          dei lavori. Abbiamo <b>requisiti e servizi di progettazione</b>{" "}
          espletati da poter mettere a disposizione per la partecipazione. Tra
          le offerte presentate vantiamo <b>l’aggiudicazione</b> di alcuni
          appalti integrati.
        </p>

        <li id="4">
          <h2>Servizi Post-Aggiudicazione</h2>
        </li>

        <p id="offers">
          Ci occupiamo degli aspetti <b>post-aggiudicazione</b> dell’appalto.
          Redigiamo giustificazioni con{" "}
          <b>analisi prezzi, perizie di varianti e consulenza legale</b> e
          tecnico-amministrativa sul Codice degli Appalti Pubblici (D.Lgs
          50/2016)
        </p>
      </ul>
      <div className={homeStyle.cont__home_wrapper}>
        <div className={homeStyle.cont__home_descr}>
          <h4>Chi Siamo</h4>

          <p>
            CoProject studio nasce da un gruppo multidisciplinare di
            professionisti con sede a Milano che da anni opera nel pubblico
            partecipando alle procedure di gare d’appalto con criterio
            dell’offerta economicamente più vantaggiosa.
          </p>
        </div>

        <div className={homeStyle.cont__home_servizi}>
          <div className={homeStyle.cont__home_servizi_intro}>
            <h2>Galleria</h2>

            <Link to="/tuttiGliEsiti">Visualizza la Galleria</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
