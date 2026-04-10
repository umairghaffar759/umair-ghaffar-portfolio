import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Digital Marketing Certified",
    category: "JDC Free IT City",
    tools: "SEO, Meta Ads, Content Marketing, Brand Growth Strategies",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800",
    link: "#",
  },
  {
    title: "AI & Prompt Engineering",
    category: "Advanced AI Automation",
    tools: "Google AI Studio, LLM Agents, Heygen, Grok, Image Generation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    link: "#",
  },
  {
    title: "Python & Bot Development",
    category: "Software Automation",
    tools: "Telegram Bots, Trading Signals, Automation Scripts, GitHub",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    link: "https://github.com/umairghaffar759",
  },
  {
    title: "Academic Certifications",
    category: "Punjab College Lahore",
    tools: "6 Specialized Professional Courses, ICS Physics Background",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    link: "#",
  },
  {
    title: "Global Research Leadership",
    category: "IRO Student Ambassador",
    tools: "International Research Olympiad Finalist, Strategic Communication",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    link: "#",
  },
  {
    title: "Crypto Futures & Analysis",
    category: "Professional Trading",
    tools: "Technical Analysis, Risk Management, Scalping, Binance, MEXC",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800",
    link: "#",
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Professional <span>Portfolio</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Expertise</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;