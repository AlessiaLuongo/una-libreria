import { GET_ALL_BOOKS } from "../action";

const initialState = {
  data: null,
};

const getAllBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default getAllBooksReducer;
