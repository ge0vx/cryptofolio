import React from "react";
import { Provider } from "react-redux";
import AppNavigation from './src/navigations';
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
