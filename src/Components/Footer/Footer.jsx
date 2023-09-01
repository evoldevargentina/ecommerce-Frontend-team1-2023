import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="contenedor-footer">
      <section className="contenedor-cuerpo">
        <section className="contenedor-principal">
          <div className="columna">
            <a href="http://">
              <h4>PLATEFORM</h4>
            </a>
          </div>
          <div className="columna">
            <a href="http://">
              <h4>Features</h4>
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
              <h4>Success stories</h4>
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
              <li>
                <a href="http://">Management</a>
              </li>
              <li>
                <a href="http://">Communication</a>
              </li>
            </ul>
          </div>
          <div className="columna">
            <a href="http://">
              <h4>Social Media</h4>
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
            <a href="">
              <h4>Contatc</h4>
            </a>
            <ul>
              <li>
                <a href="http://">Management</a>
              </li>
              <li>
                <a href="http://">Communication</a>
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
