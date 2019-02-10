import {
  FETCHING_TODOS, FETCH_TODOS,
  CREATE_TODO, CREATE_TODO_FAILURE, CREATE_TODO_SUCCESS,
  DELETE_TODO, DELETE_TODO_FAILURE, DELETE_TODO_SUCCESS,
} from '../../../constants';

/** DELETING TODOS ACTIONS */
export const deleteTodo = payload => ({
  type: DELETE_TODO,
  payload,
});

export const deleteTodoFailure = payload => ({
  type: DELETE_TODO_FAILURE,
  payload,
});

export const deleteTodoSuccess = payload => ({
  type: DELETE_TODO_SUCCESS,
  payload,
});

/** FETCHING TODOS ACTIONS */
export const fetchingTodos = payload => ({
  type: FETCHING_TODOS,
  payload,
});

export const fetchTodos = payload => ({
  type: FETCH_TODOS,
  payload,
});

/** CREATING TODO ACTIONS */
export const createTodo = payload => ({
  type: CREATE_TODO,
  payload,
});

export const createTodoFailure = payload => ({
  type: CREATE_TODO_FAILURE,
  payload,
});

export const createTodoSuccess = payload => ({
  type: CREATE_TODO_SUCCESS,
  payload,
});


export default fetchingTodos;
