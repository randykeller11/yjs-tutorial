import "./App.css";
import React, { Suspense, useState, useEffect } from "react";

import * as Y from "yjs";

import { bindProxyAndYMap } from "valtio-yjs";

import { WebrtcProvider } from "y-webrtc";

import { proxy, subscribe, useSnapshot } from "valtio";

const ydoc = new Y.Doc();
const provider = new WebrtcProvider("test", ydoc);
const ymap = ydoc.getMap("map");

const avatarStore = proxy({});
bindProxyAndYMap(chatStore, ymap);

function App() {
  provider.on("peers", (e) => setNewPeer(console.log(e)));

  const snap = useSnapshot(chatStore);
  // const otherUsers = Object.keys({ ...snap }).filter(
  //   (user) => user != username
  // );

  return <div>connected</div>;
}

export default App;
