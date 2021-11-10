import React, { useEffect } from "react";
import Intro from "../Header/Intro";
import contactStyle from "../../utilities/styles/output/section.module.css";
import ContactForm from "../ContactForm";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={contactStyle.cont__about}>
      <Intro section="contact" title="Contatti" />

      <p>
        Se hai domande inerenti ai nostri servizi,{" "}
        <b>non esitare a contattarci </b>
        compilando il modulo sottostante, ci metteremo al più presto in contatto
        con te.
      </p>

      <div className={contactStyle.cont__about_descr_firstSection}>
        <h3>
          <b>
            CoProject Studio riferimenti: <br /> e-mail:
          </b>{" "}
          info@coproject-studio.it
        </h3>

        <h3>
          Arch. <b>Pierluigi Del Villano</b> | Founder <br />
          Responsabile ufficio gare <br />
          Cell: +39 328 724 5625
        </h3>

        <h3>
          <b>Orari di Apertura</b> <br />
          Lun - Ven 9:00 - 18:00 <br />
          Sab - Dom Chiuso
        </h3>
      </div>

      <ContactForm />
    </div>
  );
}

export default ContactPage;
