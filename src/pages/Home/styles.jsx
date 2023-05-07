import styled from "styled-components";

import Background from "../../assets/bg-home.jpg";

import { shade } from "polished";

const backgroundColor = shade(0.2, "#f2f2f2");

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

export const ContainerSobre = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;

export const Row = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  position: relative;
  top: -10%;

  div {
    width: 100%;
    max-width: 400px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 10px;
    padding: 1rem;
    background-color: #f2f2f2;
    transition: 0.5s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

    h3 {
      font-size: 1.5rem;
      color: #0b1035;
    }

    p {
      font-size: 1rem;
      color: #0b1035;
    }

    svg {
      color: #1521cf;
      transition: 0.5s;
    }

    &:hover {
      background-color: ${backgroundColor};
      color: #fff;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
