import * as types from "./actionTypes";

const initialState = {
  historyposts: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_HISTORY_START:
      console.log(action.payload)
      return {
        ...state,
        historyposts: [...state.historyposts,{...action.payload}],

      };

    case types.POST_HISTORY_SUCCESS:
      console.log("Post history",action.data)
      return {
        ...state,
        historyposts: [...state.historyposts,{...action.data}],    
      };

    default:
      return {
        ...state,
      };
  }
};

export default historyReducer;
