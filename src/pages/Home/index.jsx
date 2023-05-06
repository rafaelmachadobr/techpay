import Header from "../../components/Header";
import { Button } from "../../components/ui/Button/styles";

import { ContainerHome } from "./styles";

import { BsBoxArrowInRight } from "react-icons/bs";

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
    </>
  );
}
