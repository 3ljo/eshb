const sidebarbg = "/assets/images/technology-meets-humanity-background-modern-remak-2026-01-07-07-37-57-utc.jpg";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState } from "react";
import { useLang } from "../../context/LanguageContext";

const HeaderSidebar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);
    const { t, lang, toggleLang } = useLang();

    useEffect(() => {
        const handleScroll = () => {
            setIsHamburgActive(window.scrollY >= 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHamburgClick = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = () => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            {/* Hamburger menu */}
            <div className="scroll-to-show-menu">
                <span className={`hamburg-menu ${isHamburgActive ? "active" : ""}`} onClick={handleHamburgClick}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar */}
            <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
                <div className="header-sidebar-content">
                    <span className="close-header-sidebar" onClick={handleCloseClick}>
                        <i className="las la-times" />
                    </span>

                    <img src={sidebarbg} alt="sidebar" className="sidebar-shape" />

                    <div className="header-sidebar-top">
                        <ul>
                            <li>
                                <span>{t.contact.location}</span>
                                <a href="mailto:email@test.com">email@test.com</a>
                            </li>
                            <li>
                                <span>ESHB Technology</span>
                                <a href="#contact" onClick={handleCloseClick}>{t.nav.contact}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar navigation */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="#about" onClick={handleCloseClick}>{t.nav.about}</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleCloseClick}>{t.nav.services}</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleCloseClick}>{t.nav.projects}</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={handleCloseClick}>{t.nav.team}</a>
                            </li>
                            <li>
                                <a href="#faq" onClick={handleCloseClick}>{t.nav.faq}</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleCloseClick}>{t.nav.contact}</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Language toggle in sidebar */}
                    <div style={{ padding: "20px 0" }}>
                        <button
                            onClick={toggleLang}
                            style={{
                                background: "transparent",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "#fff",
                                padding: "8px 18px",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                                letterSpacing: "0.08em",
                            }}
                        >
                            {lang === "en" ? "🇦🇱 Shqip" : "🇬🇧 English"}
                        </button>
                    </div>

                    <div className="header-sidebar-bottom">
                        <ul>
                            <SocialShareV1 />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;
