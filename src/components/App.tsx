import * as React from "react";
import { Button } from "./Button";

const App: React.ComponentType<{}> = () => {
  const [count, setCount] = React.useState(0);

  const update = React.useCallback(() => {
    setCount(count => count + 1);
  }, []);

  return (
    <>
      <h1>Hello, React</h1>
      <Button onClick={update} label={count.toString()} />
    </>
  );
};

export default App;
