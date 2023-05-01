import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme.colors.text};
  padding: 0 30px;
`;
