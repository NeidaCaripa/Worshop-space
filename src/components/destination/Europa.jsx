import React from "react";
import Nav from "../nav/Nav";
import imgEuropa from "../../assets/destination/image-europa.png";
import { useNavigate } from "react-router-dom";

export const Europa = () => {

const navigate = useNavigate()

  return (
    <div className="destinationContainer">
      <Nav />
        <div className="destination">
          <article className="article">
            <h2>
            <strong> 01</strong>  YOUR DESTINATION
            </h2>
            <img src={imgEuropa} alt="" />
          </article>

          <article className="item2">
          <ul>
                <li>
                  <button onClick={() => {navigate('/destination/moon')}}>Moon</button>
                </li>
                <li>
                  <button onClick={() => {navigate('/destination/mars')}}>Mars</button>
                </li>
                <li>
                  <button onClick={() => {navigate('/destination/europa')}}>Europa</button>
                </li>
                <li>
                  <button onClick={() => {navigate('/destination/titan')}}>Titan</button>
                </li>
            </ul>

            <h2 className="name">Europa</h2>

            <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            

            <ul className="distance-travel">
              <li className="avgDistance">
                Avg. Distance
                <span>
                  <br></br>
                  628 mil. km
                </span>
              </li>
              <li className="travelTime">
                Est. travel time
                <span>
                  <br></br>
                  3 years
                </span>
              </li>
            </ul>
          </article>
        </div>
    </div>
  );
};

export default Europa;
