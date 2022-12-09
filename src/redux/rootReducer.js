import { combineReducers } from "redux";
// import Addreducer from "./Addreducer";
import historyReducer from "./HistoryReducer";
import postReducer from "./reducer";
// import UpdateReducer from "./UpdateReducer";

const rootReducer = combineReducers({
  data: postReducer,
  history:historyReducer,
  // addData:Addreducer,
  // updateData:UpdateReducer,
  

  

});

export default rootReducer;
