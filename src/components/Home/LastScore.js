import React, { useState } from "react";
import homeStyle from "../../utilities/styles/output/homeStyle.module.css";
import polo from "../../utilities/media/img/scores/polo_bibliotecario.jpg";
import altilia from "../../utilities/media/img/scores/altilia.jpg";
import saint from "../../utilities/media/img/scores/saint.jpg";
import genova from "../../utilities/media/img/scores/genova.jpg";
import jona from "../../utilities/media/img/scores/jona.jpg";
import torrenova from "../../utilities/media/img/scores/torrenova.jpg";
import image1 from "../../utilities/media/img/scores/1.jpeg";
import image2 from "../../utilities/media/img/scores/2.jpeg";
import image3 from "../../utilities/media/img/scores/3.jpeg";
import image4 from "../../utilities/media/img/scores/4.jpeg";
import image5 from "../../utilities/media/img/scores/5.jpeg";
import image6 from "../../utilities/media/img/scores/6.jpeg";

import first from "../../utilities/media/img/scores/primo.svg";
import second from "../../utilities/media/img/scores/secondo.svg";
import third from "../../utilities/media/img/scores/terzo.svg";

function LastScore(props) {
  const [open, setOpened] = useState(false);
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState(0);

  let scores = [
    {
      image: image3,
      place: 1,
      text: "Affidamento lavori di realizzazione di nuovo edificio scolastico destinato ad ospitare l'istituto tecnico G. Rivoira di Verzuolo.",
      import: "5.699.853,57",
      category: "OG1|OS13|OS6|OS3|OS28|OS30",
      title: "Istituto Scolastico G. Rivoira - Verzuolo (CN)",
    },
    {
      image: image1,
      place: 1,
      text: "Affidamento lavori di realizzazione di riqualificazione dei complessi scolastici siti nei Comuni di Scano di Montiferro corso V. Tresnuraghes.",
      import: "1.382.057,40",
      category: "OG1|OS30",
      title: "Complessi Scolastici Scano di Monteferro e Trusneraghes (OR)",
    },
    {
      image: image2,
      place: 1,
      text: "Affidamento dei lavori di realizzazione di una nuova scuola primaria e dell'infanzia nel Comune di Loiri Porto San Paolo.",
      import: "1.947.938,77",
      category: "OG1",
      title: "Scuola Primaria e dell'Infanzia - Loiri Porto San Paolo (SS)",
    },
    {
      image: image4,
      place: 2,
      text: "Affidamento dei lavori di realizzazione del nuovo polo Scolastico nel comune di Busca, comprendente la scuola primaria, secondaria di primo grado e palestra.",
      import: "7.750.000,00",
      category: "OG1|OG11|OS32|OS18-B",
      title: "Polo Scolastico - Busca (CN)",
    },
    {
      image: image5,
      place: 3,
      text: "Affidamento dei lavori di demolizione e ricostruzione di immobile esistente all'interno della Caserma Santa Barbara da adibire a fabbricato multifunzione per sale convegno e servizio vettovaglie.",
      import: "9.012.518,88",
      category: "OG1|OG11|OG12|OS6|OS21",
      title: "Fabbricato presso Caserma Santa Barbara - Milano (MI)",
    },
    {
      image: genova,
      place: 1,
      text: "Appalto integrato per l'affidamento della progettazione esecutiva e dei lavori di riqualificazione dell'Impianto Sportivo Nico Sapio del quartiere Pegli di Genova.",
      import: "4.477.866,50",
      category: "OG1|OS30|OS28|OS32",
      title: "Impianto Sportivo Nico Sapio - Genova (GE)",
    },
    {
      image: jona,
      place: 2,
      text: "Affidamento dei lavori di nuova costruzione e sostituzione edificio esistente – scuola secondaria di 1° grado Olga e Leopoldo JONA - Asti.",
      import: "8.000.000,00",
      category: "OG1|OG1|OG21",
      title: "Scuola Olga e Leopoldo Jona - Asti (AT)",
    },
    {
      image: image6,
      place: 1,
      text: "Affidamento dei lavori di di risanamento conservativo dello Stadio Mancini, primo stralcio - 2°Lotto - Fano (PU)",
      import: "634.897,43",
      category: "OG1 | OG19 | OS18A ",
      title: "Stadio Mancini - Fano (PU)",
    },
    {
      image: saint,
      place: 3,
      text: "Affidamento dei lavori di miglioramento architettonico, energetico e strutturale sulla piscina di proprietà regionale - Pré-Saint-Didier (AO).",
      import: "3.393.723,24",
      category: "OG2|OS6|OS30|OS22",
      title: "Piscina di proprietà regionale - Pré-Saint-Didier (AO)",
    },
    {
      image: polo,
      place: 1,
      text: "Appalto integrato per l'affidamento della progettazione esecutiva e dei lavori di realizzazione del Polo Bibliotecario della Puglia presso ex Caserma Rossani - Bari.",
      import: "7.645.102,21",
      category: "OG2|OS30|OS28|OS3",
      title:
        "Polo bibliotecario Della Puglia Presso ex caserma Rossani - Bari. (BA)",
    },
    {
      image: torrenova,
      place: 3,
      text: "Affidamento lavori di ristrutturazione edilizia ed adeguamento sismico della scuola media di Via Marconi nel Comune di Torrenova.",
      import: "1.225.273,59",
      category: "OG1",
      title: "Scuola Media di Via Marconi - Torrenova (ME)",
    },
    {
      image: altilia,
      place: 1,
      text: "Affidamento dei lavori di Recupero e valorizzazione delle grotte eremitiche di San Francesco di Paola.",
      import: "237.000,00 €",
      category: "OG2|OG11",
      title: "Grotte Eremetiche di S. Francesco di Paola - Altilia (CS)",
    },
  ];

  function openScore(score) {
    setOpened(true);
    setTitle(score);

    setTimeout(() => {
      let positionY = window.scrollY;

      setPosition(positionY);

      window.scrollTo({
        top: positionY,
        behavior: "smooth",
      });
    }, 0);
  }

  return (
    <>
      <h2 className={homeStyle.cont__home_titles}>{props.title}</h2>

      {props.section === "aggiudicazioni" && (
        <ul className={homeStyle.cont__home_scores} id="list_service">
          {scores
            .filter((el) => el.place === 1)
            .map((el, index) => (
              <li key={index} onClick={() => openScore(el.title)}>
                <img src={el.image} alt={index} />

                <h3>€ {el.import}</h3>

                <div>
                  {el.place === 1 && <img src={first} alt="First place" />}

                  {el.place === 2 && <img src={second} alt="First place" />}

                  {el.place === 3 && <img src={third} alt="First place" />}

                  <p>
                    {el.title}
                  </p>
                </div>
              </li>
            ))}

          <div
            className={homeStyle.cont__home_scores_opened}
            style={{
              left: open ? "0%" : "-150%",
              opacity: open ? "1" : "0",
              top: position,
            }}
          >
            {scores
              .filter((el) => el.title === title)
              .map((score) => (
                <div
                  className={homeStyle.cont__home_scores_opened_inside}
                  key={score.title}
                >
                  <img src={score.image} alt="1" />

                  <div>
                    <button onClick={() => setOpened(false)}>X</button>

                    {score.place === 1 && <img src={first} alt="First place" />}

                    {score.place === 2 && (
                      <img src={second} alt="First place" />
                    )}

                    {score.place === 3 && <img src={third} alt="First place" />}

                    <h2>{score.title}</h2>

                    <p>{score.text}</p>

                    <h3>Importo: € {score.import}</h3>
                    <h3>Categorie: {score.category}</h3>
                  </div>
                </div>
              ))}
          </div>
        </ul>
      )}

      {props.section === "home" && (
        <ul className={homeStyle.cont__home_scores} id="list_service">
          {scores.map((el, index) => (
            <li key={index} onClick={() => openScore(el.title)}>
              <img src={el.image} alt={index} />

              <h3>€ {el.import}</h3>

              <div>
                {el.place === 1 && <img src={first} alt="First place" />}

                {el.place === 2 && <img src={second} alt="First place" />}

                {el.place === 3 && <img src={third} alt="First place" />}

                <p>
                  {el.title}
                </p>
              </div>
            </li>
          ))}

          <div
            className={homeStyle.cont__home_scores_opened}
            style={{ left: open ? "0%" : "-150%", opacity: open ? "1" : "0" }}
          >
            {scores
              .filter((el) => el.title === title)
              .map((score) => (
                <div
                  className={homeStyle.cont__home_scores_opened_inside}
                  key={score.title}
                >
                  <img src={score.image} alt="1" />

                  <div>
                    <button onClick={() => setOpened(false)}>X</button>

                    {score.place === 1 && <img src={first} alt="First place" />}

                    {score.place === 2 && (
                      <img src={second} alt="First place" />
                    )}

                    {score.place === 3 && <img src={third} alt="First place" />}

                    <h2>{score.title}</h2>

                    <p>{score.text}</p>

                    <h3>Importo: € {score.import}</h3>
                    <h3>Categorie: {score.category}</h3>
                  </div>
                </div>
              ))}
          </div>
        </ul>
      )}
    </>
  );
}

export default LastScore;
