import {pokemonTypes} from '../actionTypes/pokemonTypes';

const initalState = {
  pokemon: {},
  pokemonSuccess: false,
  error: null,
  waiting: Boolean
};

const pokemonReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case pokemonTypes.FETCH_ONE_POKEMON_SUCCESS:
    return {
        ...state,
        pokemon: action.payload.pokemon,
        waiting: false,
      };
      case pokemonTypes.FETCH_ONE_POKEMON_REQUEST:
      return {
        ...state,
        waiting: true
      };
      case pokemonTypes.FETCH_ONE_POKEMON_FAILURE:
      return {
        ...state,
        pokemons: {},
        waiting:false,
        error: action.payload.error
      };
      default: {
        return {
          ...state
        }
      }
  }
  
};

export { pokemonReducer };
