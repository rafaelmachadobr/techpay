import styled from "styled-components";

import Background from "../../assets/bg-home.jpg";
import BackgroundImgEsquerda from "../../assets/img-esquerda.png";

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
  background-color: ${(props) => props.theme.background};
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
  padding: 3rem;

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
    background-color: ${(props) =>
      props.theme.title === "dark" ? props.theme.colors.primary : "#F2F2F2"};
    transition: 0.5s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    color: ${(props) => (props.theme.title === "dark" ? "#fff" : "#0B1035")};
    transition: 0.5s;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    svg {
      color: #1521cf;
      transition: 0.5s;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const SectionSobre = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.primary};

  div.esquerda {
    width: 50%;
    height: 100%;
    background-image: url(${BackgroundImgEsquerda});
    background-size: cover;
    background-repeat: no-repeat;
  }

  div.direita {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    margin-inline: 2.5rem;

    div.titulo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      color: #1521cf;

      h2 {
        font-size: 2rem;
      }
    }

    h3 {
      font-size: 3rem;
      text-align: center;

      span {
        color: #1521cf;
      }
    }

    div.conteudo {
      div.textos {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;
        max-width: 500px;
        padding: 1rem;

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;

          h4 {
            font-size: 1.5rem;
            color: #1521cf;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;

    div.esquerda {
      display: none;
    }

    div.direita {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;

      h3 {
        font-size: 2rem;

        span {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const ContainerServicos = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.titulo {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;

    h2 {
      font-size: 2rem;
      color: #1521cf;
    }
  }

  h3 {
    font-size: 3rem;
    text-align: center;

    span {
      color: #1521cf;
    }
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 1rem 0;
  }

  div.cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;
    margin: 2rem 0;

    div.card {
      width: 100%;
      max-width: 400px;
      height: 250px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem;

      h4 {
        font-size: 1rem;

        &::before {
          content: "";
          border-left: 3px solid #1521cf;
          position: absolute;
          margin-left: -1rem;
          height: 2rem;
        }
      }

      p {
        font-size: 1rem;
        text-align: left;
        margin: 1rem 0;
      }
    }
  }
`;

export const ContainerDepoimentos = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};

  div.titulo {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;

    h2 {
      font-size: 2rem;
      color: #1521cf;
    }
  }

  h3 {
    font-size: 3rem;
    text-align: center;

    span {
      color: #1521cf;
    }
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 1rem 0;
  }
`;
