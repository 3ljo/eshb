import HeroV1 from "../../components/hero/HeroV1";
import AboutV1 from "../../components/about/AboutV1";
import ServicesV1 from "../../components/services/ServicesV1";
import FeatureV1 from "../../components/feature/FeatureV1";
import PriceV1 from "../../components/pricing/PriceV1";
import FaqV1 from "../../components/faq/FaqV1";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";

const Home1Page = () => {
    return (
        <div className="eshb-main">
            <LayoutV1>
                <HeroV1 />
                <AboutV1 />
                <ServicesV1 />
                <FeatureV1 />
                <PriceV1 />
                <FaqV1 />
                <ContactV1 />
            </LayoutV1>
        </div>
    );
};

export default Home1Page;
