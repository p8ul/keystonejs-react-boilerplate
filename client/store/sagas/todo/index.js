import {
  put, takeEvery, takeLatest, call,
} from 'redux-saga/effects';
import { api } from '../../../utils/api';
import {
  FETCHING_TODOS,
  CREATE_TODO,
  DELETE_TODO,
} from '../../../constants';
import {
  fetchTodos,
  fetchingTodos,
  createTodoSuccess,
  createTodoFailure,
  deleteTodoFailure,
  deleteTodoSuccess,
} from '../../actions/todo';

export const responseData = response => (response ? response.data : {});

/** Todo delete */
export function* deleteTodoAsync({ payload }) {
  try {
    yield call(api.todo.delete, payload);
    yield put(deleteTodoSuccess({}));
    yield put(fetchingTodos());
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}

/**
 * Todo listing
 */
export function* fetchTodosAsync({ payload }) {
  const groups = yield call(api.todo.list, payload);
  yield put(fetchTodos(responseData(groups)));
}

/**
 * Create todos
 */
export function* createTodoAsync({ payload }) {
  try {
    const group = yield call(api.todo.create, payload);
    yield put(createTodoSuccess(responseData(group)));
    yield put(fetchingTodos());
  } catch (err) {
    const errors = { errors: err.response.data.message };
    yield put(createTodoFailure(errors));
  }
}

/** WATCHERS */
export function* watchFetchingTodos() {
  yield takeEvery(FETCHING_TODOS, fetchTodosAsync);
}

export function* watchCreateTodo() {
  yield (takeLatest(CREATE_TODO, createTodoAsync));
}

export function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO, deleteTodoAsync);
}
