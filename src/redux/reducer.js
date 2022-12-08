import * as types from "./actionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case types.LOAD_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CREATE_POSTS_START:
      return {
        ...state,
        posts: [...state.posts, { ...action.payload, createdOn: new Date() }],
      };
    case types.LOAD_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.CREATE_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
