import { all, fork } from 'redux-saga/effects';
import {
  watchFetchingTodos, watchCreateTodo, watchDeleteTodo, watchEditTodo,
} from './todo';


export default function* root() {
  yield all([
    fork(watchFetchingTodos),
    fork(watchCreateTodo),
    fork(watchDeleteTodo),
    fork(watchEditTodo),
  ]);
}
