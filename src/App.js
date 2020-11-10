import React from "react";
import "./style.css";
import { DemoComponent } from "./DemoComponent";
import { Example } from "./Example";

const App = () => {
  const [time, setTime] = React.useState(200);
  return (
    <div>
      <Example time={time} />
      <DemoComponent time={time} onChange={setTime} />
    </div>
  );
};

export default App;
