import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.txtarearef = React.createRef();
  }

  componentWillUnmount() {
    const textarea = document.getElementById("text-area");
    textarea.removeEventListener("keydown", e => this.handelKeydown(e), true);
  }

  addhtml = () => {
    const html = `
    <div> 
      enter key is disabled
      <textarea  ref="${this.txtarearef}" id='text-area'> </textarea>
    </div`;
    document.getElementById("test").innerHTML += html;
    this.inner();
  };

  inner = () => {
    const textarea = document.getElementById("text-area");
    textarea.addEventListener("keydown", e => this.handelKeydown(e), true);
  };

  handelKeydown = e => e.keyCode === 13 && e.preventDefault();

  render() {
    return (
      <div>
        <button onClick={() => this.addhtml()}> add html textarea </button>
        <div id="test" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
