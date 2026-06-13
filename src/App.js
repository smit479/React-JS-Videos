import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import State from './state.js'; 
import Forms from './form.js'; 
import Todo from './todo/todo.js'; 

export default function App() {
  const [code, setCode] = useState(`function Test () { return "hello"}`);
  
  return (
    <>
      <State />
      <Forms />
      <Todo/>
    </>
  );
}
