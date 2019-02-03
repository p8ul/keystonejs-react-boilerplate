import { FETCHING_TODOS, FETCH_TODOS } from '../../../constants';

export const initialState = {
  data: [],
  isFetching: false,
  success: false,
  errors: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_TODOS:
      return { ...state, ...payload, isFetching: true };
    case FETCH_TODOS:
      return { ...state, ...payload, isFetching: false };

    default:
      return state;
  }
};
