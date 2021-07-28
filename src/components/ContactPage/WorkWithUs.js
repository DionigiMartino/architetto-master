import React from "react";
import Intro from "../Header/Intro";
import contactStyle from "../../utilities/styles/output/section.module.css";
import ContactForm from "../ContactForm";

function ContactPage() {
  return (
    <div className={contactStyle.cont__about}>
      <Intro section="lavora_con_noi" title="Lavora con noi" />

      <ContactForm section="workWithUs" />
    </div>
  );
}

export default ContactPage;
