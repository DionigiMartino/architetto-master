import React, { useState } from "react";
import galleryStyle from "../../utilities/styles/output/section.module.css";
import { Slide } from "react-slideshow-image";
import homeStyle from "../../utilities/styles/output/homeStyle.module.css";

import "react-slideshow-image/dist/styles.css";

// alloggi verona

import cover1 from "../../utilities/media/img/galleryPage/alloggiverona/1.jpg";
import cover1_2 from "../../utilities/media/img/galleryPage/alloggiverona/2.jpg";
import cover1_3 from "../../utilities/media/img/galleryPage/alloggiverona/3.jpg";
import cover1_4 from "../../utilities/media/img/galleryPage/alloggiverona/4.jpg";
import cover1_5 from "../../utilities/media/img/galleryPage/alloggiverona/5.jpg";

import cover2 from "../../utilities/media/img/galleryPage/amatrice/1.jpg";
import cover2_2 from "../../utilities/media/img/galleryPage/amatrice/2.jpg";
import cover2_3 from "../../utilities/media/img/galleryPage/amatrice/3.jpg";
import cover2_4 from "../../utilities/media/img/galleryPage/amatrice/4.jpg";
import cover2_5 from "../../utilities/media/img/galleryPage/amatrice/5.jpg";

import cover4 from "../../utilities/media/img/galleryPage/appintpesaro/1.jpg";
import cover4_2 from "../../utilities/media/img/galleryPage/appintpesaro/2.jpg";
import cover4_3 from "../../utilities/media/img/galleryPage/appintpesaro/3.jpg";
import cover4_4 from "../../utilities/media/img/galleryPage/appintpesaro/4.jpg";
import cover4_5 from "../../utilities/media/img/galleryPage/appintpesaro/5.jpg";

import cover5 from "../../utilities/media/img/galleryPage/BENEVENTO/1.jpg";
import cover5_3 from "../../utilities/media/img/galleryPage/BENEVENTO/3.jpg";
import cover5_4 from "../../utilities/media/img/galleryPage/BENEVENTO/4.jpg";
import cover5_5 from "../../utilities/media/img/galleryPage/BENEVENTO/5.jpg";

import cover7 from "../../utilities/media/img/galleryPage/casermamilano/1.jpg";
import cover7_2 from "../../utilities/media/img/galleryPage/casermamilano/2.jpg";

import cover8 from "../../utilities/media/img/galleryPage/fabrosasoprana/1.jpg";
import cover8_2 from "../../utilities/media/img/galleryPage/fabrosasoprana/2.jpg";
import cover8_3 from "../../utilities/media/img/galleryPage/fabrosasoprana/3.jpg";
import cover8_4 from "../../utilities/media/img/galleryPage/fabrosasoprana/4.jpg";

import cover9 from "../../utilities/media/img/galleryPage/Fano/1.jpg";
import cover9_2 from "../../utilities/media/img/galleryPage/Fano/2.jpg";
import cover9_3 from "../../utilities/media/img/galleryPage/Fano/3.jpg";
import cover9_4 from "../../utilities/media/img/galleryPage/Fano/4.jpg";

import cover12 from "../../utilities/media/img/galleryPage/Marcontreviso/1.jpg";
import cover12_2 from "../../utilities/media/img/galleryPage/Marcontreviso/2.jpg";

import cover13 from "../../utilities/media/img/galleryPage/MELZO/1.jpg";
import cover13_2 from "../../utilities/media/img/galleryPage/MELZO/2.jpg";

import cover15 from "../../utilities/media/img/galleryPage/postradetrieste/1.jpg";
import cover15_2 from "../../utilities/media/img/galleryPage/postradetrieste/2.jpg";
import cover15_3 from "../../utilities/media/img/galleryPage/postradetrieste/3.jpg";
import cover15_4 from "../../utilities/media/img/galleryPage/postradetrieste/4.jpg";
import cover15_5 from "../../utilities/media/img/galleryPage/postradetrieste/5.jpg";

import cover16 from "../../utilities/media/img/galleryPage/Pre-SaintDidier/1.jpg";
import cover16_2 from "../../utilities/media/img/galleryPage/Pre-SaintDidier/2.jpg";
import cover16_3 from "../../utilities/media/img/galleryPage/Pre-SaintDidier/3.jpg";
import cover16_4 from "../../utilities/media/img/galleryPage/Pre-SaintDidier/4.jpg";
import cover16_5 from "../../utilities/media/img/galleryPage/Pre-SaintDidier/5.jpg";

