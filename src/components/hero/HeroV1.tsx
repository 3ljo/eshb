import btnArrowIcon from "/assets/images/btn-arrow.svg";
import { useLang } from "../../context/LanguageContext";

const HeroV1 = () => {
    const { t } = useLang();
    const h = t.hero;

    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Background video */}
                        <div className="hero-video">
                            <video loop muted autoPlay>
                                <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="hero-top">
                            {/* Quote / description */}
                            <div className="hero-top-desc">
                                <p>{h.quote1}</p>
                                <p>{h.quote2}</p>
                            </div>

                            {/* Founder info */}
                            <div className="author-info">
                                <h4>{h.ceoName}</h4>
                                <span>{h.ceoTitle}</span>
                            </div>
                        </div>

                        {/* Hero bottom — headline + CTA */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{h.heading1}</h2>
                                <h2>{h.heading2}</h2>
                            </div>

                            <a href="#contact" className="theme-btn">
                                {h.cta}
                                <img src={btnArrowIcon} alt="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;
