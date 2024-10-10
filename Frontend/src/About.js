import React from "react";
import './About.css';

function About() {
  return(
    <>

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
          <div className="about-section">
            <p className="about-text">
              Welcome to <strong>Careers360</strong>, your premier destination for discovering job opportunities and advancing your career. At Careers360, we understand that finding the right job can be a daunting task. That’s why we are dedicated to providing a comprehensive platform that connects job seekers with top employers across various industries.
            </p>
          </div>
          <div className="about-section">
            <p className="about-text">
              Our user-friendly interface allows you to explore job vacancies tailored to your skills and aspirations, making your job search efficient and effective. Whether you are a fresh graduate looking for your first role or an experienced professional seeking new challenges, Careers360 is here to support you every step of the way.
            </p>
          </div>
          <div className="about-section">
            <p className="about-text">
              At Careers360, we believe that every individual deserves the opportunity to realize their career ambitions. Our mission is to simplify the job search process and empower job seekers with the tools they need to succeed in today’s competitive job market.
            </p>
          </div>
          <div className="about-section">
            <p className="about-text">
              Join our growing community of professionals and take the next step in your career journey with Careers360. Together, let’s unlock your potential and shape a brighter future.
            </p>
          </div>
      </div>
    </>
  )
}

export default About;