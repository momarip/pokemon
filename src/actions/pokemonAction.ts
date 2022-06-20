import { pokemonTypes } from "../actionTypes/pokemonTypes";
import { 
    FetchOnePokemonRequest,
    FetchOnePokemonFailurePayload,
    FetchOnePokemonFailure,
    FetchOnePokemonSuccessPayload,
    FetchOnePokemonSuccess
} from "../actionTypes/types";


  export const fetchOnePokemonSuccess = (
    payload: FetchOnePokemonSuccessPayload
  ): FetchOnePokemonSuccess => ({
    type: pokemonTypes.FETCH_ONE_POKEMON_SUCCESS,
    payload
  });

  

  export const fetchOnePokemonFailure = (
    payload: FetchOnePokemonFailurePayload
  ): FetchOnePokemonFailure => ({
    type: pokemonTypes.FETCH_ONE_POKEMON_FAILURE,
    payload
  });

  export const fetchOnePokemonRequest = (url:string): FetchOnePokemonRequest => ({
    type: pokemonTypes.FETCH_ONE_POKEMON_REQUEST,
    payload:url
  });
  