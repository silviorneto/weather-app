import { useSelector, useDispatch } from "react-redux";
import { searchCity } from "../../store/modules/getCity/actions";

import { TiWeatherPartlySunny } from "react-icons/ti";
import { Container, FavoriteBox } from "./styles";

export default function FavoriteBar() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const city = useSelector((state) => state.city);

  const goToPage = (elem) => {
    if (elem !== city) {
      dispatch(searchCity(elem));
    }
  };

  return (
    <Container>
      {favorites &&
        favorites.map((elem, idx) => (
          <FavoriteBox key={idx}>
            <p>{elem}</p>
            <button onClick={() => goToPage(elem)}>
              <TiWeatherPartlySunny />
            </button>
          </FavoriteBox>
        ))}
    </Container>
  );
}
