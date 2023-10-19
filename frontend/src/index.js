import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/globalContext";
import { AuthContextProvider } from "./context/authContext";
import { Provider } from "react-redux";
import store from "./store/store";
import Container from "./Container";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthContextProvider>
      <GlobalStyle />
      <GlobalProvider>
        <Container />
      </GlobalProvider>
    </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
