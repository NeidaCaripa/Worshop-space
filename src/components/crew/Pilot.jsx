import React from 'react';
import Nav from "../nav/Nav";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import victor from "../../assets/crew/image-victor-glover.png";

const Pilot = () => {
    const navigate = useNavigate();

  return (
    <section className="crew">
    <Nav />
    <div className="crew__container">
      <article className="crew__left">
        <h2>
          <span>02</span> MEET YOUR CREW
        </h2>
        <div className="crew__info">
          <h3>Pilot</h3>
          <h2>Victor Glover</h2>
          <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
        </div>
        <ul>
        <li onClick={() => { navigate('/crew/commander') }}></li>
            <li  onClick={() => {navigate('/crew/mission-Specialist')}}></li>
            <li  onClick={() => {navigate('/crew/pilot')}}></li>
            <li  onClick={() => {navigate('/crew/flight-Engineer')}}></li>
        </ul>
      </article>

      <article className="crew__right">
        <img src={victor} alt="Victor Glover" />
      </article>
    </div>
  </section>
  )
}

export default Pilot