import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 80vw;
  padding: 15px;
  max-width: 800px;
  border-radius: 3px;
  margin: 1vh auto;
  background-color: #3f51b5;
  -webkit-box-shadow: 6px 5px 14px -8px rgba(0, 0, 0, 0.77);
  box-shadow: 6px 5px 14px -8px rgba(0, 0, 0, 0.77);
  color: white;
  text-shadow: 2px 2px 3px rgba(150, 150, 150, 1);
  font-size: 1.3rem;
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 1.2rem;
`;

export const Clima = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
  height: 82px;

  div {
    display: flex;
    align-items: center;

    img {
      width: 50%;
    }
  }

  @media (min-width: 376px) {
    width: 80%;
  }
`;

export const SkeletonDiv = styled.div`
  margin: 0 auto;
  width: 80vw;
  max-width: 800px;
  height: 22vh;
`;

export const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 0.5rem;
  text-align: left;

  div {
    display: flex;
  }

  @media (min-width: 376px) {
    width: 80%;
  }
`;
