import React, { useState } from "react";
import "./About_us.css";

import collaborate from "../../../img/collaboration.png";
import collaboratehover from "../../../img/collaborationhover.png";
import knowledge from "../../../img/knowledge.png";
import knowledgehover from "../../../img/knowledgehover.png";
import project from "../../../img/project.png";
import projecthover from "../../../img/projecthover.png";
import event from "../../../img/event.png";
import eventhover from "../../../img/eventhover.png";

const AboutUs = () => {
  const [hover, setHover] = useState({
    collaborate: false,
    knowledge: false,
    project: false,
    event: false,
  });

  return (
    <section id="about-us" className="about-us">
      <div className="about-intro">
        <h1 className="about-us-heading">About Us</h1>
        <p>
          SyncUp is a modern collaboration platform built to simplify teamwork. 
          Whether you’re managing projects, tracking habits, or sharing resources, 
          SyncUp provides a seamless and intuitive experience. 
          Our mission is to bring people together, organize ideas, and achieve goals faster. 🚀
        </p>
      </div>

      <div className="about-us-grid">
        {/* Collaboration Hub */}
        <div
          className="about-us-card"
          onMouseEnter={() => setHover({ ...hover, collaborate: true })}
          onMouseLeave={() => setHover({ ...hover, collaborate: false })}
        >
          <div className="about-us-card-header">
            <img
              src={hover.collaborate ? collaboratehover : collaborate}
              alt="Collaboration"
              className="about-us-icon"
            />
            <h3>Collaboration Hub</h3>
          </div>
          <p>
            A central space where students can form teams, share resources, and
            brainstorm ideas seamlessly. Features like group chats, file sharing,
            and task management foster effective collaboration across
            universities.
          </p>
        </div>

        {/* Knowledge Exchange */}
        <div
          className="about-us-card"
          onMouseEnter={() => setHover({ ...hover, knowledge: true })}
          onMouseLeave={() => setHover({ ...hover, knowledge: false })}
        >
          <div className="about-us-card-header">
            <img
              src={hover.knowledge ? knowledgehover : knowledge}
              alt="Knowledge"
              className="about-us-icon"
            />
            <h3>Knowledge Exchange Forum</h3>
          </div>
          <p>
            An interactive forum where students engage in discussions, ask
            questions, and share insights. Encouraging peer-to-peer knowledge
            exchange beyond classroom boundaries.
          </p>
        </div>

        {/* Project Showcase */}
        <div
          className="about-us-card"
          onMouseEnter={() => setHover({ ...hover, project: true })}
          onMouseLeave={() => setHover({ ...hover, project: false })}
        >
          <div className="about-us-card-header">
            <img
              src={hover.project ? projecthover : project}
              alt="Project"
              className="about-us-icon"
            />
            <h3>Project Showcase</h3>
          </div>
          <p>
            A platform for students to showcase projects, research papers, and
            innovative solutions. Providing recognition, visibility, and
            networking opportunities with peers, educators, and industry.
          </p>
        </div>

        {/* Virtual Events */}
        <div
          className="about-us-card"
          onMouseEnter={() => setHover({ ...hover, event: true })}
          onMouseLeave={() => setHover({ ...hover, event: false })}
        >
          <div className="about-us-card-header">
            <img
              src={hover.event ? eventhover : event}
              alt="Event"
              className="about-us-icon"
            />
            <h3>Virtual Events Space</h3>
          </div>
          <p>
            A virtual environment for universities to host seminars, workshops,
            and collaborative events. Enabling students to interact with experts
            and broaden their perspectives worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
