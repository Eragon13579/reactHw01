import React, { Component } from "react";

class Header extends Component {
  state = {
    text: "Hello",
  };

  handleClick = () => {
    this.setState({
      text: "GoodBye",
    });
  };
  render() {
    return (
      <div class="row text-center">
        <div class="col-sm-8"> {this.state.text} </div>
        <button class="col-sm-4 btn btn-warning" onClick={this.handleClick}>
          {" "}
          Click Me!{" "}
        </button>
      </div>
    );
  }
}

export default Header;
