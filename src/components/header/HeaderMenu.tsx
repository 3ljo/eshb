import { useState } from "react";
import { useLang } from "../../context/LanguageContext";

const HeaderMenu = () => {
    const { t, lang, toggleLang } = useLang();
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenu = () => setMobileOpen(false);

    return (
        <>
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        {/* ESHB Text Logo — E white, SH grey, B white */}
                        <a href="#hero" className="logo" style={{ textDecoration: "none" }}>
                            <span style={{ fontWeight: 900, fontSize: "1.8rem", letterSpacing: "0.05em", fontFamily: "inherit" }}>
                                <span style={{ color: "#ffffff" }}>E</span>
                                <span style={{ color: "#888888" }}>SH</span>
                                <span style={{ color: "#ffffff" }}>B</span>
                            </span>
                        </a>

                        {/* Navigation menu — single-page anchor links */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li><a href="#about">{t.nav.about} <span /></a></li>
                                <li><a href="#services">{t.nav.services} <span /></a></li>
                                <li><a href="#projects">{t.nav.projects} <span /></a></li>
                                <li><a href="#pricing">{t.nav.team} <span /></a></li>
                                <li><a href="#faq">{t.nav.faq} <span /></a></li>
                                <li><a href="#contact">{t.nav.contact} <span /></a></li>
                            </ul>
                        </nav>

                        {/* Language toggle + email */}
                        <div className="header-right-info">
                            <button
                                onClick={toggleLang}
                                className="with-border"
                                style={{
                                    background: "transparent",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    color: "#fff",
                                    padding: "6px 14px",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    fontWeight: 700,
                                    fontSize: "0.85rem",
                                    letterSpacing: "0.08em",
                                    transition: "all 0.2s",
                                }}
                            >
                                {lang === "en" ? "🇦🇱 AL" : "🇬🇧 EN"}
                            </button>
                            <a href="mailto:email@test.com">
                                <i className="iconoir-mail-out" />
                            </a>
                        </div>

                        {/* Hamburger — shown only on mobile via CSS */}
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileOpen(o => !o)}
                            aria-label="Toggle menu"
                        >
                            <span className={`ham-line ${mobileOpen ? "open" : ""}`} />
                            <span className={`ham-line ${mobileOpen ? "open" : ""}`} />
                            <span className={`ham-line ${mobileOpen ? "open" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown */}
                {mobileOpen && (
                    <div className="mobile-nav-dropdown">
                        <ul>
                            <li><a href="#about" onClick={closeMenu}>{t.nav.about}</a></li>
                            <li><a href="#services" onClick={closeMenu}>{t.nav.services}</a></li>
                            <li><a href="#projects" onClick={closeMenu}>{t.nav.projects}</a></li>
                            <li><a href="#pricing" onClick={closeMenu}>{t.nav.team}</a></li>
                            <li><a href="#faq" onClick={closeMenu}>{t.nav.faq}</a></li>
                            <li><a href="#contact" onClick={closeMenu}>{t.nav.contact}</a></li>
                        </ul>
                        <div className="mobile-nav-footer">
                            <button
                                onClick={() => { toggleLang(); closeMenu(); }}
                                style={{
                                    background: "transparent",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    color: "#fff",
                                    padding: "6px 14px",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    fontWeight: 700,
                                    fontSize: "0.85rem",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {lang === "en" ? "🇦🇱 AL" : "🇬🇧 EN"}
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default HeaderMenu;
