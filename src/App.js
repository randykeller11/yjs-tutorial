import "./App.css";
import React, { Suspense, useState, useEffect } from "react";

import * as Y from "yjs";

import { bindProxyAndYMap } from "valtio-yjs";

import { WebrtcProvider } from "y-webrtc";

import { proxy, subscribe, useSnapshot } from "valtio";

const ydoc = new Y.Doc();
const ymap = ydoc.getMap("map");
const provider = new WebrtcProvider("test2", ydoc);

const chatStore = proxy({});
bindProxyAndYMap(chatStore, ymap);

function App() {
  // provider.on("peers", (e) => console.log(e));

  const snap = useSnapshot(chatStore);
  // const otherUsers = Object.keys({ ...snap }).filter(
  //   (user) => user != username
  // );

  const [button, setButton] = useState("");

  useEffect(() => {
    console.log(snap);
  }, [snap]);

  return (
    <div>
      <input
        type="text"
        value={button}
        onChange={(e) => setButton(e.target.value)}
      />
      <button
        onClick={() => {
          chatStore[button] = "🏆";
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
