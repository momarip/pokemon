import Header from "./features/Header";
import Pokemon from "./features/pokemon/pokemonView";

const Test = () => {
  console.log("RELEASE LCOAL QUERY");
  return <></>;
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
function useQuery(RELEASE: any, arg1: { fetchPolicy: string }): { data: any } {
  throw new Error("Function not implemented.");
}
