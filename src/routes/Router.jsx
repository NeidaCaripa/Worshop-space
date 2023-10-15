import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Destination from "../components/destination/Destination";
import Crew from "../components/crew/Crew";
import Technology from "../components/technology/Technology";
import Mars from "../components/destination/Mars";
import Europa from "../components/destination/Europa";
import Titan from "../components/destination/Titan";
import Spaceport from "../components/technology/Spaceport";
import SpaceCapsule from "../components/technology/SpaceCapsule";
import MissionSpecialist from "../components/crew/MissionSpecialist";
import Pilot from "../components/crew/Pilot";
import FlightEngineer from "../components/crew/FlightEngineer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/moon" element={<Destination />} /> 
        <Route path="/destination/mars" element={<Mars />} /> 
        <Route path="/destination/europa" element={<Europa />} /> 
        <Route path="/destination/titan" element={<Titan />} /> 
        <Route path="/crew/commander" element={<Crew />} />
        <Route path="/crew/mission-Specialist" element={<MissionSpecialist />} />
        <Route path="/crew/pilot" element={<Pilot />} />
        <Route path="/crew/flight-Engineer" element={<FlightEngineer />} />
        <Route path="/technology/launch" element={<Technology />} />
        <Route path="/technology/spaceport" element={<Spaceport />} />
        <Route path="/technology/space-capsule" element={<SpaceCapsule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
