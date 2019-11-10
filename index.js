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
    this.txtarearef.removeEventListener(
      "keydown",
      e => this.handelKeydown(e),
      true
    );
  }

  addhtml = () => {
    const html = `
    <div> 
      enter key is disabled
      <div> 
        <div> 
          <textarea  id='text-area'> </textarea>
          <div>
         
            <p>     
            </p>
           </div>
        </div>
      </div>
    </div`;
    document.getElementById("test").innerHTML += html;
    this.inner();
  };

  inner = () => {
    this.findChildNode(this.txtarearef.current, "TEXTAREA");
  };

  findChildNode = (node, target) => {
    for (let i = 0; i < node.children.length; i++) {
      const { tagName } = node.children[i];
      if (tagName === target) {
        return this.addEventListener(node.children[i]);
      }
      this.findChildNode(node.children[i], target);
    }
    return node;
  };

  addEventListener = textareaEl => {
    textareaEl.addEventListener("keydown", e => this.handelKeydown(e), true);
  };

  handelKeydown = e => e.keyCode === 13 && e.preventDefault();

  render() {
    return (
      <>
        <button onClick={() => this.addhtml()}> add html textarea </button>
        <div ref={this.txtarearef} id="test" />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
