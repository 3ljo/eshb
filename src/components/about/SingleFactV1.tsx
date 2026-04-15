import angleIcon from "/assets/images/angle-icon-1.svg"

interface DataType {
    id?: number;
    activeClass?: string;
    thumb?: string;
    delay?: string;
    title?: string;
    end?: string;
}

const SingleFactV1 = ({ fact }: { fact: DataType }) => {
    const { activeClass, thumb, delay, title } = fact
    const isVideo = thumb?.endsWith(".mp4");
    const mediaSrc = thumb?.startsWith("http") || thumb?.startsWith("/") ? thumb : `/assets/images/${thumb}`;

    return (
        <>
            <div data-aos="fade-up" data-aos-delay={delay} className={`funfact-box ${activeClass}`}>
                {isVideo ? (
                    <video
                        className="overlay"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ objectFit: "cover" }}
                    >
                        <source src={mediaSrc} type="video/mp4" />
                    </video>
                ) : (
                    <img src={mediaSrc} alt="funfact" className="overlay" />
                )}
                <div className="funfact-header">
                    <span className="title">{title}</span>
                </div>
                <div className="funfact-footer">
                    <a href="#contact">
                        <img src={angleIcon} alt="icon" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default SingleFactV1;