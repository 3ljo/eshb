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
    const { thumb, projectName, subTitle1, subTitle2, info } = feature;
    const imgSrc = thumb?.startsWith("http") ? thumb : `/assets/images/${thumb}`;

    return (
        <div className="col-lg-4 col-md-6">
            <div className="pcard">
                <div className="pcard-img">
                    <img src={imgSrc} alt={projectName} />
                </div>
                <div className="pcard-body">
                    <span className="pcard-tag">{info}</span>
                    <h4 className="pcard-title">{projectName}</h4>
                    <p className="pcard-desc">{subTitle1} {subTitle2}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFeatureV1;
