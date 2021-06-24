import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 28.33px;
  background-color: lightgray;
  border: 1px solid gray;

  display: flex;
  overflow-x: auto;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
`;

export const FavoriteBox = styled.div`
  width: 20%;
  min-width: 200px;
  padding: 2px;

  border: 1px solid gray;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;

  img {
    width: 15%;
  }
`;
