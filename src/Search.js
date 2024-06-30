import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="Form">
        <div className="Row">
          <input
            type="Search"
            placeHolder="Enter a city.."
            required
            className="Input"
            id="Input"
          />
          <input type="Submit" value="Search" className="Button" />
        </div>
      </form>
    </div>
  );
}
