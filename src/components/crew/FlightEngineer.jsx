import React from 'react';
import Nav from "../nav/Nav";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

const FlightEngineer = () => {
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
          <h3>Flight Engineer</h3>
          <h2>Anousheh Ansari</h2>
          <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
        </div>
        <ul>
        <li onClick={() => { navigate('/crew/commander') }}></li>
            <li  onClick={() => {navigate('/crew/mission-Specialist')}}></li>
            <li  onClick={() => {navigate('/crew/pilot')}}></li>
            <li  onClick={() => {navigate('/crew/flight-Engineer')}}></li>
        </ul>
      </article>

      <article className="crew__right">
        <img src={anousheh} alt="Anousheh Ansari" />
      </article>
    </div>
  </section>
  )
}

export default FlightEngineer
