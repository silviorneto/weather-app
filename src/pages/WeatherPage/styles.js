import styled from "styled-components";
import { Button } from "@material-ui/core/";

export const TitleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2vh auto;
  max-width: 310px;
  min-height: 70px;

  h3 {
    margin-right: 3vw;
  }

  @media (min-width: 420px) {
    flex-direction: row;
    max-width: 400px;
  }
`;

export const Title = styled.h2``;

export const ButtonStyled = styled(Button)`
  height: 25px;
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 30px 0 3px 0;
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
