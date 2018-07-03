import React, { Component } from "react";
import "./lefty.css";

function Lefty() {
  return (
    <div className="col-sm-6">
      <button className="btn btn-danger lefty"> Lefty </button>
      <button className="btn btn-danger lefty"> Cats </button>
      <button className="btn btn-danger lefty"> Dogs </button>
    </div>
  );
}

export default Lefty;
