import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about__container container grid">
          <h2 className="section__title-1">
            <span>About Me.</span>
          </h2>

          <div className="about__perfil">
            <div className="about__image">
              <img
                src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3Njk4OTB8&ixlib=rb-4.0.3&q=85"
                alt="imaghgje"
                className="about__img"
              />

              <div className="about__shadow"></div>

              <div className="geometric-box"></div>

              <div className="about__box"></div>
            </div>
          </div>

          <div className="about__info">
            <p className="about__description">
              Passionate about creating <b>Web Pages</b> with
              <b>UI/UX User Interface</b>, I have years of experience and many
              clients are happy with the projects carried out.
            </p>

            <ul className="about__list">
              <li className="about__item">
                <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git &
                GitHub, Bootstrap, Flutter & Figma.
              </li>
            </ul>

            <div className="about__buttons">
              <a href="#contact" className="button">
                <i className="ri-send-plane-line"></i> Contact Me
              </a>

              <a href="https://www.linkedin.com/" className="button__ghost">
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
