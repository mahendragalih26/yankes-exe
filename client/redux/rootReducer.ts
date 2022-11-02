import { combineReducers } from "redux";
import reviewReducer from "./review/reviewReducer";

const rootReducer = combineReducers({
  review: reviewReducer,
});

export default rootReducer;
