import btnArrow from "/assets/images/btn-arrow.svg";
import { useLang } from "../../context/LanguageContext";

const FooterV1 = () => {
    const { t } = useLang();
    const f = t.footer;

    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="row">

                        {/* Company Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>{f.company}</h4>
                                    <ul>
                                        <li>
                                            <a className="with-border" href="#about">
                                                <img src={btnArrow} alt="icon" /> {f.links.about}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="#team">
                                                <img src={btnArrow} alt="icon" /> {f.links.team}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="#projects">
                                                <img src={btnArrow} alt="icon" /> {f.links.projects}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="#services">
                                                <img src={btnArrow} alt="icon" /> {f.links.services}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    &copy; {new Date().getFullYear()} {f.rights}
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-contact-infos">
                                    <div className="footer-widget-top">
                                        <h4>{f.reachOut}</h4>
                                        <div className="links">
                                            <div className="split-text-anim">
                                                <a
                                                    data-aos="slide-up"
                                                    data-aos-duration={700}
                                                    href="mailto:era1bullari1@gmail.com"
                                                    className="with-border"
                                                >
                                                    email@test.com
                                                </a>
                                            </div>
                                            <div className="split-text-anim">
                                                <a
                                                    data-aos="slide-up"
                                                    data-aos-duration={700}
                                                    href="#contact"
                                                    className="with-border"
                                                >
                                                    {f.location}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#contact" className="theme-btn">
                                        {f.letsConnect}
                                        <img src={btnArrow} alt="icon" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>{f.social}</h4>
                                    <ul>
                                        <li>
                                            <a className="with-border" href="https://instagram.com/" target="_blank" rel="noreferrer">
                                                <img src={btnArrow} alt="icon" /> Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://linkedin.com/" target="_blank" rel="noreferrer">
                                                <img src={btnArrow} alt="icon" /> LinkedIn
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://github.com/" target="_blank" rel="noreferrer">
                                                <img src={btnArrow} alt="icon" /> GitHub
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    {f.location}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Large ESH wordmark at footer bottom */}
                <div className="footer-bottom">
                    <div className="split-text-anim">
                        <h1
                            data-aos="slide-up"
                            data-aos-duration={700}
                            style={{
                                fontWeight: 900,
                                fontSize: "clamp(4rem, 14vw, 12rem)",
                                letterSpacing: "0.05em",
                                margin: 0,
                                lineHeight: 1,
                                userSelect: "none",
                            }}
                        >
                            <span style={{ color: "rgba(255,255,255,0.06)" }}>E</span>
                            <span style={{ color: "rgba(136,136,136,0.06)" }}>SH</span>
                            <span style={{ color: "rgba(255,255,255,0.06)" }}>B</span>
                        </h1>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
