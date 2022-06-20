import Header from "./features/Header";
import Pokemon from "./features/pokemon/pokemonView";

const Test = () => {
  return <h1>Hello world</h1>;
};
const App = () => {
  return (
    <div className="App">
      <Header />
      <Pokemon />
    </div>
  );
};

export default App;
