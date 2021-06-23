import weatherLogo from "../../assets/sivvus_weather_symbols_2.svg";
import { LogoContainer } from "./styles";

const AppLogo = () => {
  return (
    <LogoContainer>
      <img src={weatherLogo} alt="" />
      <h3>Weather App</h3>
    </LogoContainer>
  );
};

export default AppLogo;
