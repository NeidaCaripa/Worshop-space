import React from "react";
import Nav from "../nav/Nav";
import imgTitan from "../../assets/destination/image-titan.png";
import { useNavigate } from "react-router-dom";

export const Titan = () => {

const navigate = useNavigate()

  return (
    <div className="destinationContainer">
      <Nav />
        <div className="destination">
          <article className="article">
            <h2>
            <strong> 01</strong>  YOUR DESTINATION
            </h2>
            <img src={imgTitan} alt="" />
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

            <h2 className="name">Titan</h2>

            <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            

            <ul className="distance-travel">
              <li className="avgDistance">
                Avg. Distance
                <span>
                  <br></br>
                  1.6 bil. km
                </span>
              </li>
              <li className="travelTime">
                Est. travel time
                <span>
                  <br></br>
                  7 years
                </span>
              </li>
            </ul>
          </article>
        </div>
    </div>
  );
};

export default Titan;
