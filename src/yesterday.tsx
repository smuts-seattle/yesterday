import React from "react";
import "./App.css";

export function Yesterday() {
  return (
    <div className="yesterday">
      <p className="text">today is yesterday</p>
    </div>
  );
}

export function Today() {
  return (
    <div className="today">
      <p className="text">today is not yesterday</p>
    </div>
  );
}
