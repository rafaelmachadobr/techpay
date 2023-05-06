import styled from "styled-components";

import Background from "../../assets/bg-home.jpg";

export const ContainerHome = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;

  div {
    width: 100%;
    max-width: 500px;
    margin-bottom: 10rem;
  }

  h1 {
    font-size: 3rem;
    color: ${(props) => (props.theme.title === "dark" ? "#fff" : "#0B1035")};
    margin-bottom: 2rem;
  }

  span {
    color: #1521cf;
  }
`;
