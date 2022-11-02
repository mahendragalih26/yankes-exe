const env = process.env.NODE_ENV;

const staticEnv = {
  routeReview: "review",
  jwtBitSecret: "RANDOM_TOKEN_SECRET",
};

const production = {
  apiUrl: "unset",
  localApiUrl: "unset",
};

const staging = {
  //apiUrl: 'http://128.21.33.88:8687',
  apiUrl: "stagingunset",
  localApiUrl: "http://localhost:3000",

  // testing local network (diff device)
  // localApiUrl: "http://192.168.100.231:3000",
};

export default Object.assign(
  staticEnv,
  env === "production" ? production : staging
);
