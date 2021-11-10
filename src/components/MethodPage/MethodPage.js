import React from "react";
import Intro from "../Header/Intro";
import methodStyle from "../../utilities/styles/output/section.module.css";
import Image_1 from "../../utilities/media/img/chi_siamo_icona_capacita.png";
import Image_2 from "../../utilities/media/img/chi_siamo_icona_illustrazione.svg";
import Image_3 from "../../utilities/media/img/nostro_metodo.svg";

import servizi_1 from "../../utilities/media/img/servizi_1.jpg";
import servizi_2 from "../../utilities/media/img/servizi_2.jpg";
import servizi_3 from "../../utilities/media/img/servizi_3.jpg";

function MethodPage() {
  return (
    <div className={methodStyle.cont__about}>
      <Intro section="methodPage" title="Il Nostro Metodo" />

      <div className={methodStyle.cont__about_division}>
        <img
          src={servizi_2}
          alt="Servizi 2"
          className={methodStyle.cont__about_images}
        />

        <div className={methodStyle.cont__about_mission} id="about">
          <div className={methodStyle.cont__about_mission_title}>
            <img
              src={Image_3}
              alt="CoProject Studio - Capacità Comunicativa degli Elaborati"
            />
            <h2>IL NOSTRO METODO</h2>
          </div>

          <p>
            Un <b>errore</b> comune è pensare che per vincere una gara bisogni
            spingersi con i ribassi economici e destinare all’offerta tecnica
            l’importo residuo o viceversa. <b>Il nostro metodo</b> si pone come
            soluzione integrata tra <b>l’offerta economica</b> e{" "}
            <b>l’offerta tecnica.</b> Applicando un <b>accurato calcolo</b> sul
            metodo aggregativo-compensatore delle formule di attribuzione dei
            punteggi, proponiamo all’impresa delle simulazioni sull’
            <b> offerta complessiva</b> tecnico-economica e sulle percentuali da
            destinare ad ognuna delle due in funzione dei punteggi previsti. La
            scelta delle migliorie viene affrontata dunque{" "}
            <b>ottimizzando il Budget</b> a disposizione. Durante l’elaborazione
            dell’offerta tecnica redigiamo
            <b> Report informativi</b> per aggiornare l’impresa
            sull’elaborazione della stessa e <b>guidarla</b> nell’offerta
            complessiva tecnico-economica.
          </p>
        </div>
      </div>

      <div className={methodStyle.cont__about_division}>
        <div className={methodStyle.cont__about_mission} id="about">
          <div className={methodStyle.cont__about_mission_title}>
            <img
              src={Image_1}
              alt="CoProject Studio - Capacità Comunicativa degli Elaborati"
            />
            <h2>CAPACITÀ COMUNICATIVA DEGLI ELABORATI</h2>
          </div>

          <p>
            La <b>predisposizione</b> degli elaborati viene affrontata
            ottimizzandone
            <b> l’utilizzo</b>. È statisticamente provato che un’
            <b>offerta chiara</b> e ben imbastita ha maggiori probabilità di
            vittoria. La nostra offerta tecnica prevede elaborati minimi
            (relazione tecnica, <b>elaborati grafici</b>, computo metrico,
            fascicolo schede tecniche) tra loro connessi e codificati che si
            completano a vicenda per un’<b>esposizione inequivocabile</b>{" "}
            dell’offerta.
          </p>
        </div>

        <img
          src={servizi_1}
          alt="Servizi 1"
          className={methodStyle.cont__about_images}
        />
      </div>

      <div className={methodStyle.cont__about_division}>
        <img
          src={servizi_3}
          alt="Servizi 3"
          className={methodStyle.cont__about_images}
        />
        
        <div className={methodStyle.cont__about_mission} id="grey">
          <div className={methodStyle.cont__about_mission_title}>
            <img
              src={Image_2}
              alt="CoProject Studio - ILLUSTRAZIONE
            GRAFICA E
            DESCRITTIVA
            DELL’OFFERTA"
            />

            <h2>ILLUSTRAZIONE GRAFICA E DESCRITTIVA DELL’OFFERTA</h2>
          </div>

          <p>
            <b>Saper comunicare</b> la qualità dell’offerta è una consapevolezza
            che ci permette di raggiungere sempre <b>ottimi risultati</b>. I
            nostri elaborati vengono curati in ogni <b>dettaglio</b>. La
            relazione tecnica non ha mai
            <b> carattere generico</b>, è sempre un elaborato saturo con un alto
            indice di specificità e da cui si evince tutto quello che è parte
            dell’offerta.
            <br />
            <br />
            Non si limita a menzionare le proposte migliorative, ma ne{" "}
            <b>descrive motivazioni</b> e <b>miglioramenti</b> derivanti in
            risposta alle richieste dei criteri o sub-criteri per ottenere il
            <b>maggior punteggio possibile</b>. <br />
            <br />
            <b></b>Utilizziamo gli <b>elaborati grafici</b> come illustrazione
            grafica di ciò che proponiamo e come <b>sintesi</b> dell’offerta
            tecnica. <br />
            <br /> Spesso le
            <b> commissioni esaminatrici</b>, a causa del numero di offerte da
            valutare e del poco tempo a disposizione{" "}
            <b>sfogliano velocemente</b> gli elaborati, una sintetizzazione
            grafica e schematica spesso è quel <b>valore aggiunto</b> che può{" "}
            <b>fare la differenza</b> rispetto agli altri concorrenti.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MethodPage;
