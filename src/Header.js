import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import Info from "./Info";
import Temperature from "./Temperature";

export default function Header() {
  return (
    <div className="Header">
      <h1>Groningen,</h1>
      <h2>Netherlands</h2>
      <Row>
        <Col>
          <Info />
        </Col>
        <Col>
          <Temperature />
        </Col>
      </Row>
    </div>
  );
}
