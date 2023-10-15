import React from "react";
import Nav from "../nav/Nav";
import imgMars from "../../assets/destination/image-mars.png";
import { useNavigate } from "react-router-dom";

export const Mars = () => {

const navigate = useNavigate()

  return (
    <div className="destinationContainer">
      <Nav />
        <div className="destination">
          <article className="article">
            <h2>
            <strong> 01</strong>  YOUR DESTINATION
            </h2>
            <img src={imgMars} alt="" />
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

            <h2 className="name">Mars</h2>

            <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            

            <ul className="distance-travel">
              <li className="avgDistance">
                Avg. Distance
                <span>
                  <br></br>
                  225 mil. km
                </span>
              </li>
              <li className="travelTime">
                Est. travel time
                <span>
                  <br></br>
                  9 months
                </span>
              </li>
            </ul>
          </article>
        </div>
    </div>
  );
};

export default Mars;

