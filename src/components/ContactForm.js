import React, { useState, useEffect} from "react";
import contactStyle from "../utilities/styles/output/contactComponent.module.css";
import formmail from "./ContactPage/formmail.php"

function ContactForm(props) {
  const [clicked, setClick] = useState(false);

  function showCV(e) {
    e.preventDefault();
    setClick(clicked ? false : true);
  }

  useEffect(() => {
      document.title = "Lavora con Noi - Co-Project Studio"
  })

  return (
    <>
      <h2 className={contactStyle.cont__form_title}>Lavora con noi</h2>

      <form method="POST" className={contactStyle.cont__form} action={formmail}>
        <div>
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" />
        </div>

        <div>
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>

        <div>
          <label for="telefono">Telefono</label>
          <input type="text" id="telefono" name="telefono" />
        </div>

        {clicked && (
          <div>
            <label for="CV">CV</label>
            <input type="file" id="telefono" name="telefono" />
          </div>
        )}

        {props.section ===
          "workWithUs" && (
            <div>
              <label for="CV">CV</label>
              <input type="file" id="telefono" name="telefono" />
            </div>
          )}

        <div id="message">
          <label for="messaggio">Messaggio</label>
          <textarea rows="8"></textarea>
        </div>

        {props.section !==
          "workWithUs" &&(
            <button onClick={(e) => showCV(e)}>lavora con noi</button>
          )}
      </form>
    </>
  );
}

export default ContactForm;
