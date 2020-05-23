import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import { Todos } from "./components/Todos";

const App: React.ComponentType<unknown> = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
