import unionIcon from "/assets/images/Union.svg";
import AnimatedText from "../animated/AnimatedText";
import FactData from "../../jsonData/fact/FactData.json";
import SingleFactV1 from "./SingleFactV1";
import { useLang } from "../../context/LanguageContext";

const AboutV1 = () => {
    const { t } = useLang();
    const a = t.about;

    // Map fact IDs to translated stat labels
    const statLabels: Record<number, string> = {
        1: a.stats.experience,
        2: a.stats.projects,
        3: a.stats.clients,
        4: a.stats.team,
    };

    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={unionIcon} alt="About Us" /> {a.subtitle}
                        </span>
                        <AnimatedText>
                            {a.description}
                        </AnimatedText>
                    </div>

                    {/* Stats */}
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <SingleFactV1
                                fact={{ ...fact, title: statLabels[fact.id] ?? fact.title }}
                                key={fact.id}
                            />
                        )}
                    </div>

                    {/* Founders section */}
                    <div
                        className="founders-wrap"
                        style={{
                            marginTop: "80px",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "40px",
                        }}
                    >
                        <div className="founder-card" data-aos="fade-up" data-aos-delay={100} style={{ textAlign: "center" }}>
                            <img
                                src="/assets/images/eljoprofile.jpeg"
                                alt="Eljo Shurdhi"
                                style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    objectPosition: "top",
                                    display: "block",
                                    margin: "0 auto 20px",
                                    border: "2px solid rgba(255,255,255,0.15)",
                                }}
                            />
                            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "6px" }}>Eljo Shurdhi</h4>
                            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                                {a.eljoRole}
                            </span>
                            <p style={{ marginTop: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                                {a.eljoDesc}
                            </p>
                        </div>

                        <div className="founder-card" data-aos="fade-up" data-aos-delay={250} style={{ textAlign: "center" }}>
                            <img
                                src="/assets/images/eraprofile.jfif"
                                alt="Era Bullari"
                                style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    objectPosition: "top",
                                    display: "block",
                                    margin: "0 auto 20px",
                                    border: "2px solid rgba(255,255,255,0.15)",
                                }}
                            />
                            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "6px" }}>Era Bullari</h4>
                            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                                {a.eraRole}
                            </span>
                            <p style={{ marginTop: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                                {a.eraDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;
