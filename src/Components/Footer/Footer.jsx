import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="contenedor-footer">
      <section className="contenedor-cuerpo">
        <section className="contenedor-principal">
          <div className="columna">
            <a href="http://">
              <h4 className="espacio">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <rect
                    x="2.41406"
                    y="14.4351"
                    width="6"
                    height="6"
                    rx="2"
                    transform="rotate(-45 2.41406 14.4351)"
                    fill="white"
                  />
                  <rect
                    x="5.65674"
                    y="6.36401"
                    width="9"
                    height="9"
                    rx="2"
                    transform="rotate(-45 5.65674 6.36401)"
                    fill="white"
                  />
                  <rect
                    x="8.07129"
                    y="20.0919"
                    width="6"
                    height="6"
                    rx="2"
                    transform="rotate(-45 8.07129 20.0919)"
                    fill="white"
                  />
                  <rect
                    x="13.728"
                    y="14.4351"
                    width="6"
                    height="6"
                    rx="2"
                    transform="rotate(-45 13.728 14.4351)"
                    fill="white"
                  />
                </svg>
                PLATEFORM
              </h4>
            </a>
          </div>
          <div className="columna">
            <a href="http://">
              <h4 className="espacio">Features</h4>
            </a>
            <ul>
              <li>
                <a href="http://">Management</a>
              </li>
              <li>
                <a href="http://">Communication</a>
              </li>
              <li>
                <a href="http://">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="columna">
            <a href="http://">
              <h4 className="espacio">Success stories</h4>
            </a>
            <ul>
              <li>
                <a href="http://">Avoburger</a>
              </li>
              <li>
                <a href="http://">StarCoffe</a>
              </li>
              <li>
                <a href="http://">Vegancake</a>
              </li>
              <li>
                <a href="http://">Pizzadoo</a>
              </li>
              <li>
                <a href="http://">Shakey</a>
              </li>
            </ul>
          </div>
          <div className="columna">
            <a href="http://">
              <h4 className="espacio">Social Media</h4>
            </a>
            <ul>
              <li>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0C17.3137 0 20 2.68629 20 6V14C20 17.3137 17.3137 20 14 20H6C2.68629 20 0 17.3137 0 14V6C0 2.68629 2.68629 0 6 0H14ZM10 5.83301C7.69881 5.83301 5.83337 7.69881 5.83337 10C5.83337 12.3012 7.69881 14.167 10 14.167C12.3012 14.167 14.1666 12.3012 14.1666 10C14.1666 7.69881 12.3012 5.83301 10 5.83301ZM15.4166 3.33301C14.7263 3.33301 14.1666 3.89266 14.1666 4.58301C14.1666 5.27337 14.7263 5.83301 15.4166 5.83301C16.107 5.83301 16.6666 5.27337 16.6666 4.58301C16.6666 3.89266 16.107 3.33301 15.4166 3.33301Z"
                    fill="white"
                  />
                </svg>
                <a href="http://">Instagram</a>
              </li>
              <li>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0C17.3137 0 20 2.68629 20 6V14C20 17.3137 17.3137 20 14 20H12.3929L12.3938 12.6582H15.4187V9.7334H12.3938V9.2832C12.3938 8.59987 12.5979 8.09551 13.0062 7.77051C13.4146 7.44551 13.9771 7.2832 14.6937 7.2832C14.9604 7.2832 15.2437 7.3084 15.5437 7.3584V4.5332C15.1604 4.44987 14.7355 4.4082 14.2688 4.4082C12.7021 4.4082 11.4521 4.83359 10.5188 5.68359C9.58547 6.53359 9.11877 7.7332 9.11877 9.2832V9.7334H6.71875V12.6582H9.11877L9.11804 20H6C2.68629 20 0 17.3137 0 14V6C0 2.68629 2.68629 0 6 0H14Z"
                    fill="white"
                  />
                </svg>
                <a href="http://">Facebook</a>
              </li>
              <li>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0C17.3137 0 20 2.68629 20 6V14C20 17.3137 17.3137 20 14 20H6C2.68629 20 0 17.3137 0 14V6C0 2.68629 2.68629 0 6 0H14ZM8.5 6.86816C7.94772 6.86816 7.5 7.31588 7.5 7.86816V12.1318C7.5 12.2871 7.53617 12.4402 7.60559 12.5791C7.85258 13.0731 8.4533 13.2734 8.94727 13.0264L13.2112 10.8945C13.4047 10.7978 13.5616 10.6408 13.6583 10.4473C13.9053 9.9533 13.7052 9.35246 13.2112 9.10547L8.94727 6.97363C8.80842 6.9042 8.65525 6.86816 8.5 6.86816Z"
                    fill="white"
                  />
                </svg>
                <a href="http://">Youtube</a>
              </li>
            </ul>
          </div>
          <div className="columna">
            <a href="">
              <h4 className="espacio">Contatc</h4>
            </a>
            <ul>
              <li>
                <div className="contenedor-direccion">
                  <p>
                    <span className="calle-numero">31-70 Coast Way</span>
                    <span className="ciudad">New York, NY</span>
                    <span className="pais">USA</span>
                  </p>
                </div>
              </li>
              <li>
                <a href="http://">hello@plateform.io</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="contenedor-copyright">
          <p>&copy; Plateform. 2023 Todos los derechos reservados.</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
