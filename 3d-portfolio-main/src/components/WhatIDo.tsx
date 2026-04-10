import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO" id="what-i-do">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* Box 1: Marketing & E-commerce */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>MARKETING & E-COMMERCE</h3>
              <h4>Certified Growth Specialist</h4>
              <p>
                JDC certified Digital Marketer. I specialize in scaling brands through 
                Local SEO, Shopify Mastery, and Meta Ads strategies, helping businesses 
                dominate their niche.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SEO & SEM</div>
                <div className="what-tags">Shopify</div>
                <div className="what-tags">Meta Ads</div>
                <div className="what-tags">Ahrefs</div>
                <div className="what-tags">E-comm</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Box 2: AI & Python Automation */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI & AUTOMATION</h3>
              <h4>Prompt Engineering & Dev</h4>
              <p>
                Building intelligent agents and automation bots. I use Python to create 
                Telegram signal bots and leverage Prompt Engineering to automate high-quality 
                content workflows.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">AI Agents</div>
                <div className="what-tags">Prompt Design</div>
                <div className="what-tags">Bots</div>
                <div className="what-tags">GitHub</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Box 3: Crypto Trading */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CRYPTO TRADING</h3>
              <h4>Futures & Technical Analysis</h4>
              <p>
                Experienced in Crypto Futures (Scalping) on Binance and MEXC. I use 
                advanced Technical Analysis and Risk Management to capitalize on 
                short-term market movements.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Futures</div>
                <div className="what-tags">Scalping</div>
                <div className="what-tags">TradingView</div>
                <div className="what-tags">Risk Mgmt</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Box 4: Research & Security */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 3)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>RESEARCH & SECURITY</h3>
              <h4>IRO Ambassador | Cyber Law</h4>
              <p>
                International Research Olympiad (IRO) Global Finalist (Top 20%). 
                I also focus on Cyber Crime & Law, ensuring digital assets and 
                workflows are secure and compliant.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">IRO Top 20%</div>
                <div className="what-tags">Cyber Security</div>
                <div className="what-tags">Research</div>
                <div className="what-tags">Cyber Law</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}