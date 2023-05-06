import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme.colors.text};
  padding: 0 3rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    width: 40%;
    gap: 2rem;
    color: ${(props) => props.theme.colors.text};

    li {
      font-size: 1.1rem;
      font-weight: 700;
      transition: all 0.2s ease-in;
      cursor: pointer;

      a {
        color: ${(props) => props.theme.colors.text};

        &:hover {
          color: #1521cf;
        }
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    transition: all 0.2s ease-in;

    span {
      color: #1521cf;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
