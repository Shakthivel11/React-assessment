import * as types from "./actionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  createdOn:null
};

const Addreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_POSTS_START:
      console.log("current State",state)
      return {
        ...state,
        posts : state.posts.push({...action.payload,createdOn:new Date()}),
        loading: true,

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

export default Addreducer;
