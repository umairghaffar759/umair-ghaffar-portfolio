import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Item 1: Crypto Trading */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Crypto Strategist</h4>
                <h5>Self-Employed | Futures Trading</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Specializing in **Crypto Futures Trading**, focusing on high-frequency Scalping and Day Trading. 
              Utilizing advanced technical analysis and risk management strategies on platforms like Binance and MEXC.
            </p>
          </div>

          {/* Item 2: AI & Automation */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Prompt Engineer</h4>
                <h5>Automation & LLM Development</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Developing specialized **AI Agents** and custom prompts. Building automation 
              workflows for content creation and trading signal bots using Python and Google AI Studio.
            </p>
          </div>

          {/* Item 3: Digital Marketing */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketer</h4>
                <h5>JDC Certified | SEO Specialist</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Certified from **JDC Free IT City**. Implementing SEO strategies and 
              Meta Ads campaigns to scale online brands and improve search visibility 
              through data-driven marketing.
            </p>
          </div>

          {/* Item 4: Global Leadership & Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IRO Student Ambassador</h4>
                <h5>Global Finalist | Top 20%</h5>
              </div>
              <h3>2023–26</h3>
            </div>
            <p>
              Selected as a finalist in the **International Research Olympiad (IRO)**, ranking in the **Top 20% globally**. 
              Currently pursuing ICS at Punjab College with **6+ professional certifications** in Python, Web Dev, and Cyber Security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;