export interface Review {
  api?: any;
  data?: {
    rate?: number;
  };
}

export let initReview: Review = {
  api: {},
  data: {},
};

export interface ReduxState {
  review: Review;
}
