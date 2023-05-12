import Header from "../../components/Header";
import { Button } from "../../components/ui/Button/styles";

import {
  ContainerDepoimentos,
  ContainerHome,
  ContainerParceiros,
  ContainerServicos,
  ContainerSobre,
  Row,
  SectionSobre,
} from "./styles";

import {
  BsBoxArrowInRight,
  BsCreditCard2FrontFill,
  BsFilterRight,
} from "react-icons/bs";
import {
  RiBarChart2Fill,
  RiCloseCircleLine,
  RiExchangeDollarLine,
} from "react-icons/ri";
import { FaHandHoldingUsd, FaMobileAlt, FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { IoTelescopeSharp } from "react-icons/io5";

import Footer from "../../components/Footer";
import Carrossel from "../../components/Carrossel";

import LogoBancoPan from "../../assets/logo-bancopan.png";
import LogoMercadoLivre from "../../assets/logo-mercadolivre.png";
import LogoNubank from "../../assets/logo-nubank.png";
import LogoPaypal from "../../assets/logo-paypal.png";
import LogoPicpay from "../../assets/logo-picpay.png";

export default function Home({ toggleTheme }) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <ContainerHome>
        <div>
          <h1>
            Pague de forma <span>inteligente</span> com TechPay!
          </h1>
          <a href="/login">
            <Button>
              Abrir conta
              <BsBoxArrowInRight size={30} />
            </Button>
          </a>
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
              style={{
                marginTop: "2rem",
              }}
            >
              Mais sobre nós
            </Button>
          </div>
        </SectionSobre>
      </ContainerSobre>
      <ContainerServicos>
        <div className="titulo">
          <BsFilterRight size={40} color="#1521cf" />
          <h2>Nossos Serviços</h2>
        </div>
        <h3>
          Totalmente fornecendo os melhores <span>Serviços</span>
        </h3>
        <p>
          Oferecemos uma ampla gama de serviços aos nossos clientes, o que ajuda
          a atender às necessidades e expectativas de cada cliente.
        </p>
        <div className="cards">
          <div className="card">
            <FaMobileAlt size={40} color="#1521cf" />
            <div className="card-text">
              <h4>Conta digital grátis</h4>
              <p>
                Abra uma conta digital TechPay gratuitamente e tenha acesso a
                diversas funcionalidades financeiras.
              </p>
            </div>
          </div>
          <div className="card">
            <FaMoneyBillAlt size={40} color="#1521cf" />
            <div className="card-text">
              <h4>Parcelamento de boletos</h4>
              <p>
                Divida suas contas em até 12 vezes e pague com facilidade
                através da sua carteira digital TechPay.
              </p>
            </div>
          </div>
          <div className="card">
            <AiOutlineCreditCard size={40} color="#1521cf" />
            <div className="card-text">
              <h4>Cartão de Crédito Virtual</h4>
              <p>
                Faça pagamentos online com facilidade e segurança através da sua
                carteira digital TechPay.
              </p>
            </div>
          </div>
          <div className="card">
            <RiBarChart2Fill size={40} color="#1521cf" />
            <div className="card-text">
              <h4>Rendimento CDI</h4>
              <p>
                Invista seu dinheiro com rentabilidade justa e segura através da
                opção de rendimento CDI na TechPay.
              </p>
            </div>
          </div>
          <div className="card">
            <FaHandHoldingUsd size={40} color="#1521cf" />
            <div className="card-text">
              <h4>Portabilidade de salário</h4>
              <p>
                Transfira seu salário automaticamente para a sua conta na
                TechPay e tenha acesso a diversas funcionalidades financeiras
                sem tarifas abusivas.
              </p>
            </div>
          </div>
          <div className="card">
            <BsCreditCard2FrontFill size={40} color="#1521cf" />
            <div className="card-text">
              <h4>Pagamento Online</h4>
              <p>
                Faça pagamentos online com facilidade e segurança através da sua
                carteira digital TechPay.
              </p>
            </div>
          </div>
        </div>
      </ContainerServicos>
      <ContainerDepoimentos>
        <div className="titulo">
          <BsFilterRight size={40} color="#1521cf" />
          <h2>Opiniões dos usuários</h2>
        </div>
        <h3>
          O que nossos <span>usuários</span> estão falando
        </h3>
        <p>
          Os usuários do TechPay têm compartilhado suas experiências positivas
          com a plataforma e destacando a facilidade de uso
        </p>

        <Carrossel />
      </ContainerDepoimentos>
      <ContainerParceiros>
        <div className="titulo">
          <BsFilterRight size={40} color="#1521cf" />
          <h2>Nossas Parcerias</h2>
        </div>
        <h3>
          Empresas que fazem a <span>diferença</span> no TechPay
        </h3>
        <p>
          O TechPay trabalha com algumas das empresas mais inovadoras do mercado
          para oferecer aos nível em pagamentos e serviços financeiros.
        </p>
        <div className="logos">
          <img src={LogoBancoPan} alt="Banco Pan" />
          <img src={LogoMercadoLivre} alt="Mercado Livre" />
          <img src={LogoNubank} alt="Nubank" />
          <img src={LogoPaypal} alt="Paypal" />
          <img src={LogoPicpay} alt="Picpay" />
        </div>
      </ContainerParceiros>
      <Footer />
    </>
  );
}
