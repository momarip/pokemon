import {pokemonTypes} from '../actionTypes/pokemonTypes';

const initalState = {
  pokemons: [],
  pokemonListSuccess: false,
  error: null,
  nextUrl: String,
  pending: Boolean,
};

const pokemonListReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case pokemonTypes.FETCH_POKEMON_SUCCESS:
    return {
        ...state,
        pokemons: action.payload.pokemons,
        pending: false,
        nextUrl: action.nextUrl.nextPage
      };
      case pokemonTypes.FETCH_POKEMON_REQUEST:
      return {
        ...state,
        pending: true
      };
      case pokemonTypes.FETCH_POKEMON_FAILURE:
      return {
        ...state,
        pokemons: [],
        pending:false,
        error: action.payload.error
      };
      default: {
        return {
          ...state
        }
      }
  }
  
};

export { pokemonListReducer };
