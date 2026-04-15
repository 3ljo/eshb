interface DataType {
    id?: number;
    thumb?: string;
    projectName?: string;
    info?: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { thumb, projectName, info } = feature;
    const imgSrc = thumb?.startsWith("http") ? thumb : `/assets/images/${thumb}`;

    return (
        <div className="pgrid-item">
            <img src={imgSrc} alt={projectName} />
            <div className="pgrid-overlay">
                <span className="pgrid-tag">{info}</span>
                <h4 className="pgrid-name">{projectName}</h4>
            </div>
        </div>
    );
};

export default SingleFeatureV1;
