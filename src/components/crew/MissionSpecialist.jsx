import React from 'react';
import Nav from "../nav/Nav";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import mark from "../../assets/crew/image-mark-shuttleworth.png";

const MissionSpecialist = () => {

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
                        <h3>Mission Specialist</h3>
                        <h2>Mark Shuttleworth</h2>
                        <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                    </div>
                    <ul>
                        <li onClick={() => { navigate('/crew/commander') }}></li>
                        <li onClick={() => { navigate('/crew/mission-Specialist') }}></li>
                        <li onClick={() => { navigate('/crew/pilot') }}></li>
                        <li onClick={() => { navigate('/crew/flight-Engineer') }}></li>
                    </ul>
                </article>

                <article className="crew__right">
                    <img src={mark} alt="Mark Shuttleworth" />
                </article>
            </div>
        </section>
    );
}

export default MissionSpecialist
