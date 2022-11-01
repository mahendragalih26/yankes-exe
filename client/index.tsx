import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./style/app.scss";
import { Provider } from "react-redux";
// import './styles/app.scss';
import store from "./redux/store";
// const AlertDialog = React.lazy(() => import('./components/dialogs/AlertDialog'));

ReactDOM.render(
  <Provider store={store}>
    <App />
    <React.Suspense fallback={"loading"}>
      {/* <AlertDialog /> */}
    </React.Suspense>
  </Provider>,
  document.getElementById("root")
);
