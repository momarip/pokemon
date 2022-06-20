import { Pokemon } from "../models/pokemon";
import { pokemonTypes } from "./pokemonTypes";

export interface PostsState {
  pending: boolean;
  error: string | null;
}

export interface FetchPokemonsSuccessPayload {
    pokemons: Pokemon[];
  }

export interface FetchOnePokemonSuccessPayload {
    pokemon: Pokemon;
  }

export interface FetchPokemonsFailurePayload {
  error: string;
}

export interface FetchOnePokemonFailurePayload {
  error: string;
}

export interface FetchPokemonsRequest {
  type: typeof pokemonTypes.FETCH_POKEMON_REQUEST;
  payload: any
}

export interface FetchOnePokemonRequest {
  type: typeof pokemonTypes.FETCH_ONE_POKEMON_REQUEST;
  payload:any
}


export type FetchPokemonsSuccess = {
  type: typeof pokemonTypes.FETCH_POKEMON_SUCCESS;
  payload: FetchPokemonsSuccessPayload;
  nextUrl: string
};

export type FetchOnePokemonSuccess = {
  type: typeof pokemonTypes.FETCH_ONE_POKEMON_SUCCESS;
  payload: FetchOnePokemonSuccessPayload;
};

export type FetchPokemonsFailure = {
  type: typeof pokemonTypes.FETCH_POKEMON_FAILURE;
  payload: FetchPokemonsFailurePayload;
};

export type FetchOnePokemonFailure = {
  type: typeof pokemonTypes.FETCH_ONE_POKEMON_FAILURE;
  payload: FetchOnePokemonFailurePayload;
};

export type PostsActions =
  | FetchPokemonsRequest
  | FetchPokemonsSuccess
  | FetchPokemonsFailure
  | FetchOnePokemonRequest
  | FetchOnePokemonSuccess
  | FetchOnePokemonFailure;
