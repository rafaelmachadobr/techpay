import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  div.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 30%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding: 20px;

    div.botoes {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      margin: 1rem 0;
      border: 1px solid #000;

      button {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text};
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        border: 1px solid #000;
      }
    }

    h2 {
      color: ${({ theme }) => theme.colors.text};
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      margin: 1rem 0;
    }

    p {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
      margin-bottom: 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      width: 100%;

      input {
        width: 80%;
        height: 3.5rem;
        border-radius: 10px;
        border: none;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 400;
        background-color: ${({ theme }) => theme.colors.background};
      }

      div.esqueceu {
        text-align: right;
        width: 80%;
        padding: 1rem 0;
      }

      a {
        color: #1521cf;
      }

      button {
        margin-top: 1rem;
        width: 80%;
        height: 3.5rem;
        border-radius: 10px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: 400;
        color: #fff;
        background-color: #190152;
        text-decoration: none;
        transition: all 0.5s ease-in-out;

        &:hover {
            background-color: #1521cf;
            transform: scale(1.1);
        }
      }
    }
  }
`;
