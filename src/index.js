import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const importAll = (r) => r.keys().map(r);
const extraImages = importAll(
  require.context("./images-extra", false, /\.(png|jpe?g|svg)$/)
);
const residentialImages = importAll(
  require.context("./images-residential", false, /\.(png|jpe?g|svg)$/)
);
const commercialImages = importAll(
  require.context("./images-commercial", false, /\.(png|jpe?g|svg)$/)
);
const processImages = importAll(
  require.context("./images-process", false, /\.(png|jpe?g|svg)$/)
);

export { extraImages, residentialImages, commercialImages, processImages };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
