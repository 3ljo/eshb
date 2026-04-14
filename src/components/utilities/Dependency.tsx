import { useEffect } from "react";
import { ScrollToTop } from "react-simple-scroll-up";
import AOS from "aos";

const Dependency = () => {

    useEffect(() => {
        AOS.init({
            easing: "ease-out-back",
            duration: 1000,
            once: true,
            disable: () => window.innerWidth < 768
        });

        return () => AOS.refresh();
    }, []);

    return (
        <>
            <ScrollToTop symbol={<i className="fas fa-long-arrow-up" aria-hidden="true"></i>} aria-hidden="true" />
        </>
    );
};

export default Dependency;