import React, { useEffect, useState, ReactElement, ReactNode } from "react";

//-------------------------------------------------
//IMPORTANT!!
//DYNAMIC IMPORT FOR PAGES
//PLEASE USING REACT LAZY BEFORE CREATING NEW ROUTE
//-------------------------------------------------

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { authenticationService } from "./services/authentication.service";
import { connect } from "react-redux";
// import { Auth, Tokens } from "./helper/initState";
// import RouteConfig from "./RouteConfig";
import SplashScreen from "./components/loadings/SplashScreen";
import e from "express";

// Import Page
const Review = React.lazy(() => import("./page/review"));

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
  const [isLocalForageChecked, setIsLocalForageChecked] =
    useState<boolean>(false);
  // const delay = 60; // in second (call expired API)
  const [counterExpired, setCounterExpired] = useState<number>(0);
  const [isMultipleArea, setIsMultipleArea] = useState<boolean>(true);
  const [changeRouteStatus, setChangeRouteStatus] = useState<any>("");

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
              <Route path='/' element={<Review/>} />
          </Routes>
        </React.Suspense>
      </Router>
      {/* {!isLocalForageChecked ? <SplashScreen /> : ""} */}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
