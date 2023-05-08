import Header from "../../components/Header";
import { Button } from "../../components/ui/Button/styles";

import { ContainerHome, ContainerSobre, Row, SectionSobre } from "./styles";

import { BsBoxArrowInRight } from "react-icons/bs";
import { RiCloseCircleLine, RiExchangeDollarLine } from "react-icons/ri";
import { FaMobileAlt, FaMoneyBillAlt } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { IoTelescopeSharp } from "react-icons/io5";
import Footer from "../../components/Footer";

export default function Home({ toggleTheme }) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <ContainerHome>
        <div>
          <h1>
            Pague de forma <span>inteligente</span> com TechPay!
          </h1>
          <Button href="#">
            Abrir conta
            <BsBoxArrowInRight size={30} />
          </Button>
        </div>
      </ContainerHome>
      <Row>
        <div>
          <RiExchangeDollarLine size={30} />
          <h3>Transferências e PIX</h3>
          <p>
            Envie e receba dinheiro de forma rápida e fácil, com segurança e
            proteção de dados.
          </p>
        </div>
        <div>
          <RiCloseCircleLine size={30} />
          <h3>Cancelamento</h3>
          <p>
            Cancelamento de transações com rapidez e facilidade, em caso de
            imprevistos
          </p>
        </div>
        <div>
          <FaMoneyBillAlt size={30} />
          <h3>Depósito Bancário</h3>
          <p>
            Adicione dinheiro à sua conta com facilidade, através de um código
            de depósito exclusivo
          </p>
        </div>
        <div>
          <FaMobileAlt size={30} />
          <h3>Pagamento Online</h3>
          <p>
            Realize compras online com praticidade e segurança, sem precisar
            informar os dados do seu cartão
          </p>
        </div>
      </Row>
      <ContainerSobre>
        <SectionSobre>
          <div className="esquerda"></div>
          <div className="direita">
            <div className="titulo">
              <BsFilterRight size={40} />
              <h2>Sobre nós</h2>
            </div>
            <h3>
              Não há decisões rápidas, mas Boas <span>decisões</span> rápidas
            </h3>
            <div className="conteudo">
              <div className="textos">
                <FiTarget size={40} color="#1521cf" />
                <div>
                  <h4>Nossos Objetivos</h4>
                  <p>Para ser um dos melhores com clientes em todo o mundo.</p>
                </div>
              </div>
              <div className="textos">
                <IoTelescopeSharp size={40} color="#1521cf" />
                <div>
                  <h4>Nossa visão</h4>
                  <p>
                    Dando fácil acesso a serviços bancários e financeiros em
                    qualquer lugar e em todos os lugares.
                  </p>
                </div>
              </div>
            </div>
            <Button
              href="/"
              style={{
                marginTop: "2rem",
              }}
            >
              Mais sobre nós
            </Button>
          </div>
        </SectionSobre>
      </ContainerSobre>
      <div></div>
      <Footer />
    </>
  );
}
