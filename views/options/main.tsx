import { render } from "preact";

const Option = () => (
  <div className="hello">
    <h1>Hello Preact World</h1>
    <p>Welcome to the Option Page</p>
  </div>
);

render(<Option />, document.getElementById("root")!);
