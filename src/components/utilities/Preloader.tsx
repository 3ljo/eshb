const Preloader = () => {
    return (
        <>
            <div className="preloader-wrap">
                <video loop muted autoPlay>
                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                </video>
                {/* ESHB text logo — E white, SH grey, B white */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontWeight: 900,
                    fontSize: "clamp(3rem, 10vw, 7rem)",
                    letterSpacing: "0.08em",
                    userSelect: "none",
                }}>
                    <span style={{ color: "#ffffff" }}>E</span>
                    <span style={{ color: "#888888" }}>SH</span>
                    <span style={{ color: "#ffffff" }}>B</span>
                </div>
            </div>
        </>
    );
};

export default Preloader;
