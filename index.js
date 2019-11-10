import React, { Component } from "react";
import { render, findDOMNode } from "react-dom";
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
    this.txtarearef.removeEventListener("keydown", e => this.handelKeydown(e), true);
  }

  addhtml = () => {
    const html = `
    <div> 
      enter key is disabled
      <div> 
        <div> 
          <textarea  id='text-area'> </textarea>
        </div>
      </div>
    </div`;
    document.getElementById("test").innerHTML += html;
    this.inner();
  };

  inner = () => {
    this.findChildNode(this.txtarearef.current, 0);
  };

  findChildNode = (node, level) => {
    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].tagName === "TEXTAREA") {
        const textareaEl = node.children[i];
        textareaEl.addEventListener(
          "keydown",
          e => this.handelKeydown(e),
          true
        );
      }
      this.findChildNode(node.children[i], level);
    }
    return node;
  };

  handelKeydown = e => e.keyCode === 13 && e.preventDefault();

  render() {
    return (
      <div>
        <button onClick={() => this.addhtml()}> add html textarea </button>
        <div ref={this.txtarearef} id="test" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
