import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid red;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid red;

  img {
    max-width: 100px;
  }

  h1 {
  }
`;
