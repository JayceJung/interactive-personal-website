import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { Grid, Row, Col } from "react-flexbox-grid";
import { BackgroundWaves } from "../BackgroundWave/BackgroundWaves";
import ScriptTag from "react-script-tag";
import "./MainPage.css";

export default function MainPage() {
  useEffect(() => {
    const link = document.querySelectorAll(".hover-this");

    const animate = function (e) {
      console.log(e.type);
      const span = this.querySelector("span");
      console.log(span);
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 50,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") {
        span.style.transform = "";
      }
    };

    link.forEach((b) => b.addEventListener("mousemove", animate));
    link.forEach((b) => b.addEventListener("mouseleave", animate));
  });

  return (
      <div id="divWrap">
        <Grid fluid>
          <Row>
            <Col className="navigationTitle" xs={7}></Col>
            <Col className="navigationTitle" xs={1}>
              <FadeIn delay={2500} transitionDuration={2000}>
                {/* <Link to="/about">About</Link> */}
              </FadeIn>
            </Col>
            <Col className="navigationTitle" xs={1}>
              <FadeIn delay={2500} transitionDuration={2000}>
              {/* <Link to="/projects">Projects</Link>                 */}
              </FadeIn>
            </Col>
            <Col className="navigationTitle" xs={1}>
              <FadeIn delay={2500} transitionDuration={2000}>
                {/* <Link to="/education">Education</Link>             */}
              </FadeIn>
            </Col>
          </Row>
          <Row id="titleRow">
            <Col id="titleWelcome" className="hover-this">
              <FadeIn delay={500} transitionDuration={2000}>
                <span>Welcome.</span>
              </FadeIn>
            </Col>
            <Col id="titleMyName" className="hover-this">
              <FadeIn delay={2000} transitionDuration={2000}>
                <span>I am Jayce.</span>
              </FadeIn>
            </Col>
          </Row>
        </Grid> 
      </div>
  );
}