import cover17 from "../../utilities/media/img/galleryPage/rimini/1.jpg";
import cover17_2 from "../../utilities/media/img/galleryPage/rimini/2.jpg";
import cover17_3 from "../../utilities/media/img/galleryPage/rimini/3.jpg";
import cover17_4 from "../../utilities/media/img/galleryPage/rimini/4.jpg";
import cover17_5 from "../../utilities/media/img/galleryPage/rimini/5.jpg";

import cover20 from "../../utilities/media/img/galleryPage/ScuolaJonaAsti/1.jpg";
import cover20_2 from "../../utilities/media/img/galleryPage/ScuolaJonaAsti/2.jpg";
import cover20_3 from "../../utilities/media/img/galleryPage/ScuolaJonaAsti/3.jpg";
import cover20_4 from "../../utilities/media/img/galleryPage/ScuolaJonaAsti/4.jpg";
import cover20_5 from "../../utilities/media/img/galleryPage/ScuolaJonaAsti/5.jpg";

import cover21 from "../../utilities/media/img/galleryPage/scuolapesaro/1.jpg";
import cover21_2 from "../../utilities/media/img/galleryPage/scuolapesaro/2.jpg";
import cover21_3 from "../../utilities/media/img/galleryPage/scuolapesaro/3.jpg";
import cover21_4 from "../../utilities/media/img/galleryPage/scuolapesaro/4.jpg";
import cover21_5 from "../../utilities/media/img/galleryPage/scuolapesaro/5.jpg";

import cover22 from "../../utilities/media/img/galleryPage/scuolaterranova/1.jpg";
import cover22_2 from "../../utilities/media/img/galleryPage/scuolaterranova/2.jpg";
import cover22_3 from "../../utilities/media/img/galleryPage/scuolaterranova/3.jpg";
import cover22_4 from "../../utilities/media/img/galleryPage/scuolaterranova/4.jpg";

import cover23 from "../../utilities/media/img/galleryPage/verzuolo/1.jpg";
import cover23_2 from "../../utilities/media/img/galleryPage/verzuolo/2.jpg";
import cover23_3 from "../../utilities/media/img/galleryPage/verzuolo/3.jpg";
import cover23_4 from "../../utilities/media/img/galleryPage/verzuolo/4.jpg";
import cover23_5 from "../../utilities/media/img/galleryPage/verzuolo/5.jpg";

import cover24 from "../../utilities/media/img/galleryPage/pavia/1.jpg";
import cover24_2 from "../../utilities/media/img/galleryPage/pavia/2.jpg";
import cover24_3 from "../../utilities/media/img/galleryPage/pavia/3.jpg";
import cover24_4 from "../../utilities/media/img/galleryPage/pavia/4.jpg";

import cover25 from "../../utilities/media/img/galleryPage/olbia/1.jpg";
import cover26 from "../../utilities/media/img/galleryPage/olbia/2.jpg";

