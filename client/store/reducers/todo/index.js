import {
  FETCHING_TODOS,
  FETCH_TODOS,
  DELETE_TODO, DELETE_TODO_FAILURE, DELETE_TODO_SUCCESS,
} from '../../../constants';

export const initialState = {
  data: {
    results: [],
    currentPage: 1,

  },
  isFetching: false,
  isDeleting: false,
  success: false,
  errors: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_TODOS:
      return { ...state, ...payload, isFetching: true };
    case FETCH_TODOS:
      return { ...state, ...payload, isFetching: false };
    case DELETE_TODO_SUCCESS:
      return { ...state, ...payload, isDeleting: false };
    case DELETE_TODO_FAILURE:
      return { ...state, ...payload, isDeleting: false };
    case DELETE_TODO:
      return { ...state, isDeleting: true };
    default:
      return state;
  }
};
