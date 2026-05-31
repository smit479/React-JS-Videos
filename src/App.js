import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import State from './state.js'; // 2. Corrected import syntax (removed quotes around State)

export default function App() {
  const [code, setCode] = useState(`function Test () { return "hello"}`);
  return (
   <State/>
  );
}
