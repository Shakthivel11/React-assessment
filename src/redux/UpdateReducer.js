import * as types from "./actionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  updatedOn:null
};

const UpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POSTS_START:
      return {
        ...state,
        posts:state.posts.push({...action.payload,updatedOn:new Date()}),
        loading: true,
      };

    case types.UPDATE_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.UPDATE_POSTS_ERROR:
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

export default UpdateReducer;
