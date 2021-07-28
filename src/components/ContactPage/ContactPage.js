import React from "react";
import Intro from "../Header/Intro";
import contactStyle from "../../utilities/styles/output/section.module.css";
import ContactForm from "../ContactForm";

import footerStyle from "../../utilities/styles/output/footer.module.css";

function ContactPage() {
  return (
    <div className={contactStyle.cont__about}>
      <Intro section="contact" title="Contatti" />

      <p style={{ textAlign: "center" }}>
        Se hai domande inerenti ai nostri servizi,{" "}
        <b>non esitare a contattarci </b>
        compilando il modulo sottostante, ci metteremo al più presto in contatto
        con te.
      </p>

      <div className={contactStyle.cont__about_descr_firstSection}>
        <div className={contactStyle.cont__about_descr_firstSection_info}>
          <ul className={footerStyle.cont__footer_contactList} id="contatti">
            <div>
              <li>Sede Operativa Teano:</li>

              <li>
                <a href="/">Via Antonio Gramsci, 1 – 81057 Teano (CE)</a>
              </li>

              <li>
                <a href="tel:+08231700152">0823 1700152</a>
              </li>
            </div>

            <div>
              <li>Sede Operativa Milano:</li>

              <li>
                <a href="/">P.zzale Antonio Baiamonti 3, 20154 Milano</a>
              </li>

              <li>
                <a href="tel:+393287245625">+39 328 724 5625</a>
              </li>
            </div>

            <div>
              <li>Segreteria/Amministrazione: </li>

              <li>
                <a href="mailto:info@coproject-studio.it">
                  info@coproject-studio.it
                </a>
              </li>

              <li>Ufficio Gare:</li>

              <li>
                <a href="mailto:gare@coproject-studio.it">
                  gare@coproject-studio.it
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className={contactStyle.cont__about_descr_maps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.547918271447!2d14.061003215696351!3d41.253404512252764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133aee52bdeeaaab%3A0xc1d896a84a182f6!2sVia%20Antonio%20Gramsci%2C%201%2C%2081057%20Teano%20CE!5e0!3m2!1sit!2sit!4v1625991809166!5m2!1sit!2sit"
            allowfullscreen=""
            loading="lazy"
            className={contactStyle.cont__about_descr_maps_inside}
            title="Mappa Teano"
          ></iframe>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.3709986057274!2d9.178858215794072!3d45.48247334024445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1312b28bcf7%3A0x7fead8291a3b3f24!2sP.za%20Antonio%20Baiamonti%2C%203%2C%2020154%20Milano%20MI!5e0!3m2!1sit!2sit!4v1625992450772!5m2!1sit!2sit"
            allowfullscreen=""
            loading="lazy"
            className={contactStyle.cont__about_descr_maps_inside}
            title="Mappa Milano"
          ></iframe>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default ContactPage;
