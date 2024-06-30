import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div className="Info">
      <ul>
        <li>
          Day & Time: <strong>Saturday 18:45PM</strong>,
        </li>
        <li>
          Condition: <strong>Clear sky</strong>,
        </li>
        <li>
          Humidity: <strong>50%</strong>, Wind: <strong>4.63km/h</strong>,
        </li>
        <li>
          Feels Like: <strong>20.33</strong>, Pressure:{" "}
          <strong>1022 hPa</strong>,
        </li>
        <li>
          Coordinates: lat. <strong>53.2190652</strong>, long.{" "}
          <strong>6.5680077</strong>.
        </li>
      </ul>
    </div>
  );
}
