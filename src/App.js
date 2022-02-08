import "./styles.css";
import { useState } from "react";
import Content from "./Content";
import Test from "./resize";
import RunTime from "./RunTime";
import Avatar from "./prevAvater";
import Chat from "./fakeChat";
import LayoutEffect from "./useLayoutEffect";

//Fake chat comment
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lession-${id}`, {
        detail: `comment lession ${id}`
      })
    );
  }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setToggle((pre) => !pre)}>toggle</button>
      {toggle && <LayoutEffect />}
      {toggle && <Chat />}
      {toggle && <Avatar />}
      {toggle && <RunTime />}
      {toggle && <Test />}
      {toggle && <Content />}
    </div>
  );
}
