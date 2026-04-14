import { useLang } from "../../context/LanguageContext";

const HeaderMenu = () => {
    const { t, lang, toggleLang } = useLang();

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
                                <li>
                                    <a href="#about">{t.nav.about} <span /></a>
                                </li>
                                <li>
                                    <a href="#services">{t.nav.services} <span /></a>
                                </li>
                                <li>
                                    <a href="#projects">{t.nav.projects} <span /></a>
                                </li>
                                <li>
                                    <a href="#team">{t.nav.team} <span /></a>
                                </li>
                                <li>
                                    <a href="#contact">{t.nav.contact} <span /></a>
                                </li>
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
                            <a href="mailto:era1bullari1@gmail.com">
                                <i className="iconoir-mail-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu;
