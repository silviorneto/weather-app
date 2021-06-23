import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import WeatherPage from "../pages/WeatherPage";
import { useSelector } from "react-redux";

const Routes = () => {
  const apiKey = useSelector((state) => state.apiKey);

  return (
    <Switch>
      <Route exact path="/">
        {apiKey ? <WeatherPage /> : <Redirect to="/api-input" />}
      </Route>
      <Route path="/api-input">
        {apiKey ? <Redirect to="/" /> : <LoginPage />}
      </Route>
    </Switch>
  );
};

export default Routes;
