// imports
import { React } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Restrict from "../../components/restrict";
import Shadow from "../../components/shadow";
import "./about.scss";

// component
const About = () => {
  return (
    <div className="page">
      <Restrict />
      <div className="wrapper">
        <Navbar
          linkAnchor="mailto:ibrahimibrahim851@outlook.com"
          linkTitle="reach out"
        />
        <main className="main" role="main">
          {/* introduction */}
          <div className="intro">
            <h1 className="intro__title">
              I'm an interactive designer who currently works in France.
            </h1>
            <p className="intro__list">
              <span className="intro__item">twitter</span>
              <span className="intro__item">dribbble</span>
              <span className="intro__item">linkedin</span>
              <span className="intro__item">instagram</span>
              <span className="intro__item">github</span>
            </p>
          </div>

          {/* hello */}
          <div className="section">
            <div className="section__title">HELLO THERE</div>
            <div className="section__subtitle">
              I design digital products and websites for startups, brands, and
              entrepreneurs with cool projects. I love to design fresh
              interfaces with an attention to detail and coherence for a bright
              rendering. Some of my favourite hobbies are to build video games
              graphics and eat up California makis.
              <p>
                I've founded Interface in Game a creative tool for video game
                lovers and game designers. You can explore a collection of video
                games interfacs, screenshots and articles. The goal is to
                inspire and help the creation process.
              </p>
            </div>
          </div>

          {/* hello */}
          <div className="section">
            <div className="section__title">AT WORK</div>
            <div className="section__subtitle">
              I ask a lot of questions to understand the problems my clients
              want to solve and the goals they want to achieve. I then create
              high-fidelity wireframes that aim to address those goals. Those
              wireframes get turned into visual interfaces, sometimes with
              subtle motion effects, to be prototyped and tested with real
              people.
            </div>
          </div>

          <div className="section">
            <div className="section__title">IN LIFE</div>
            <div className="section__subtitle">
              I’m the guy who always organizes the holiday trips, and I usually
              send the most messages on my family’s WhatsApp group. I’m a
              passionate world traveler (40+ countries). In my ten year career
              as an amateur boxer, I have an impressively unimpressive unbeaten
              record (1-0-0). I always eat standing up because those calories
              don’t count.
            </div>
          </div>

          <h1 className="footer__title">
            Whenever, wherever.
            <br /> We're meant to work <br />
            together.
          </h1>

          <div className="section">
            <div className="section__title">GET IN TOUCH</div>
            <div className="section__subtitle">
              Contact me for full-time jobs, freelance projects or to say hello,
              you can reach out to me at <b>ibrahimibrahim851@outlook.com</b>. I
              have an inbox zero rule so I’ll see your message for sure and,
              I’ll reply with at least one smiley. I promise. You can also reach
              out to me on <b>twitter</b>, <b>dribbble</b>, <b>linkedin</b>,{" "}
              <b>instagram</b>, <b>github</b> and you can download my{" "}
              <b>resume</b> as well.
            </div>
          </div>

          {/* <div className="contact">
            <div className="contact__item">email</div>
            <div className="contact__item">twitter</div>
            <div className="contact__item">dribbble</div>
            <div className="contact__item">linkedin</div>
            <div className="contact__item">instagram</div>
            <div className="contact__item">resume</div>
          </div> */}
        </main>
        <Footer
          linkA="https://www.github.com/devwraithe"
          linkATitle="view github"
          linkB="mailto:ibrahimibrahim851@outlook.com"
          linkBTitle="send email"
        />
      </div>
    </div>
  );
};

// export
export default About;
