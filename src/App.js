import React from "react";
import "./styles.css";
import { CustomMessages } from "../src/CustomMessages/CustomMessages";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Custom Messages State Management POC</h1>
      </div>
      <CustomMessages />
    </>
  );
}
