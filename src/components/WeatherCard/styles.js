import styled from "styled-components";
import cloudyImg from "../../assets/cloudy-bg.jpg";
import mistImg from "../../assets/mist-bg.jpg";
import rainyImg from "../../assets/rainy-bg.jpg";
import snowImg from "../../assets/snow-bg.jpg";
import stormImg from "../../assets/storm-bg.jpg";
import sunnyImg from "../../assets/sunny-bg.jpg";

const background = {
  Trovoada: [stormImg, "white"],
  Confusão: [stormImg, "white"],
  Tempestade: [stormImg, "white"],
  Tornado: [stormImg, "white"],
  Chuvisco: [rainyImg, "black"],
  Chuva: [rainyImg, "black"],
  Névoa: [mistImg, "black"],
  Fumaça: [mistImg, "black"],
  Pó: [mistImg, "black"],
  Areia: [mistImg, "black"],
  Cinzas: [mistImg, "black"],
  Limpo: [sunnyImg, "black"],
  Nublado: [cloudyImg, "black"],
  Neve: [snowImg, "black"],
};

export const Container = styled.div`
  box-sizing: border-box;
  width: 80vw;
  padding: 15px;
  max-width: 800px;
  border-radius: 3px;
  margin: 1vh auto;
  background-image: url(${(props) => background[props.bg][0]});
  background-size: cover;
  -webkit-box-shadow: 6px 5px 14px -8px rgba(0, 0, 0, 0.77);
  box-shadow: 6px 5px 14px -8px rgba(0, 0, 0, 0.77);
  color: ${(props) => background[props.bg][1]};
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
