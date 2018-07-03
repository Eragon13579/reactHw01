import React, { Component } from "react";
import "./righty.css";

class Righty extends Component {
  state = {
    urls: [],
  };
  render() {
    return (
      <div className="col-sm-6">
        <button className="btn btn-danger righty"> Righty </button>
        <button className="btn btn-danger righty"> Cats </button>
        <button className="btn btn-danger righty"> Dogs </button>
      </div>
    );
  }
}
export default Righty;
