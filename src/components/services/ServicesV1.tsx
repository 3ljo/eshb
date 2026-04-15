import Union from "/assets/images/Union.svg";
import arrowDown from "/assets/images/arrow-down.svg";
import AnimatedText from "../animated/AnimatedText";
import { useLang } from "../../context/LanguageContext";

const ServicesV1 = () => {
    const { t } = useLang();
    const s = t.services;

    const serviceAssets = [
        { icon: "service-icon1.svg", thumb: "/assets/images/service1.png", activeClass: "active" },
        { icon: "service-icon2.svg", thumb: "/assets/images/service2.png", activeClass: "" },
        { icon: "service-icon3.svg", thumb: "/assets/images/service3.png", activeClass: "" },
        { icon: "service-icon4.svg", thumb: "/assets/images/service4.png", activeClass: "" },
    ];

    return (
        <>
            <div className="service-sec" id="services">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            {s.subtitle}
                        </span>
                        <AnimatedText>
                            {s.description}
                        </AnimatedText>
                    </div>
                </div>

                <div className="service-lists-wrap">
                    <div className="service-lists-header">
                        <div className="custom-container">
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                {s.service}
                            </div>
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                {s.features}
                            </div>
                            <div className="service-header-th">
                                <img src={arrowDown} alt="icon" />
                                {s.illustration}
                            </div>
                        </div>
                    </div>

                    {/* Service rows */}
                    <div className="service-lists">
                        {s.items.map((item, idx) => {
                            const { icon, thumb, activeClass } = serviceAssets[idx];
                            return (
                                <div key={idx} className={`service-box ${activeClass}`}>
                                    <div className="service-inner">
                                        <h4 className="title">
                                            <img src={`/assets/images/${icon}`} alt="icon" />
                                            <span>{item.name}</span>
                                        </h4>
                                        <p className="service-feature-lists">
                                            {item.features.map((feat, fi) => (
                                                <span key={fi}>{`${["I", "II", "III", "IV"][fi]}. ${feat} `}</span>
                                            ))}
                                        </p>
                                        <div className="service-img-box">
                                            <img
                                                src={thumb}
                                                alt={item.name}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;
