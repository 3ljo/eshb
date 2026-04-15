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
                            <video loop muted autoPlay playsInline>
                                <source src="/assets/video/screen-with-code-2026-01-21-12-08-37-utc.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>{h.quote1}</p>
                                <p>{h.quote2}</p>
                            </div>
                            <div className="author-info">
                                <h4>{h.ceoName}</h4>
                                <span>{h.ceoTitle}</span>
                            </div>
                        </div>

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
