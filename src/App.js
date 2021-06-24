import Routes from "./routes";
import AppMenu from "./components/Menu";
import FavoriteBar from "./components/FavoriteBar";

function App() {
  return (
    <div className="App">
      <>
        <AppMenu />
        <Routes />
      </>
    </div>
  );
}

export default App;
