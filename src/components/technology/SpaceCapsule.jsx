import React from "react";
import Nav from "../nav/Nav";
import "./style.scss";
import imgLaunch from "../../assets/technology/image-space-capsule-landscape.jpg"
import { useNavigate } from "react-router-dom";

const SpaceCapsule = () => {
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

              <h2>Space capsule</h2>

              <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </article>
  
        <article className="img">
          <img src={imgLaunch} alt="Launch" />
        </article>
    </section>
  </div>
  )
}

export default SpaceCapsule