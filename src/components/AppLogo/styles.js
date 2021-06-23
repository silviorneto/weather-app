import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 98px;
  box-sizing: border-box;
  padding: 1px 3px;
  background-color: white;
  border: 1px solid black;
  @media (min-width: 376px) {
    max-width: 150px;
  }

  img {
    width: 25%;
    max-width: 80px;
    margin-right: 0.5vw;
  }

  h3 {
    color: #212a5d;
    width: 70%;
    max-width: 80px;
    font-size: 1rem;
    word-wrap: break-word;
    @media (min-width: 376px) {
      max-width: 120px;
    }
  }
`;

/* @media (max-width: 375px) {
} */
