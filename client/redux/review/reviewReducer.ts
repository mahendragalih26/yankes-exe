import * as reviewTypes from "./reviewTypes";
import { initReview, Review } from "../../helper/initState/review";

const reviewReducer = async (
  state: Review = initReview,
  action: { type: string; payload?: Review }
): Promise<Review | undefined> => {
  // console.log("reducer = ", action, state);
  try {
    switch (action.type) {
      case reviewTypes.SET_REVIEW:
        return {
          ...state,
          [`api`]: {
            ...state[`api`],
            ...action.payload?.data,
          },
        };
        return state;
    }
  } catch (error) {
    console.log("reducer error");
  }
};

export default reviewReducer;
