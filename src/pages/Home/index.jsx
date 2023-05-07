import Header from "../../components/Header";
import { Button } from "../../components/ui/Button/styles";

import { ContainerHome, ContainerSobre, Row } from "./styles";

import { BsBoxArrowInRight } from "react-icons/bs";
import { RiCloseCircleLine, RiExchangeDollarLine } from "react-icons/ri";
import { FaMobileAlt, FaMoneyBillAlt } from "react-icons/fa";

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
      <ContainerSobre>
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
      </ContainerSobre>
    </>
  );
}
