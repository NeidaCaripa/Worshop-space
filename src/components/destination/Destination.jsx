import React from "react";
import Nav from "../nav/Nav";
import "./style.scss";
import Moon from "../../assets/destination/image-moon.png";
import { useNavigate } from "react-router-dom";

export const Destination = () => {
  
const navigate = useNavigate()

  return (
    <div className="destinationContainer">
      <Nav />
        <div className="destination">
          <article className="article">
            <h2>
            <strong> 01</strong>  YOUR DESTINATION
            </h2>
            <img src={Moon} alt="" />
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

            <h2 className="name">Moon</h2>

            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            

            <ul className="distance-travel">
              <li className="avgDistance">
                Avg. Distance
                <span>
                  <br></br>
                  384,400 km
                </span>
              </li>
              <li className="travelTime">
                Est. travel time
                <span>
                  <br></br>
                  3 days
                </span>
              </li>
            </ul>
          </article>
        </div>
    </div>
  );
};

export default Destination;
