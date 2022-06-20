import axios, { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { Pokemon } from "../models/pokemon";
import {
  fetchPokemonsFailure,
  fetchPokemonsSuccess,
} from "../actions/pokemonListAction";
import { pokemonTypes } from "../actionTypes/pokemonTypes";

const getPokmeons = (url:string) =>
  axios.get<Pokemon>(url);

function* fetchPokemonsSaga(action: any) {
  try {
    const response: AxiosResponse = yield (action.type, getPokmeons(action.payload));
    yield put(
        fetchPokemonsSuccess(
          {pokemons: response.data.results},
          {nextPage: response.data.next}
          )
    );
  } catch (e: any) {
    yield put(
      fetchPokemonsFailure({
        error: e.message,
      })
    );
  }
}

function* pokemonsSaga() {
  yield all([takeLatest(pokemonTypes.FETCH_POKEMON_REQUEST, fetchPokemonsSaga)]);
}

export default pokemonsSaga;
