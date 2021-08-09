import { render } from "preact";

const NewTab = () => (
  <div className="hello">
    <h1>Hello Preact World</h1>
    <p>Welcome to the Preact New Tab!</p>
  </div>
);

render(<NewTab />, document.getElementById("root")!);
