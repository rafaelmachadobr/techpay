import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";

export default function Header() {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Header</h1>

      <Switch
        onChange={() => {}}
        checked={false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
      />
    </Container>
  );
}
