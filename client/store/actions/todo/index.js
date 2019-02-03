import { FETCHING_TODOS, CREATE_TODO } from '../../../constants';

export const fetchingTodos = () => ({
  type: FETCHING_TODOS,
});

export const createTodo = payload => ({
  type: CREATE_TODO,
  payload,
});

export default fetchingTodos;
