import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import "./footer.scss"

const Footer = () => (
  <div className="main-footer">
    <div className="footer-middle">
      <Container>
        <Row>
          <Col>
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>080-497-4025</li>
              <li>tkhamsila@gmail.com</li>
            </ul>
          </Col>
          <Col>
            <h4>Product</h4>
            <ul className="list-unstyled">
              <li>scg express</li>
              <li>It</li>
              <li>cement</li>
            </ul>
          </Col>
          <Col>
            <h4>About Us</h4>
            <ul className="list-unstyled">
              <li>Terms And Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col>
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>facebook</li>
              <li>instragram</li>
              <li>twitter</li>
              <li>line</li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p className="text-xs-center">2020 SCG</p>
        </div>
      </Container>
    </div>
  </div>
)

export default Footer
