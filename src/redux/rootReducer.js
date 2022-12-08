import { combineReducers } from "redux";
// import Addreducer from "./Addreducer";
import historyReducer from "./HistoryReducer";
import postReducer from "./reducer";

const rootReducer = combineReducers({
  data: postReducer,
  history:historyReducer,
  // addData:Addreducer,
  

  

});

export default rootReducer;
