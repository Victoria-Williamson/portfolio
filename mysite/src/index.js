import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Resume from "../src/Resume";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#272727",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeProvider theme={theme}>
              {" "}
              <App />{" "}
            </ThemeProvider>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
