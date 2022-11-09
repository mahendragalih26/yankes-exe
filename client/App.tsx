import React, { useEffect, useState, ReactElement, ReactNode } from "react";

//-------------------------------------------------
//IMPORTANT!!
//DYNAMIC IMPORT FOR PAGES
//PLEASE USING REACT LAZY BEFORE CREATING NEW ROUTE
//-------------------------------------------------

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import SplashScreen from "./components/loadings/SplashScreen";

// Import Page
const NotFound = React.lazy(() => import("./components/layout/notfound"));
const Review = React.lazy(() => import("./page/review"));
const Thumbs = React.lazy(() => import("./page/review/thumbs"));
const Emote = React.lazy(() => import("./page/review/emote"));
const CardEmote = React.lazy(() => import("./page/review/cardEmote"));

interface Props {
  // addAuth: (data: Auth) => void;
  // addTokens: (data: Tokens) => void;
  // auth: Auth;
  // tokens: Tokens;
}

const mapStateToProps = (state: any) => {
  return {
    // auth: state.auth,
    // tokens: state.tokens,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // addAuth: (data: Auth) => dispatch(addAuth(data)),
    // addTokens: (data: Tokens) => dispatch(addTokens(data)),
  };
};

const App: React.FC<Props> = ({}) => {
  useEffect(() => {
    //untuk error loading chunk failed
    console.error = (error) => {
      if (/Loading chunk [\d]+ failed/.test(error.message)) {
        console.log(
          "A new version released. Need to relaod the page to apply changes."
        );
        window.location.reload();
      }
    };

    // Triger Time delay for
    // setInterval(() => {
    //   setCounterExpired((v) => v + 1);
    // }, delay * 1000);

    // Add route to redux
    // addAuth({ routes: routes });

    // Check Expired time
    // checkLocalTokens();
  }, []);

  // useEffect(() => {
  // console.log("counterExpired ", counterExpired)
  // setTimeout(() => {
  //   console.log("status route", isMultipleArea);
  //   checkLocalTokens();
  // }, 2000);
  // }, [counterExpired, isMultipleArea]);

  // useEffect(() => {
  //   // console.log("status route = ", changeRouteStatus);
  //   // Check Expired time
  //   checkLocalTokens();
  // }, [changeRouteStatus]);

  return (
    <React.Fragment>
      <Router>
        <React.Suspense fallback={<SplashScreen />}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Review />} />
            <Route path="/thumbs" element={<Thumbs />} />
            <Route path="/emote" element={<Emote />} />
            <Route path="/cardemote" element={<CardEmote />} />
          </Routes>
        </React.Suspense>
      </Router>
      {/* {!isLocalForageChecked ? <SplashScreen /> : ""} */}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
