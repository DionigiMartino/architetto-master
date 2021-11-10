import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerModule from "../../utilities/styles/output/header.module.css";

import Logo from "../../utilities/media/img/logo_coproject.png";

function Header() {
  const [open, openMenu] = useState(false);

  setTimeout(() => {
    const scrollEvent = () => {
      if (window.scrollY >= 1) {
        document.getElementById("menu").style.backgroundColor = "#fff";
        document.getElementById("menu").style.transition =
          "background-color .7s";
      } else {
        document.getElementById("menu").style.backgroundColor = "transparent";
        document.getElementById("menu").style.transition = "transform .7s";
      }
    };

    window.addEventListener("scroll", scrollEvent);
  }, 1000);

  return (
    <div className={headerModule.cont__header}>
      <div className={headerModule.cont__header_inside} id="menu">
        <Link to="/">
          <img src={Logo} alt="CoProject" />
        </Link>

        <svg
          id="align-right-2"
          xmlns="http://www.w3.org/2000/svg"
          width="25.689"
          height="21.245"
          viewBox="0 0 25.689 21.245"
          onClick={() => openMenu(true)}
        >
          <path
            id="Path"
            d="M1.857,0H23.835a1.862,1.862,0,0,1,1.853,1.835v.747a1.855,1.855,0,0,1-1.853,1.851H1.857A1.855,1.855,0,0,1,0,2.587V1.838A1.862,1.862,0,0,1,1.857,0Z"
            transform="translate(0 0)"
            fill="#393e3f"
          />
          <path
            id="Path-2"
            data-name="Path"
            d="M1.857,0H23.835a1.862,1.862,0,0,1,1.853,1.835v.752A1.855,1.855,0,0,1,23.835,4.44H1.857A1.855,1.855,0,0,1,0,2.587V1.838A1.862,1.862,0,0,1,1.857,0Z"
            transform="translate(0 8.405)"
            fill="#393e3f"
          />
          <path
            id="Path-3"
            data-name="Path"
            d="M1.853,0H11.917A1.862,1.862,0,0,1,13.77,1.835V2.58a1.855,1.855,0,0,1-1.853,1.853H1.853A1.855,1.855,0,0,1,0,2.58V1.833A1.862,1.862,0,0,1,1.853,0Z"
            transform="translate(11.919 16.812)"
            fill="#393e3f"
          />
        </svg>

        <ul className={headerModule.cont__header_menu_desktop}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/chiSiamo">CHI SIAMO</Link>
          </li>

          <li>
            <Link to="/offerteTecniche">Servizi</Link>
          </li>

          <li>
            <Link to="/ilNostroMetodo">Il nostro metodo</Link>
          </li>

          {/*  
            <li>
              <Link to="/news">Notizie</Link>
            </li>
          */}

          <li>
            <Link to="/tuttiGliEsiti">Galleria</Link>
          </li>

          <li>
            <Link to="/preventivo">Chiedi un Preventivo</Link>
          </li>

          <li>
            <Link to="/contatti">Contatti</Link>
          </li>
        </ul>
      </div>

      <div
        className={headerModule.cont__header_menu}
        style={{ transform: open ? "translateY(0)" : "translateY(-101%)" }}
      >
        <svg
          id="align-right-2"
          xmlns="http://www.w3.org/2000/svg"
          width="25.689"
          height="21.245"
          viewBox="0 0 25.689 21.245"
          onClick={() => openMenu(false)}
        >
          <path
            id="Path"
            d="M1.857,0H23.835a1.862,1.862,0,0,1,1.853,1.835v.747a1.855,1.855,0,0,1-1.853,1.851H1.857A1.855,1.855,0,0,1,0,2.587V1.838A1.862,1.862,0,0,1,1.857,0Z"
            transform="translate(0 0)"
            fill="#393e3f"
          />
          <path
            id="Path-2"
            data-name="Path"
            d="M1.857,0H23.835a1.862,1.862,0,0,1,1.853,1.835v.752A1.855,1.855,0,0,1,23.835,4.44H1.857A1.855,1.855,0,0,1,0,2.587V1.838A1.862,1.862,0,0,1,1.857,0Z"
            transform="translate(0 8.405)"
            fill="#393e3f"
          />
          <path
            id="Path-3"
            data-name="Path"
            d="M1.853,0H11.917A1.862,1.862,0,0,1,13.77,1.835V2.58a1.855,1.855,0,0,1-1.853,1.853H1.853A1.855,1.855,0,0,1,0,2.58V1.833A1.862,1.862,0,0,1,1.853,0Z"
            transform="translate(11.919 16.812)"
            fill="#393e3f"
          />
        </svg>

        <ul>
          <li>
            <Link onClick={() => openMenu(false)} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={() => openMenu(false)} to="/chiSiamo">
              Chi Siamo
            </Link>
          </li>

          <li>
            <Link onClick={() => openMenu(false)} to="/ilNostroMetodo">
              Il Nostro Metodo
            </Link>
          </li>

          <li>
            <Link onClick={() => openMenu(false)} to="/offerteTecniche">
              Servizi
            </Link>
          </li>

          
          {/*  
            <li>
              <Link to="/news">Notizie</Link>
            </li>
          */}

          <li>
            <Link onClick={() => openMenu(false)} to="/tuttiGliEsiti">
              Galleria
            </Link>
          </li>

          <li>
            <Link to="/preventivo">Chiedi un Preventivo</Link>
          </li>

          <li>
            <Link onClick={() => openMenu(false)} to="/contatti">
              Contatti
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
