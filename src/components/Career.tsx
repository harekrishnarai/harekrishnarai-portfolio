import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Web Application Development</h5>
              </div>
              <h3>2020-2023</h3>
            </div>
            <p>
              Built 15+ production applications using React.js, Next.js, and Node.js.
              Designed scalable microservices architectures, implemented authentication systems,
              and created responsive UI/UX designs. Strong focus on performance optimization
              and code quality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Security Researcher & Developer</h4>
                <h5>Supply Chain Security Intelligence</h5>
              </div>
              <h3>2023-2024</h3>
            </div>
            <p>
              Developed SCS Feed Visualizer - an advanced supply chain security intelligence
              platform aggregating 280+ days of threat data from 17+ security sources.
              Built interactive dashboards with React, Next.js, and Recharts. Created
              comprehensive data analysis pipelines and threat visualization tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer & Security Researcher</h4>
                <h5>Independent / Current</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building security-focused applications and dashboards. Active in supply chain
              security research and threat intelligence. Contributing to open-source security
              tools and maintaining multiple production-ready projects including portfolio
              websites, intelligence platforms, and data visualization applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
