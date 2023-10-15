import React from "react";
import Nav from "../nav/Nav";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import imageDouglasHurley from "../../assets/crew/image-douglas-hurley.png";

export default function Crew() {

  const navigate = useNavigate();

  return (
    <>
    <section className="crew">
      <Nav />
      <div className="crew__container">
        <article className="crew__left">
          <h2>
            <span>02</span> MEET YOUR CREW
          </h2>
          <div className="crew__info">
            <h3>Commander</h3>
            <h2>Douglas Hurley</h2>
            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          </div>
          <ul>
            <li onClick={() => { navigate('/crew/commander') }}></li>
            <li  onClick={() => {navigate('/crew/mission-Specialist')}}></li>
            <li  onClick={() => {navigate('/crew/pilot')}}></li>
            <li  onClick={() => {navigate('/crew/flight-Engineer')}}></li>
          </ul>
        </article>

        <article className="crew__right">
          <img src={imageDouglasHurley} alt="Douglas Hurley" />
        </article>
      </div>
    </section>
    </>
  );
}
