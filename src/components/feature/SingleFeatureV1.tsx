import useHoverEffect from "../../hooks/useHoverEffect";
import { useLang } from "../../context/LanguageContext";

interface DataType {
    id?: number;
    thumb?: string;
    projectName?: string;
    subTitle1?: string;
    subTitle2?: string;
    info?: string;
    date?: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { thumb, projectName, subTitle1, subTitle2, info, date } = feature;
    const { t } = useLang();
    const labels = t.projects.labels;

    const { containerRef, hoverElementRef } = useHoverEffect();

    return (
        <div className="feature-project" ref={containerRef}>
            <div className="hover_mouse" ref={hoverElementRef}>
                <span>{labels.view}</span>
            </div>
            <div className="img-box" style={{ minHeight: "420px" }}>
                <img
                    src={thumb?.startsWith("http") ? thumb : `/assets/images/${thumb}`}
                    alt={projectName}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="feature-project-infos">
                <div className="feature-project-info-box">
                    <span className="title">{labels.name}</span>
                    <span className="subtitle">{projectName}</span>
                </div>
                <div className="feature-project-info-box">
                    <span className="title">{labels.description}</span>
                    <span className="subtitle">{subTitle1}<br />{subTitle2}</span>
                </div>
                <div className="feature-project-info-box">
                    <span className="title">{labels.industry}</span>
                    <span className="subtitle">{info}</span>
                </div>
                <div className="feature-project-info-box">
                    <span className="title">{labels.date}</span>
                    <span className="subtitle">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleFeatureV1;
