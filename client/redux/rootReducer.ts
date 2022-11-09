import { combineReducers } from "redux";
import reviewReducer from "./review/reviewReducer";
import dialogReducer from "./dialog/dialogReducer";

const rootReducer = combineReducers({
  review: reviewReducer,
  dialog: dialogReducer,
});

export default rootReducer;
