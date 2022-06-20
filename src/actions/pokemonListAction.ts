import { pokemonTypes } from "../actionTypes/pokemonTypes";
import { 
    FetchPokemonsSuccess, 
    FetchPokemonsFailure, 
    FetchPokemonsRequest,
    FetchPokemonsFailurePayload,
    FetchPokemonsSuccessPayload
} from "../actionTypes/types";

export const fetchPokemonsRequest = (url:string): FetchPokemonsRequest => ({
    type: pokemonTypes.FETCH_POKEMON_REQUEST,
    payload: url
  });
  
export const fetchPokemonsSuccess = (
    payload: FetchPokemonsSuccessPayload,
    nextPage: any
  ): FetchPokemonsSuccess => ({
    type: pokemonTypes.FETCH_POKEMON_SUCCESS,
    payload,
    nextUrl: nextPage
  });


  
  export const fetchPokemonsFailure = (
    payload: FetchPokemonsFailurePayload
  ): FetchPokemonsFailure => ({
    type: pokemonTypes.FETCH_POKEMON_FAILURE,
    payload
  });
  