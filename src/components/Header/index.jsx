import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";
import { Button } from "../ui/Button/styles";
import { BsBoxArrowInRight } from "react-icons/bs";

export default function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <a href="/">
        <h1>
          Tech<span>Pay</span>
        </h1>
      </a>

      <ul>
        <li>
          <a href="/">Página inicial</a>
        </li>
        <li>
          <a href="/">Sobre nós</a>
        </li>
        <li>
          <a href="/">Central de Ajuda</a>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
      </ul>

      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offHandleColor="#1521CF"
        offColor={shade(0.35, colors.primary)}
        onColor="#1521CF"
      />
      <Button href="/">
        Abrir conta
        <BsBoxArrowInRight size={30} />
      </Button>
    </Container>
  );
}
