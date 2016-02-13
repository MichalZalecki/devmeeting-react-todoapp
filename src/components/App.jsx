import React from "react";
import TodoPage from "./TodoPage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    );
  }
}

export default App;
