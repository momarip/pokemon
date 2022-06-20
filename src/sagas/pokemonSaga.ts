import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { Pokemon } from "../models/pokemon";

import { pokemonTypes } from "../actionTypes/pokemonTypes";
import { fetchOnePokemonFailure, fetchOnePokemonSuccess } from "../actions/pokemonAction";


const getPokmeon = (link:any) =>
  axios.get<Pokemon>(link);

function* fetchOnePokemonSaga(action:any) {
  try {
    const response: AxiosResponse = yield (action.type, getPokmeon(action.payload));
    yield put(
        fetchOnePokemonSuccess({
            pokemon: response.data,
        })
    );
    
  } catch (e: any) {
    yield put(
        fetchOnePokemonFailure({
        error: e.message,
      })
    );
  }
}

function* onePokemonSaga() {
  yield takeLatest(pokemonTypes.FETCH_ONE_POKEMON_REQUEST, fetchOnePokemonSaga)
  }

export default onePokemonSaga;
