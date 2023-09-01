import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="contenedor-footer">
      <section className="contenedor-cuerpo">
        <section className="contenedor-principal">
          <div className="columna">
            <a href="http://">
              <h4 className="espacio">PLATEFORM</h4>
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
                <a href="http://">Instagram</a>
              </li>
              <li>
                <a href="http://">Facebook</a>
              </li>
              <li>
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
