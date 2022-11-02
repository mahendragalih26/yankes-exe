import config from "../../config";
// import store from "../redux/store";
import { apiLocalService } from "../helperServices";

interface Review {
  rate?: number;
}

export const reviewService = {
  //   getReview,
  postReview,
};

// function getReview({  }: Review) {
//   return apiLocalService({
//     endpoint: `${config.routeReview}/listfile?documentName=${key}`,
//     data: {
//       documentName: key,
//     },
//   });
// }

function postReview({ rate }: Review) {
  return apiLocalService({
    endpoint: `${config.routeReview}`,
    data: {
      rate,
    },
  });
}
