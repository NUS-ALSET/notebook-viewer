import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Add a notebook viewer to view the local example_notebook.ipynb file.</h2>
    <ul>
      <li><a href="https://github.com/eoinmurray/react-jupyter">react-jupyter</a></li>
    </ul>    
  </div>
);

render(<App />, document.getElementById("root"));
