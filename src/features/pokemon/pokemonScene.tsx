import { FC, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonsRequest } from "../../actions/pokemonListAction";
import { RootState } from "../../configureStore";
import Loader from "../Loader";
import PokemonItem from "./components/pokemonItem";

const PokemonScene: FC = () => {
  const [next, setNext] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemon, setPokemon]: any = useState([]);
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  const { pending, pokemons, error, nextUrl } = useSelector(
    (state: RootState) => state.pokemons
  );
  const getData = () => {
    dispatch(fetchPokemonsRequest(next));
    setNext(nextUrl);
    setPokemon(pokemons);
  };

  useEffect(() => {
    getData();
  }, [pokemon]);

  if (!pokemon) {
    return <Loader />;
  }

  return (
    <section id="screen">
      <div className="form-group" id="search">
        <input
          type="text"
          id="typeNumber"
          defaultValue={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
          className="form-control"
          placeholder="Look for a specific pokemon"
        />
        <label className="form-label" htmlFor="typeNumber"></label>
      </div>

      <div id="pokedex">
        {pokemon
          .filter((searchInput: any) => {
            if (searchName === "") {
              return searchInput;
            } else if (
              searchInput.name.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return searchInput;
            }
          })
          .map((data: any, id: any) => {
            return (
              <div key={id}>
                <PokemonItem pokemon={data}></PokemonItem>
              </div>
            );
          })}
      </div>
      <button onClick={getData} className="btn btn-primary" id="loader">
        Load More
      </button>
    </section>
  );
};

export default PokemonScene;
