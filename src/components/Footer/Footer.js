import React from "react";
import { Link } from "react-router-dom";
import footerStyle from "../../utilities/styles/output/footer.module.css";

import LogoFooter from "../../utilities/media/img/logo_bianco.png";
import LogoFooterAicon from "../../utilities/media/img/logoaicon.png";

function Footer() {
  return (
    <div className={footerStyle.cont__footer}>
      <div className={footerStyle.cont__footer_logoSocial}>
        <Link to="/">
          <img
            className={footerStyle.cont__footer_logoSocial_logo}
            src={LogoFooter}
            alt="Logo Footer CoProject"
          />
        </Link>

        <ul className={footerStyle.cont__footer_logoSocial_social}>
          <li>
            <a href="https://www.instagram.com/coproject_studio/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34.19"
                height="34.19"
                viewBox="0 0 34.19 34.19"
              >
                <path
                  id="Tracciato_14"
                  data-name="Tracciato 14"
                  d="M1366.132,182.913a5.7,5.7,0,1,1,5.7,5.7,5.7,5.7,0,0,1-5.7-5.7m-3.081,0a8.779,8.779,0,1,0,8.779-8.778,8.779,8.779,0,0,0-8.779,8.778m15.853-9.125a2.051,2.051,0,1,0,2.051-2.051,2.051,2.051,0,0,0-2.051,2.051m-13.982,23.04a9.458,9.458,0,0,1-3.174-.588,5.669,5.669,0,0,1-3.245-3.245,9.456,9.456,0,0,1-.588-3.174c-.082-1.8-.1-2.343-.1-6.908s.018-5.1.1-6.908a9.469,9.469,0,0,1,.588-3.174,5.671,5.671,0,0,1,3.245-3.244,9.451,9.451,0,0,1,3.174-.589c1.8-.082,2.343-.1,6.908-.1s5.105.017,6.908.1a9.457,9.457,0,0,1,3.174.589,5.658,5.658,0,0,1,3.244,3.244,9.465,9.465,0,0,1,.589,3.174c.082,1.8.1,2.344.1,6.908s-.017,5.106-.1,6.908a9.453,9.453,0,0,1-.589,3.174,5.656,5.656,0,0,1-3.244,3.245,9.464,9.464,0,0,1-3.174.588c-1.8.083-2.343.1-6.908.1s-5.1-.017-6.908-.1m-.14-30.906a12.516,12.516,0,0,0-4.15.794,8.745,8.745,0,0,0-5,5,12.53,12.53,0,0,0-.8,4.149c-.083,1.823-.1,2.4-.1,7.048s.02,5.225.1,7.049a12.53,12.53,0,0,0,.8,4.149,8.745,8.745,0,0,0,5,5,12.542,12.542,0,0,0,4.15.794c1.823.083,2.405.1,7.048.1s5.225-.02,7.048-.1a12.541,12.541,0,0,0,4.15-.794,8.737,8.737,0,0,0,5-5,12.533,12.533,0,0,0,.8-4.149c.083-1.824.1-2.406.1-7.049s-.02-5.225-.1-7.048a12.533,12.533,0,0,0-.8-4.149,8.738,8.738,0,0,0-5-5,12.516,12.516,0,0,0-4.15-.794c-1.823-.084-2.405-.1-7.048-.1s-5.225.02-7.048.1"
                  transform="translate(-1354.735 -165.818)"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/CoProjectStudio">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.181"
                height="31.181"
                viewBox="0 0 31.181 31.181"
              >
                <g
                  id="Raggruppa_11"
                  data-name="Raggruppa 11"
                  transform="translate(-1114.239 -167.323)"
                >
                  <g id="Raggruppa_10" data-name="Raggruppa 10">
                    <path
                      id="Tracciato_13"
                      data-name="Tracciato 13"
                      d="M1141.219,167.323h-22.778a4.2,4.2,0,0,0-4.2,4.2V194.3a4.2,4.2,0,0,0,4.2,4.2h11.234l.019-11.142h-2.9a.683.683,0,0,1-.683-.681l-.014-3.592a.683.683,0,0,1,.683-.685h2.89v-3.471c0-4.027,2.46-6.22,6.052-6.22h2.949a.683.683,0,0,1,.683.683v3.028a.683.683,0,0,1-.683.683h-1.809c-1.954,0-2.333.929-2.333,2.291V182.4h4.294a.683.683,0,0,1,.678.763l-.426,3.592a.683.683,0,0,1-.678.6h-3.848l-.02,11.142h6.685a4.2,4.2,0,0,0,4.2-4.2V171.524a4.2,4.2,0,0,0-4.2-4.2Zm0,0"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.763"
                height="21.763"
                viewBox="0 0 21.763 21.763"
              >
                <path
                  id="Twitter_social_icons_-_circle_-_white"
                  data-name="Twitter social icons - circle - white"
                  d="M21.763,10.881A10.881,10.881,0,1,1,10.881,0,10.878,10.878,0,0,1,21.763,10.881ZM8.89,16.621a7.414,7.414,0,0,0,7.465-7.465c0-.114,0-.229-.005-.337a5.375,5.375,0,0,0,1.311-1.36,5.325,5.325,0,0,1-1.507.413A2.622,2.622,0,0,0,17.307,6.42a5.313,5.313,0,0,1-1.665.637,2.625,2.625,0,0,0-4.538,1.8,2.4,2.4,0,0,0,.071.6A7.443,7.443,0,0,1,5.767,6.708a2.622,2.622,0,0,0,.816,3.5A2.577,2.577,0,0,1,5.4,9.88v.033A2.626,2.626,0,0,0,7.5,12.486a2.615,2.615,0,0,1-.691.092,2.5,2.5,0,0,1-.5-.049,2.62,2.62,0,0,0,2.448,1.823,5.274,5.274,0,0,1-3.259,1.121,4.771,4.771,0,0,1-.626-.038,7.309,7.309,0,0,0,4.01,1.186"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/company/coproject-studio-gare-d-appalto-progettazione/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.763"
                height="21.763"
                viewBox="0 0 21.763 21.763"
              >
                <path
                  id="iconmonstr-linkedin-3"
                  d="M17.229,0H4.534A4.534,4.534,0,0,0,0,4.534v12.7a4.534,4.534,0,0,0,4.534,4.534h12.7a4.534,4.534,0,0,0,4.534-4.534V4.534A4.534,4.534,0,0,0,17.229,0ZM7.254,17.229H4.534V7.254h2.72ZM5.894,6.1A1.6,1.6,0,1,1,7.481,4.5,1.594,1.594,0,0,1,5.894,6.1ZM18.136,17.229h-2.72V12.147c0-3.054-3.627-2.823-3.627,0v5.082H9.068V7.254h2.72v1.6c1.266-2.345,6.348-2.518,6.348,2.245Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <ul className={footerStyle.cont__footer_contactList}>
        <div>
          <li>Sede Operativa Teano:</li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.527"
              height="14.534"
              viewBox="0 0 10.527 14.534"
            >
              <g id="maps-and-flags" transform="translate(-70.573)">
                <g
                  id="Raggruppa_1"
                  data-name="Raggruppa 1"
                  transform="translate(70.573)"
                >
                  <path
                    id="Tracciato_1"
                    data-name="Tracciato 1"
                    d="M75.837,0a5.27,5.27,0,0,0-5.264,5.264c0,3.6,4.71,8.89,4.911,9.113a.474.474,0,0,0,.705,0c.2-.223,4.911-5.511,4.911-9.113A5.27,5.27,0,0,0,75.837,0Zm0,7.912a2.648,2.648,0,1,1,2.648-2.648A2.651,2.651,0,0,1,75.837,7.912Z"
                    transform="translate(-70.573)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>

            <a href="https://goo.gl/maps/Up86yUMGbpwVirLX6">Via Antonio Gramsci, 1 – 81057 Teano (CE)</a>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.94"
              height="12.938"
              viewBox="0 0 12.94 12.938"
            >
              <path
                id="Tracciato_81"
                data-name="Tracciato 81"
                d="M30.313,27.8l-.064-.194a1.82,1.82,0,0,0-1.112-1.051l-1.7-.465a1.667,1.667,0,0,0-1.456.381l-.615.615a6.528,6.528,0,0,1-4.594-4.595l.615-.615a1.665,1.665,0,0,0,.381-1.455l-.464-1.7a1.818,1.818,0,0,0-1.052-1.111l-.194-.065a1.544,1.544,0,0,0-1.438.34l-.921.921a1.716,1.716,0,0,0-.27.633A10.865,10.865,0,0,0,28.392,30.428a1.71,1.71,0,0,0,.662-.267l.921-.92A1.544,1.544,0,0,0,30.313,27.8Z"
                transform="translate(-17.428 -17.491)"
                fill="#fff"
              />
            </svg>

            <a href="tel:+08231700152">0823 1700152</a>
          </li>
        </div>

        <div>
          <li>Sede Operativa Milano:</li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.527"
              height="14.534"
              viewBox="0 0 10.527 14.534"
            >
              <g id="maps-and-flags" transform="translate(-70.573)">
                <g
                  id="Raggruppa_1"
                  data-name="Raggruppa 1"
                  transform="translate(70.573)"
                >
                  <path
                    id="Tracciato_1"
                    data-name="Tracciato 1"
                    d="M75.837,0a5.27,5.27,0,0,0-5.264,5.264c0,3.6,4.71,8.89,4.911,9.113a.474.474,0,0,0,.705,0c.2-.223,4.911-5.511,4.911-9.113A5.27,5.27,0,0,0,75.837,0Zm0,7.912a2.648,2.648,0,1,1,2.648-2.648A2.651,2.651,0,0,1,75.837,7.912Z"
                    transform="translate(-70.573)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>

            <a href="https://goo.gl/maps/yJtnJC2yXn7WkhuHA">P.zzale Antonio Baiamonti, 3 - 20154 Milano (MI)</a>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.94"
              height="12.938"
              viewBox="0 0 12.94 12.938"
            >
              <path
                id="Tracciato_81"
                data-name="Tracciato 81"
                d="M30.313,27.8l-.064-.194a1.82,1.82,0,0,0-1.112-1.051l-1.7-.465a1.667,1.667,0,0,0-1.456.381l-.615.615a6.528,6.528,0,0,1-4.594-4.595l.615-.615a1.665,1.665,0,0,0,.381-1.455l-.464-1.7a1.818,1.818,0,0,0-1.052-1.111l-.194-.065a1.544,1.544,0,0,0-1.438.34l-.921.921a1.716,1.716,0,0,0-.27.633A10.865,10.865,0,0,0,28.392,30.428a1.71,1.71,0,0,0,.662-.267l.921-.92A1.544,1.544,0,0,0,30.313,27.8Z"
                transform="translate(-17.428 -17.491)"
                fill="#fff"
              />
            </svg>

            <a href="tel:+393287245625">+39 328 724 5625</a>
          </li>
        </div>

        <div>
          <li>Segreteria/Amministrazione: </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14"
              height="9"
              viewBox="0 0 14 9"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rettangolo_21"
                    data-name="Rettangolo 21"
                    width="14"
                    height="9"
                    transform="translate(-0.309 0.529)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g
                id="Raggruppa_41"
                data-name="Raggruppa 41"
                transform="translate(0.309 -0.528)"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Tracciato_81"
                  data-name="Tracciato 81"
                  d="M13.381,1.577v6.4A1.577,1.577,0,0,1,11.8,9.558H1.577A1.577,1.577,0,0,1,0,7.981v-6.4A1.568,1.568,0,0,1,.111,1L6.427,5.179a.478.478,0,0,0,.526,0L13.261.986a1.565,1.565,0,0,1,.12.591M12.646.248A1.559,1.559,0,0,0,11.8,0H1.577a1.557,1.557,0,0,0-.86.257L6.691,4.206Z"
                  transform="translate(0 0.07)"
                  fill="#fff"
                />
              </g>
            </svg>

            <a href="mailto:info@coproject-studio.it">
              info@coproject-studio.it
            </a>
          </li>
        </div>

        <div>
          <li>Ufficio Gare:</li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14"
              height="9"
              viewBox="0 0 14 9"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rettangolo_21"
                    data-name="Rettangolo 21"
                    width="14"
                    height="9"
                    transform="translate(-0.309 0.529)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g
                id="Raggruppa_41"
                data-name="Raggruppa 41"
                transform="translate(0.309 -0.528)"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Tracciato_81"
                  data-name="Tracciato 81"
                  d="M13.381,1.577v6.4A1.577,1.577,0,0,1,11.8,9.558H1.577A1.577,1.577,0,0,1,0,7.981v-6.4A1.568,1.568,0,0,1,.111,1L6.427,5.179a.478.478,0,0,0,.526,0L13.261.986a1.565,1.565,0,0,1,.12.591M12.646.248A1.559,1.559,0,0,0,11.8,0H1.577a1.557,1.557,0,0,0-.86.257L6.691,4.206Z"
                  transform="translate(0 0.07)"
                  fill="#fff"
                />
              </g>
            </svg>

            <a href="mailto:gare@coproject-studio.it">
              gare@coproject-studio.it
            </a>
          </li>
        </div>
      </ul>

      <div className={footerStyle.cont__footer_underFooter}>
        <p>Copyright CoProject - Powered by</p>
        <img src={LogoFooterAicon} alt="Logo Footer Aicon" />
      </div>
    </div>
  );
}

export default Footer;
