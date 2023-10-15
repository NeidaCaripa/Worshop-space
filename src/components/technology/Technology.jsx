import React from "react";
import Nav from "../nav/Nav";
import "./style.scss";
import imgLaunch from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import { useNavigate } from "react-router-dom";

export const Technology = () => {
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

                <h2>Launch vehicle</h2>

                <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
              </article>

          <article className="img">
            <img src={imgLaunch} alt="Launch" />
          </article>
      </section>
    </div>
  );
};

export default Technology;
