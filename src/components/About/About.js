import React, { useEffect } from "react";
import Intro from "../Header/Intro";
import aboutStyle from "../../utilities/styles/output/section.module.css";
import Tabella_1 from "../../utilities/media/img/tabella_1_chi_siamo.png";
import Tabella_2 from "../../utilities/media/img/tabella_2_chi_siamo.png";

function About() {
  useEffect(() => {
    document.title =
      "Chi Siamo - Un Team Organizzato ed Efficiente | CoProject Studio";
  });

  return (
    <div className={aboutStyle.cont__about}>
      <Intro section="about" title="Team Organizzato ed Efficiente" />

      <div className={aboutStyle.cont__about_descr}>
        <div className={aboutStyle.cont__about_descr_firstSection}>
          <h3>
            <b>CoProject</b> STUDIO
          </h3>

          <p>
            Il <b>nostro Team</b> è composto da <b>professionisti esperti</b> in
            questo campo e segue un rigido <b>organigramma</b> aziendale che ci
            permette di replicare <b>qualità ed esperienza</b> in ogni gara.
          </p>
        </div>

        <div className={aboutStyle.cont__about_division}>
          <p>
            L’impostazione <b>gerarchica</b> ci permette una gestione
            superpartes della
            <b> qualità</b> di ogni singola gara con relativo monitoraggio e{" "}
            <b>verifica </b>
            pre-consegna. Lo <b>studio</b> è composto da <b>professionisti</b>{" "}
            operanti, responsabili di gara e consulenti esterni da mettere a
            disposizione della specifica commessa.
          </p>

          <img
            src={Tabella_1}
            alt="Tabella Metodologia CoProject STUDIO"
            className={aboutStyle.cont__about_images}
          />
        </div>
      </div>

      <div className={aboutStyle.cont__about_division}>
        <div className={aboutStyle.cont__about_mission} id="about">
          <div className={aboutStyle.cont__about_mission_title}>
            <svg
              id="noun_Mission_3881493"
              xmlns="http://www.w3.org/2000/svg"
              width="118.398"
              height="120.5"
              viewBox="0 0 118.398 120.5"
            >
              <g id="Raggruppa_1497" data-name="Raggruppa 1497">
                <path
                  id="Tracciato_7886"
                  data-name="Tracciato 7886"
                  d="M5.55,0h107.3a5.561,5.561,0,0,1,5.55,5.55V64.714a5.561,5.561,0,0,1-5.55,5.55H98.455a5.335,5.335,0,0,0-3.865,1.567L77.856,88.2a1.849,1.849,0,0,1-3.138-1.332l.031-14.752a1.851,1.851,0,0,0-1.85-1.856H49.7a.738.738,0,0,1-.712-.938c.063-.226.12-.451.174-.673a19.309,19.309,0,0,0,.453-2.83c.011-.139.022-.277.031-.416a.739.739,0,0,1,.738-.692H72.9a7.4,7.4,0,0,1,7.4,7.418l-.009,4.6a.555.555,0,0,0,.942.4l9.477-9.272a10.883,10.883,0,0,1,7.746-3.15h14.393V5.55H5.55V64.714h9.483a.74.74,0,0,1,.738.681,20.88,20.88,0,0,0,.407,2.662c.091.422.191.853.3,1.28a.74.74,0,0,1-.716.927H5.55A5.56,5.56,0,0,1,0,64.714V5.55A5.561,5.561,0,0,1,5.55,0ZM16.777,30.9h6.765a.7.7,0,0,0,.6-.322l2.148-3.271H45.065a1.649,1.649,0,0,0,1.645-1.645h0a1.65,1.65,0,0,0-1.645-1.646H26.288l-2.146-3.269a.7.7,0,0,0-.6-.324H16.777a.716.716,0,0,0-.59,1.123l2.551,3.711a.707.707,0,0,1,0,.81l-2.551,3.711a.715.715,0,0,0,.59,1.121ZM46.257,10.364a15.3,15.3,0,1,1-14.772,19.3.675.675,0,0,1,.649-.849H35.1a.66.66,0,0,1,.636.457,11.117,11.117,0,1,0,0-7.211.665.665,0,0,1-.638.455H32.134a.674.674,0,0,1-.649-.849A15.3,15.3,0,0,1,46.257,10.364Zm0,8.982a6.318,6.318,0,1,1-5.136,10,.338.338,0,0,1,.274-.533h3.67a3.15,3.15,0,0,0,0-6.3h-3.67a.337.337,0,0,1-.272-.533A6.312,6.312,0,0,1,46.257,19.345Zm63.537,39.767-25.056-25.8V13.477a.735.735,0,0,0-.7-.76H72.164a.682.682,0,0,0-.623.411.8.8,0,0,0,.05.788l2.187,3.356a.8.8,0,0,1,.015.853l-2.279,3.813a.8.8,0,0,0-.028.777.678.678,0,0,0,.614.4H82.2V33.336L53.7,59.086a.628.628,0,0,0-.166.668.553.553,0,0,0,.522.4h55.353a.547.547,0,0,0,.514-.379A.625.625,0,0,0,109.794,59.112Zm-86.847,12.1-.031-.009a3.26,3.26,0,0,1-1.136-.536,2.368,2.368,0,0,1-.7-1.162,20.345,20.345,0,0,1-.644-2.361,16.754,16.754,0,0,1-.333-2.19,4.059,4.059,0,0,1,.113-1.6,1.491,1.491,0,0,1,.831-.847,2.665,2.665,0,0,1,.551-.065c.126-.031-.063-.1-.067-.163l-.339-4.76c-.222-2.185.246-5.359,1.85-6.845a2.565,2.565,0,0,1,1.9-.394,1.535,1.535,0,0,1,.144-1.726,8.2,8.2,0,0,1,2.7-2.475,11.257,11.257,0,0,1,5.5-1.156,13.651,13.651,0,0,1,5.948,2.25,10.072,10.072,0,0,1,3.437,3.792,13.9,13.9,0,0,1,1.256,5.3,28.841,28.841,0,0,1-.252,6.153,2.051,2.051,0,0,1,.594.13,1.477,1.477,0,0,1,.936.919,5.316,5.316,0,0,1,.085,1.965,14.855,14.855,0,0,1-.348,2.194,13.98,13.98,0,0,1-.642,2,2.526,2.526,0,0,1-.7,1.073,3.344,3.344,0,0,1-1.136.536q-.13.039-.266.072l-.144,2.233a5.348,5.348,0,0,1-1.434,3.38V80.79a2.334,2.334,0,0,1-.94,1.9l-5.74,4.4,2.078,1.238c.4.239.187.777,0,1.208l-.836,1.93c-.2.462-.453.866-.255,1.326l.2.462,1.308,4.782.561,16.822L41.21,95.185a11.808,11.808,0,0,0,1.608-5.874c.08-2.2-.1-5.322-.29-8.528a.343.343,0,0,1,.57-.277,13.348,13.348,0,0,0,4.273,2.562,84.818,84.818,0,0,0,9.5,2.769c2.682.657,3.881.914,4.729,1.547s1.339,1.639,2.144,4.414c.5,1.732,1.123,16.55,1.789,19.225a4.5,4.5,0,0,1-3.787,5.552,227.935,227.935,0,0,1-57.793-.031A4.353,4.353,0,0,1,.8,114.622a4.355,4.355,0,0,1-.655-3.635c.662-2.66,1.28-17.466,1.78-19.188.8-2.773,1.3-3.779,2.142-4.414S6.112,86.5,8.8,85.839a84.3,84.3,0,0,0,9.5-2.771,13.308,13.308,0,0,0,4.275-2.56.343.343,0,0,1,.57.277c-.194,3.2-.368,6.332-.29,8.53a11.806,11.806,0,0,0,1.608,5.872l4.222,19.682.564-16.824,1.306-4.78.124-.285c.2-.462-.035-.873-.253-1.325L29.4,89.546c-.2-.425-.4-.969,0-1.21h0l2.22-1.321L26,82.7a2.335,2.335,0,0,1-.94-1.905V77.456l-.42-.44A5.372,5.372,0,0,1,23.1,73.529l-.15-2.314h0Z"
                  fill="#3d4041"
                  fill-rule="evenodd"
                />
              </g>
              <text
                id="Created_by_popcornarts"
                data-name="Created by popcornarts"
                transform="translate(0.42 119.5)"
                fill="#3d4041"
                font-size="1"
                font-family="HelveticaNeue-Bold, Helvetica Neue"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  Created by popcornarts
                </tspan>
              </text>
              <text
                id="from_the_Noun_Project"
                data-name="from the Noun Project"
                transform="translate(0.42 119.5)"
                fill="#3d4041"
                font-size="1"
                font-family="HelveticaNeue-Bold, Helvetica Neue"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  from the Noun Project
                </tspan>
              </text>
            </svg>

            <h2>La nostra mission</h2>
          </div>

          <p>
            Il nostro <b>obiettivo primario</b> non è partecipare alla gara, ma
            ottenere <b> l'obiettivo primario</b>. Con l’impresa che ci affida l’incarico
            abbiamo in comune questo <b>obiettivo</b>, poichè con il premio
            aggiudicazione che ci viene riconosciuto troviamo nella vittoria{" "}
            <b>soddisfazione economica</b>, oltre che <b>professionale</b>, ed è
            per l’impresa garanzia di <b>impegno al 100%</b>. Con l’impresa
            siamo complici e se vince, <b>vinciamo anche noi!</b>
          </p>
        </div>

        <img
          src={Tabella_2}
          alt="Tabella Metodologia CoProject STUDIO"
          className={aboutStyle.cont__about_images}
        />
      </div>

      <h1>APPROCCIO MULTI-DISCIPLINARE ALL’OFFERTA TECNICA</h1>

      <p>
        La preparazione dell’offerta tecnica non ha mai carattere generico e si
        avvale sempre dell’<b>apporto specialistico</b> delle varie materie,
        anche con consulenti esterni, per garantire sempre un alto{" "}
        <b>indice di specificità</b>
        che fa la differenza.
      </p>
    </div>
  );
}

export default About;
