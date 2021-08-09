import { render } from "preact";
import { browser } from "webextension-polyfill-ts";

const NewTab = () => {
  const openOptionPage = () => {
    browser.runtime.openOptionsPage();
  };
  return (
    <div className="container">
      <h1>Hello Preact World</h1>
      <p>Welcome to popup</p>
      <button onClick={openOptionPage}>Open Option</button>
    </div>
  );
};

render(<NewTab />, document.getElementById("root")!);
