import React from "react";
import ReactDOM from "react-dom";
import Part1 from "./pages.js/compoments/Part1";
import Part2 from "./pages.js/compoments/Part2";
import Part3 from "./pages.js/compoments/Part3";
import Part4 from "./pages.js/compoments/Part4";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Part: 1
    };
  }

  renderizaPart = () => {
    switch (this.state.Part) {
      case 1:
        return <Part1 />;
      case 2:
        return <Part2 />;
      case 3:
        return <Part3 />;
      default:
        return <Part4 />;
    }
  };

  

  render() {
    return (
      <div className="App">
        {this.renderizaPart()}
        
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

