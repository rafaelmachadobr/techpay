import styled from "styled-components";

export const Button = styled.button`
  width: 13rem;
  border: none;
  border-radius: 1rem;
  background-color: #1521cf;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 0;

  &:hover {
    background-color: #0b1035;
  }
`;
