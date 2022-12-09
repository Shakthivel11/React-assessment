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
      case types.UPDATE_POSTS_START:
        const newPost = state.posts.map((item)=>
        item.id === action.payload.id
        ?{
          ...item,
          ...action.payload,
          updatedOn:new Date(),
        } : item
        )
        return{
          ...state,
          posts:newPost
        }
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
          case types.DELETE_POSTS_SUCCESS:
            const newState = state.posts.filter(
              (posts) => posts.id !== action.payload.id
            );
          const updateState =[...newState,action.payload];
          // console.log(updateState);
          return{
            ...state,
            loading:false,
            updateState,
          }
    
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
