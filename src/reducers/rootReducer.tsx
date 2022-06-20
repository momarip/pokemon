import { combineReducers } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemonReducer";
import { pokemonListReducer } from "./pokemonsListReducer";

const rootReducer = combineReducers({
  pokemons: pokemonListReducer,
  pokemon: pokemonReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
