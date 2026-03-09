import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:harekrishnarai@protonmail.com" data-cursor="disable">
                harekrishnarai@protonmail.com
              </a>
            </p>
            <h4>Focus Areas</h4>
            <p>Supply Chain Security, Threat Intelligence</p>
          </div>
          <div className="contact-box">
            <h4>Social & Projects</h4>
            <a
              href="https://github.com/harekrishnarai"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://harekrishnarai.github.io"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
            <a
              href="https://github.com/harekrishnarai/scs-feed-visualizer"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              SCS Dashboard <MdArrowOutward />
            </a>
            <a
              href="https://harekrishnarai.github.io/scs-feed-visualizer/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Live Dashboard <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Harekrishna Rai</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
