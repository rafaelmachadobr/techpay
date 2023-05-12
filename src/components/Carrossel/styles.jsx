import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  min-height: 400px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .inner {
    display: flex;
  }

  .item {
    min-width: 900px;
    min-height: 300px;
    padding: 20px;

    img {
      width: 100%;
      height: 90%;
      pointer-events: none;
    }
  }

  .carrossel {
    cursor: grab;
    overflow: hidden;
  }
`;
