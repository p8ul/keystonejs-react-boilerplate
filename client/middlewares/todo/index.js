import {
  put, takeEvery, takeLatest, call,
} from 'redux-saga/effects';
import { api } from '../../utils/api';
import {
  FETCHING_TODOS, FETCH_TODOS, CREATE_TODO, CREATE_TODO_FAILURE, CREATE_TODO_SUCCESS,
} from '../../constants';

/**
 * Todo listing
 */
export function* fetchTodosAsync() {
  const groups = yield call(api.todo.list);
  yield put({
    type: FETCH_TODOS,
    payload: groups.data,
  });
}

/**
 * Create todos
 */
export function* createTodoAsync({ payload }) {
  try {
    const group = yield call(api.todo.create, payload);
    yield put({
      type: CREATE_TODO_SUCCESS,
      payload: group.data,
    });
    yield put(({ type: FETCHING_TODOS }));
  } catch (err) {
    yield put(({
      type: CREATE_TODO_FAILURE,
      payload: { errors: err.response.data.message },
    }));
  }
}

/** WATCHERS */
export function* watchFetchingTodos() {
  yield takeEvery(FETCHING_TODOS, fetchTodosAsync);
}

export function* watchCreateTodo() {
  yield (takeLatest(CREATE_TODO, createTodoAsync));
}
