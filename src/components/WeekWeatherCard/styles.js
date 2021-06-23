import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  @media (min-width: 376px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

export const Card = styled.div`
  box-sizing: border-box;
  margin: 2px auto;
  padding: 8px 4px;
  min-width: 266px;

  @media (min-width: 376px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    min-width: 188px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  h2 {
    font-size: 0.8rem;
  }
`;

export const Clima = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
  height: 82px;

  h3 {
    width: 50%;
  }

  p {
    font-size: 0.8rem;
  }

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

export const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 0.5rem;
  text-align: left;
  font-size: 0.8rem;

  div {
    display: flex;
  }

  @media (min-width: 376px) {
    width: 80%;
  }
`;

export const BulletPoint = styled.div`
  display: none;

  @media (min-width: 376px) {
    display: flex;
    margin: 0 auto;
    align-items: center;

    div {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: gray;
    }
  }
`;

export const SkeletonDiv = styled.div`
  margin: 0 auto;
  width: 80vw;
  max-width: 800px;
  height: 22vh;
`;
