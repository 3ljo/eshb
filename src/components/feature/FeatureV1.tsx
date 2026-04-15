import Union from "/assets/images/Union.svg";
import { useLang } from "../../context/LanguageContext";
import FeatureV1Data from "../../jsonData/feature/FeatureV1Data.json";
import SingleFeatureV1 from "./SingleFeatureV1";

const FeatureV1 = () => {
    const { t } = useLang();
    const p = t.projects;

    return (
        <>
            <div className="feature-sec" id="projects">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            {p.subtitle}
                        </span>
                        <h2 className="section-title section-title2">
                            {p.heading} <span>{p.headingHighlight}</span>
                        </h2>
                        <p className="section-desc">
                            {p.description}
                        </p>
                    </div>
                    <div className="row g-4">
                        {FeatureV1Data.map((feature) =>
                            <SingleFeatureV1 feature={feature} key={feature.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;
