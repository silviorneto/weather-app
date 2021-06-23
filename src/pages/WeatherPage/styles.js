import styled from "styled-components";

export const TitleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2vh auto;
  max-width: 310px;

  h3 {
    margin-right: 3vw;
  }

  @media (min-width: 420px) {
    flex-direction: row;
    max-width: 400px;
  }
`;

export const Title = styled.h2``;

export const H3 = styled.h3`
  text-align: center;
  margin-bottom: 3px;
`;

export const Warning = styled.h2`
  margin-top: 15vh;
  text-align: center;

  span {
    text-decoration: underline;
    cursor: pointer;

    &:before {
      content: " ";
      text-decoration: none;
    }
  }
`;

export const SkeletonDiv = styled.div`
  margin: 0 auto;
  width: 80vw;
  max-width: 800px;
  height: 10vh;

  @media (min-width: 420px) {
    height: 22vh;
  }
`;
