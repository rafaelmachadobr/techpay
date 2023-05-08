import { FooterContainer } from "./styles";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Inicio</h4>
            <ul>
              <li>
                <a href="/">Sobre nós</a>
              </li>
              <li>
                <a href="/">Carreiras</a>
              </li>
              <li>
                <a href="/">Contato</a>
              </li>
              <li>
                <a href="/">Ética e Compliance</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Central de Ajuda</h4>
            <ul>
              <li>
                <a href="/">Para você</a>
              </li>
              <li>
                <a href="/">Regulamentos</a>
              </li>
              <li>
                <a href="/">Fale com a gente</a>
              </li>
              <li>
                <a href="/">Doações</a>
              </li>
              <li>
                <a href="/">Renegociação de dívidas</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Informações</h4>
            <ul>
              <li>
                <a href="/">Privacidade</a>
              </li>
              <li>
                <a href="/">Segurança</a>
              </li>
              <li>
                <a href="/">Demonstrações Financeiras</a>
              </li>
              <li>
                <a href="/">Tarifas e Taxas</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
