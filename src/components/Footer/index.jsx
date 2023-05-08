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
                <a href="/">about us</a>
              </li>
              <li>
                <a href="/">our services</a>
              </li>
              <li>
                <a href="/">privacy policy</a>
              </li>
              <li>
                <a href="/">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Central de Ajuda</h4>
            <ul>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">shipping</a>
              </li>
              <li>
                <a href="/">returns</a>
              </li>
              <li>
                <a href="/">order status</a>
              </li>
              <li>
                <a href="/">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Informações</h4>
            <ul>
              <li>
                <a href="/">watch</a>
              </li>
              <li>
                <a href="/">bag</a>
              </li>
              <li>
                <a href="/">shoes</a>
              </li>
              <li>
                <a href="/">dress</a>
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
