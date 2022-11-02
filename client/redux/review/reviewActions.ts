import * as reviewTypes from "./reviewTypes";
import { Review } from "../../helper/initState/review";

export const setReview = ({ page, data }: { page: number; data: Review }) => ({
  type: reviewTypes.SET_REVIEW,
  payload: { page, data },
});
