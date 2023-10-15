import React from "react";
import Nav from "../nav/Nav";
import "./style.scss";
import imgLaunch from "../../assets/technology/image-spaceport-landscape.jpg"
import { useNavigate } from "react-router-dom";

const Spaceport = () => {
    const navigate = useNavigate()
  return (
    <div className="technologyContainer">
    <Nav />
    <h2 className="title">
            03
            <span>SPACE LAUNCH 101</span>
          </h2>
    <section className="technology">
            <article className="item">
              <ul>
                  <li>
                    <button onClick={() => {navigate('/technology/launch')}}>
                      1
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {navigate('/technology/spaceport')}}>
                      2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {navigate('/technology/space-capsule')}}>
                      3
                    </button>
                  </li>
              </ul>
            </article>

            <article className="info">
              <h3>The terminology...</h3>

              <h2>Spaceport</h2>

              <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
            </article>
        <article className="img">
          <img src={imgLaunch} alt="Launch" />
        </article>
    </section>
  </div>
  )
}

export default Spaceport