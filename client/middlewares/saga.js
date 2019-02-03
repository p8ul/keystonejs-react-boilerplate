import { all, fork } from 'redux-saga/effects';
import {
  watchFetchingTodos, watchCreateTodo,
} from './todo';


export default function* root() {
  yield all([
    fork(watchFetchingTodos),
    fork(watchCreateTodo),
  ]);
}