import Union from "/assets/images/Union.svg";
import shape from "/assets/images/shape.svg";
import btnArrow from "/assets/images/btn-arrow.svg";
import TeamV1Data from "../../jsonData/team/TeamV1Data.json";
import SingleTeamV1 from "./SingleTeamV1";
import { useLang } from "../../context/LanguageContext";

const TeamV1 = () => {
    const { t } = useLang();
    const tm = t.team;

    return (
        <>
            <div className="team-sec" id="team">
                <div className="section-header">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        {tm.subtitle}
                    </span>
                </div>

                <div className="team-members">
                    {TeamV1Data.map(member =>
                        <SingleTeamV1 member={member} key={member.id} />
                    )}

                    {/* Join us CTA card */}
                    <div className="team-cv-box" data-aos="fade-up" data-aos-delay={400}>
                        <img src={shape} alt="shape" className="overlay" />
                        <div className="team-cv-header">
                            {/* ESH text logo inside team card */}
                            <span style={{
                                fontWeight: 900,
                                fontSize: "1.4rem",
                                letterSpacing: "0.08em",
                                display: "block",
                                marginBottom: "16px",
                            }}>
                                <span style={{ color: "#fff" }}>E</span>
                                <span style={{ color: "#888" }}>SH</span>
                                <span style={{ color: "#fff" }}>B</span>
                            </span>
                            <h3 className="title">
                                {tm.joinTitle} <br />{tm.joinTitleLine2}
                            </h3>
                            <p>{tm.joinDesc}</p>
                        </div>
                        <div className="team-cv-footer">
                            <a href="#contact" className="theme-btn">
                                {tm.applyBtn}
                                <img src={btnArrow} alt="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV1;