function Gallery() {
  const [open, setOpened] = useState(false);
  const [id, setId] = useState("");
  const [position, setPosition] = useState(0);

  function checkId(value) {
    setOpened(true);
    setId(value);

    setTimeout(() => {
      let positionY = window.scrollY;

      console.log(positionY);
      setPosition(positionY);

      window.scrollTo({
        top: positionY,
        behavior: "smooth",
      });
    }, 0);
  }

  const imagesCover = [
    {
      images: [cover1_5, cover1_2, cover1_3, cover1_4, cover1_5],
      cover: cover1,
      id: 1,
      title:
        "compendio immobiliare austriaco dell'Arsenale Franz Joseph I- 1°Lotto",
      import: "6.745.080,42",
      size: "big",
      description:
        "Offerta Tecnica Migliorativa per l'affidamento lavori degli interventi di restauro conservativo e riqualificazione del compendio immobiliare austriaco dell'Arsenale Franz Joseph I- 1°Lotto",
    },
    {
      images: [cover7_2, cover7_2, cover7_2, cover7_2, cover7_2],
      id: 2,
      cover: cover7,
      size: "big",
      title: "Caserma Santa Barbara - Milano",
      import: "9.012.518,88",
      description:
        "Offerta tecnica migliorativa per l'affidamento dei lavori di demolizione e ricostruzione di fabbricato esistente - Milano",
    },
    {
      images: [cover4_5, cover4_2, cover4_3, cover4_4, cover4_5],
      id: 3,
      cover: cover4,
      size: "big",
      title: "Scuola Media Dante Alighieri",
      import: "5.183.666,13",
      description:
        "Offerta tecnica migliorativa per l'affidamento del servizio di progettazione esecutiva e dell'esecuzione dei lavori di ristrutturazione della scuola media Dante Alighieri. Demolizione e ricostruzione.",
    },
    {
      images: [cover9_4, cover9_2, cover9_3, cover9_4, cover9_3],
      id: 7,
      cover: cover9,
      size: "medium_5",
      title: "Stadio Mancini - Fano",
      import: "634.897,43",
      description:
        "Offerta tecnica migliorativa per l'affidamento dei lavori di di risanamento conservativo dello Stadio Mancini, primo stralcio - 2°Lotto - Fano (PU)",
    },
    {
      images: [cover8_4, cover8_2, cover8_3, cover8_4, cover8_3],
      id: 8,
      cover: cover8,
      title: "Comprensorio Sciistico di Frabosa Soprana",
      import: "637.073,85",
      place: 2,
      description:
        "Offerta tecnica migliorativa per l'affidamento dei lavori di Potenziamento della rete di innevamento programmato nel comprensorio sciistico di Frabosa Soprana",
    },
    {
      images: [cover25, cover25, cover25, cover25, cover25],
      id: 25,
      cover: cover26,
      title: "Rete di acque meteoriche frazione San Pantaleo - Olbia ",
      import: "323.499,69",
      description:
        "Affidamento degli Interventi urgenti di adeguamento della rete di acque meteoriche della frazione di San Pantaleo – II lotto funzionale",
    },
    {
      images: [cover12, cover12, cover12, cover12, cover12],
      id: 12,
      cover: cover12_2,
      size: "transport_2",
      title: "Scuola Primaria - Marcon",
      import: "7.415.998,80",
      description:
        "Offerta tecnica migliorativa per l'affidamento dei lavori di realizzazione di una scuola primaria nel Comune di Marcon (VE)",
    },
    {
      images: [cover21_5, cover21_2, cover21_3, cover21_4, cover21_5],
      id: 21,
      cover: cover21,
      title: "Scuola Primaria - L.Bettini | San Lorenzo in Campo",
      import: "1.160.000,00",
      description:
        "Offerta Tecnica Migliorativa per l'affidamento dei lavori di adeguamento sismico e messa in sicurezza della scuola primaria L. Bettini.",
    },
    {
      images: [cover2_5, cover2_2, cover2_3, cover2_4, cover2_5],
      id: 9,
      cover: cover2,
      title: "Ospedale di Amatrice",
      size: "ultra_big",
      import: "19.989.999,96",
      description:
        "Offerta tecnica migliorativa per l'affidamento dei lavori di ricostruzione dell'Ospedale di Amatrice (RI)",
    },
    {
      images: [cover5_5, cover5_3, cover5_4, cover5_5, cover5_3],
      id: 10,
      cover: cover5,
      size: "ultra_big",
      title: "Compendio Demaniale",
      import: "12.430.500,56",
      description:
        "Offerta tecnica migliorativa per l'affidamento del servizio di progettazione esecutiva e dell'esecuzione dei lavori di ristrutturazione edilizia degli edifici 10 e 11 corpo ad l, per gli usi della guardia di finanza ubicati all'interno del compendio demaniale. ",
    },
    {
      images: [cover20_5, cover20_2, cover20_3, cover20_4, cover20_5],
      id: 18,
      cover: cover20,
      size: "big",
      title: "Scuola Secondaria di I° Grado - Olga e Leopoldo Jona | Asti",
      import: "8.000.000,00",
      description:
        "Affidamento dei lavori di nuova costruzione e sostituzione edificio esistente – scuola secondaria di 1° grado Olga e Leopoldo JONA - Asti",
    },
    {
      images: [cover17_5, cover17_2, cover17_3, cover17_4, cover17_5],
      id: 17,
      cover: cover17,
      size: "big",
      title:
        "Scuola Primaria Luigi Ferrari & Scuola dell'infanzia Via Gambalunga",
      import: "4.307.133,31",
      description:
        "Offerta tecnica migliorativa per l'affidamento di appalto integrato relativo al Piano di interventi strutturali per la sicurezza degli edifici scolastici scuola primaria Luigi Ferrari e scuola dellinfanzia Via Gambalunga - Rimini.",
    },
    {
      images: [cover15_5, cover15_2, cover15_3, cover15_4, cover15_5],
      id: 15,
      cover: cover15,
      size: "big",
      title: "Comprensorio Industriale Stock",
      import: "5.346.414,09",
      description:
        "Offerta tecnica migliorativa per l'affidamento dei lavori di riconversione ex comprensorio industriale Stock - Riqualificazione sede della Polstrada",
    },
    {
      images: [cover13_2, cover13_2, cover13_2, cover13_2, cover13_2],
      id: 13,
      cover: cover13,
      size: "medium_2",
      title: "Immobile Comunale - Melzo",
      import: "3.236.240,82",
      description:
        "Offerta tecnica migliorativa per l'affidamento della progettazione esecutiva e lesecuzione dei lavori di riqualificazione dell'immobile comunale a Melzo - Milano",
    },
    {
      images: [cover16_5, cover16_2, cover16_3, cover16_4, cover16_5],
      id: 19,
      cover: cover16,
      title: "Piscina - Pré-Saint-Didier",
      import: "3.393.723,24",
      description:
        "Offerta tecnica migliorativa per l'affidamento dei lavori di miglioramento architettonico, energetico e strutturale sulla piscina di proprietà regionale - Pré-Saint-Didier (AO)",
    },
    {
      images: [cover22_2, cover22_3, cover22_4, cover22_2, cover22_3],
      id: 22,
      cover: cover22,
      title: "Scuola Media - Torrenova",
      import: "1.225.273,59",
      description:
        "Offerta Tecnica Migliorativa per l'affidamento lavori di ristrutturazione edilizia ed adeguamento sismico scuola media di Via Marconi",
    },
    {
      images: [cover23_5, cover23_2, cover23_3, cover23_4, cover23_5],
      id: 23,
      cover: cover23,
      title: "Edificio Scolastico G.Rivoira - Verzuolo",
      import: "5.699.853,57",
      description:
        "Offerta Tecnica Migliorativa per l'affidamento lavori di realizzazione di nuovo edificio scolastico destinato ad ospitare l'istituto tecnico G. Rivoira di Verzuolo.",
    },
    {
      images: [cover24_2, cover24_3, cover24_4, cover24_2, cover24_3],
      id: 24,
      cover: cover24,
      title: "NUOVO POLO DIDATTICO DI SCIENZE DEL FARMACO - PAVIA",
      import: "7.611.769,82",
      description:
        "Affidamento dei lavori di realizzazione del Nuovo Polo Didattico di Scienze del farmaco – Università di Pavia.",
    },
  ];

  return (
    <div className={galleryStyle.cont__about} id="gallery">
      <ul className={galleryStyle.cont__about_gallery} id="list">
        {imagesCover.map((cover) => (
          <li onClick={() => checkId(cover.id)} id={cover.size} key={cover.id}>
            <img src={cover.cover} alt="Cover" />

            <div>
              <h3>
                {cover.title} <br />
                <br /> € {cover.import}
              </h3>
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
          id="gallery"
        >
          {imagesCover
            .filter((el) => el.id === id)
            .map((image) => (
              <div
                className={galleryStyle.cont__about_slide_container}
                key={image.id}
              >
                <Slide duration={3000} transitionDuration={500}>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${image.images[0]})` }}
                      className={galleryStyle.cont__about_slide}
                    ></div>
                  </div>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${image.images[1]})` }}
                      className={galleryStyle.cont__about_slide}
                    ></div>
                  </div>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${image.images[2]})` }}
                      className={galleryStyle.cont__about_slide}
                    ></div>
                  </div>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${image.images[3]})` }}
                      className={galleryStyle.cont__about_slide}
                    ></div>
                  </div>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${image.images[4]})` }}
                      className={galleryStyle.cont__about_slide}
                    ></div>
                  </div>
                </Slide>
              </div>
            ))}

          {imagesCover
            .filter((el) => el.id === id)
            .map((image) => (
              <div className={homeStyle.cont__home_scores_opened_galleryInside}>
                <h2>{image.title}</h2>

                <p>{image.description}</p>

                <p>Importo: € {image.import}</p>

                <img src={image.cover} alt={image.title} />

                <button
                  className={galleryStyle.cont__about_slide_button}
                  onClick={() => setOpened(false)}
                >
                  X
                </button>
              </div>
            ))}
        </div>
      </ul>
    </div>
  );
}

export default Gallery;
