import { all } from "redux-saga/effects";
import pokemonSaga from "./pokemonsListSaga";
import fetchOnePokemonSaga from "./pokemonSaga"
// import * as Eff from 'redux-saga/effects';
// const fork: any = Eff.fork;
export function* rootSaga() {
  yield all([
    pokemonSaga(),
    fetchOnePokemonSaga()
  ]);
}
