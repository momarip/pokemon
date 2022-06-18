import axios from "axios";
import { FC, useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Loader";
import PokemonItem from "./components/pokemonItem";

const PokemonScene: FC = () => {
  const [nextUrl, setNextUrl] = useState(null);
  const [pokemon, setPokemon]: any = useState([]);
  const [pokemonOrigin, setPokemonOrigin]: any = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchName, setSearchName] = useState("");

  const observer: any = useRef();
  const lastElementRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextUrl) {
          searchPokedex(nextUrl);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, nextUrl, pokemon, pokemonOrigin]
  );

  const fetchPokemonDetail = async (url: any) => {
    const response = await axios.get(url);
    const { name, id, types, sprites } = response.data;
    return {
      fullData: response.data,
      id,
      name,
      type: types[0].type.name,
      img: sprites.front_default,
    };
  };

  const searchPokedex = useCallback(
    async (url: any) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const results = response.data.results;
        const { next } = response.data;
        if (next) setNextUrl(next);
        const detailRequests = results.map(
          async (r: any) => await fetchPokemonDetail(r.url)
        );

        await Promise.all(detailRequests).then((detailResults) => {
          setPokemon([...pokemon, ...detailResults]);
          setPokemonOrigin([...pokemonOrigin, ...detailResults]);
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    },
    [nextUrl, pokemon, pokemonOrigin]
  );

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    searchPokedex(url);
  }, []);

  const renderPokemon = () =>
    pokemon.map((p: any, i: any) => {
      return i === pokemon.length - 1 ? (
        <div key={p.id} ref={lastElementRef}>
          <PokemonItem pokemon={p} />
        </div>
      ) : (
        <div key={p.id}>
          <PokemonItem pokemon={p} />
        </div>
      );
    });

  const handleSearch = () => {
    let str = searchName.toLowerCase();
    if (str !== "") {
      let filterPokemons = pokemonOrigin.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(str)
      );
      setPokemon(filterPokemons);
    } else {
      setPokemonOrigin(pokemon);
    }
  };
  return (
    <section id="screen">
      <div className="form-group" id="search">
        <input
          type="text"
          id="typeNumber"
          onKeyUp={handleSearch}
          defaultValue={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
          className="form-control"
          placeholder="Look for a specific pokemon"
        />
        <label className="form-label" htmlFor="typeNumber"></label>
      </div>
      <div id="pokedex">{renderPokemon()}</div>
      {isLoading && <Loader />}
    </section>
  );
};

export default PokemonScene;
