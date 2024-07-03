import React from "react";
import "./Forecast.css";

import { Row, Col } from "react-bootstrap";

export default function Forecast() {
  return (
    <div className="Forecast">
      <p>Here is the weather forecast for the next few days:</p>
      <div className="Days">
        <Row>
          <ul>
            <Col>
              <li>Sat</li>{" "}
            </Col>
            <Col>
              {" "}
              <li>Sun</li>{" "}
            </Col>
            <Col>
              {" "}
              <li>Mon</li>{" "}
            </Col>
            <Col>
              {" "}
              <li>Tue</li>{" "}
            </Col>
            <Col>
              {" "}
              <li>Wed</li>{" "}
            </Col>
          </ul>
        </Row>
      </div>

      <div className="Emoji">
        <Row>
          <ul>
            <Col>
              <li>☁️</li>{" "}
            </Col>
            <Col>
              {" "}
              <li>☀️</li>{" "}
            </Col>
            <Col>
              {" "}
              <li>🌦️</li>{" "}
            </Col>
            <Col>
              {" "}
              <li>☀️</li>{" "}
            </Col>
            <Col>
              {" "}
              <li>🌦️</li>{" "}
            </Col>
          </ul>
        </Row>
      </div>

      <div className="MinMax">
        <Row>
          <ul>
            <Col>
              {" "}
              <li>
                <strong> 21° </strong> 9°
              </li>{" "}
            </Col>
            <Col>
              {" "}
              <li>
                <strong> 20° </strong> 9°
              </li>{" "}
            </Col>
            <Col>
              {" "}
              <li>
                <strong> 24° </strong> 11°
              </li>{" "}
            </Col>
            <Col>
              {" "}
              <li>
                <strong> 23° </strong> 12°
              </li>{" "}
            </Col>
            <Col>
              {" "}
              <li>
                <strong> 21° </strong> 13°
              </li>{" "}
            </Col>
          </ul>
        </Row>
      </div>
    </div>
  );
}
