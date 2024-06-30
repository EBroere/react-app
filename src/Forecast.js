import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/ellen-broere-bb025386/"
          target="_blank"
        >
          Ellen Broere
        </a>
        <span className="footer-emoji">🧍🏽‍♀️ </span>
        and is on{" "}
        <a
          href="https://www.github.com/EBroere/Ellen-Weather-app.git"
          target="_blank"
        >
          GitHub{" "}
        </a>
        and hosted on{" "}
        <a href="https://ellenbroere-weather-app.netlify.app/" target="_blank">
          Netlify
        </a>
        .
      </p>
    </div>
  );
}
