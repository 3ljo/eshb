import btnArrow from '/assets/images/btn-arrow.svg';
import { toast } from 'react-toastify';
import { useLang } from '../../context/LanguageContext';

const ContactV1 = () => {
    const { t } = useLang();
    const c = t.contact;

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success(c.successMsg);
    };

    return (
        <>
            <div className="contact-sec" id="contact">
                <div className="custom-row">
                    <div className="left">
                        <div className="contact-content">
                            <h3 data-aos="fade-up" data-aos-delay={200}>
                                {c.heading} <span>{c.headingHighlight}</span>
                            </h3>
                            <p>
                                <span className="required">*</span> {c.subtext}
                            </p>
                            <form id="contact-form" className="contact-form" onSubmit={handleForm}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={c.namePlaceholder}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={c.emailPlaceholder}
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="phone"
                                            autoComplete="off"
                                            placeholder={c.phonePlaceholder}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder={c.messagePlaceholder}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <button type="submit" className="theme-btn">
                                        {c.sendBtn}
                                        <img src={btnArrow} alt="icon" />
                                    </button>
                                </div>
                            </form>
                            <div id="result" />
                        </div>
                    </div>

                    <div className="right">
                        <div className="img-box" style={{ display: "flex", flexDirection: "column", gap: "32px", justifyContent: "center", padding: "40px" }}>
                            {/* Location card */}
                            <div data-aos="fade-left" data-aos-delay={100} style={{
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "28px 32px",
                                background: "rgba(255,255,255,0.03)",
                            }}>
                                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                                    Location
                                </div>
                                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem" }}>
                                    {c.location}
                                </div>
                            </div>

                            {/* Email card */}
                            <div data-aos="fade-left" data-aos-delay={200} style={{
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "28px 32px",
                                background: "rgba(255,255,255,0.03)",
                            }}>
                                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                                    Email
                                </div>
                                <a href={`mailto:${c.emailLabel}`} style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
                                    {c.emailLabel}
                                </a>
                            </div>

                            {/* Company tagline */}
                            <div data-aos="fade-left" data-aos-delay={300} style={{
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "28px 32px",
                                background: "rgba(255,255,255,0.03)",
                            }}>
                                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                                    Company
                                </div>
                                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.4rem", letterSpacing: "0.08em" }}>
                                    <span style={{ color: "#ffffff" }}>E</span>
                                    <span style={{ color: "#888888" }}>SH</span>
                                    <span style={{ color: "#ffffff" }}>B</span>
                                    <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 400, fontSize: "1rem" }}> Technology</span>
                                </div>
                                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "6px" }}>
                                    Web Development & AI Solutions
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;
