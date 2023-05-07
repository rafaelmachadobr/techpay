import { Quadrado } from "./styles";

export default function QuadradoComponent({ children, ...rest }) {
  return <Quadrado {...rest}>{children}</Quadrado>;
}
