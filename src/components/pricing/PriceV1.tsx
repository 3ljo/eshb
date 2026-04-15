import { Link } from "react-router-dom";
import Union from "/assets/images/Union.svg"
import pricingNavbar from "/assets/images/pricing-navbar.svg"
import pricingShape1 from "/assets/images/pricing-shape1.png"
import pricingShape2 from "/assets/images/pricing-shape2.png"
import btnArrow from "/assets/images/btn-arrow.svg"
import featuredIcon from "/assets/images/featured-icon.svg"
import { useRef } from "react";
import useTabIndicator from "../../hooks/useTabIndicator";

const PriceV1 = () => {

    const indicatorRef = useRef<HTMLSpanElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    useTabIndicator({ navRef, indicatorRef });

    return (
        <>
            <div className="pricing-sec" id="pricing">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <img src={Union} alt="icon" />
                            PRICING PLANS
                        </span>
                        <h2 className="section-title section-title2">
                            Transparent Pricing, <span>Real Results</span>
                        </h2>
                        <p className="section-desc">
                            Every project is different — choose a plan that fits your goals,<br />
                            or reach out for a custom quote tailored to your business.
                        </p>
                    </div>
                    <div className="pricing_nav_wrap">
                        <ul className="pricing_nav nav-tabs" id="myTab" role="tablist" ref={navRef}>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true">Per Project</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="annual-tab" data-bs-toggle="tab" data-bs-target="#annual" type="button" role="tab" aria-controls="annual" aria-selected="false">Monthly Retainer <span>-20%</span></button>
                            </li>
                        </ul>
                        <span className="nav-hover-shape" ref={indicatorRef} style={{ left: 439, opacity: 1 }}>
                            <img src={pricingNavbar} alt="shape" />
                        </span>
                    </div>
                    <div className="tab-content" id="myTabContent">

                        {/* PER PROJECT */}
                        <div className="tab-pane fade show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <img src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <img src={pricingShape2} alt="shape" />
                                </div>

                                {/* Starter */}
                                <div className="pricing-box" data-aos="fade-up">
                                    <div className="pricing-header">
                                        <span className="title">Starter</span>
                                        <h3 className="price">$2,500<span>/project</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Perfect for startups and small businesses needing a strong online presence.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Business landing page</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Mobile-responsive design</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Basic SEO setup</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Contact form integration</li>
                                            <li><span className="icon"><i className="las la-check" /></span> 30-day post-launch support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="#contact" className="theme-btn">
                                            Get Started <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Growth — featured */}
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={200}>
                                    <span className="pricing-featured-icon">
                                        <img src={featuredIcon} alt="icon" />
                                    </span>
                                    <div className="pricing-header">
                                        <span className="title">Growth</span>
                                        <h3 className="price">$15,000<span>/project</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> For businesses ready to scale with a custom web app or AI integration.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Custom React / Next.js web app</li>
                                            <li><span className="icon"><i className="las la-check" /></span> UI/UX design system</li>
                                            <li><span className="icon"><i className="las la-check" /></span> CMS or API integration</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Performance & SEO optimization</li>
                                            <li><span className="icon"><i className="las la-check" /></span> 60-day post-launch support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="#contact" className="theme-btn">
                                            Get Started <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Enterprise */}
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="pricing-header">
                                        <span className="title">Enterprise</span>
                                        <h3 className="price">Custom<span>/project</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Complex AI systems, SaaS platforms, and full-scale digital products.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Custom SaaS or AI platform</li>
                                            <li><span className="icon"><i className="las la-check" /></span> LLM & automation integration</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Scalable cloud architecture</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Dedicated project team</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Ongoing priority support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="#contact" className="theme-btn">
                                            Let's Talk <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* MONTHLY RETAINER */}
                        <div className="tab-pane fade" id="annual" role="tabpanel" aria-labelledby="annual-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <img src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <img src={pricingShape2} alt="shape" />
                                </div>

                                {/* Starter Retainer */}
                                <div className="pricing-box" data-aos="fade-up">
                                    <div className="pricing-header">
                                        <span className="title">Starter</span>
                                        <h3 className="price">$800<span>/month</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Ongoing support and maintenance for small businesses.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Up to 10 hrs/month</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Website updates & maintenance</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Bug fixes & performance checks</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Monthly progress report</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Email support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="#contact" className="theme-btn">
                                            Get Started <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Growth Retainer — featured */}
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={200}>
                                    <span className="pricing-featured-icon">
                                        <img src={featuredIcon} alt="icon" />
                                    </span>
                                    <div className="pricing-header">
                                        <span className="title">Growth</span>
                                        <h3 className="price">$2,500<span>/month</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Active development and growth for scaling businesses.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Up to 25 hrs/month</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Feature development & iterations</li>
                                            <li><span className="icon"><i className="las la-check" /></span> SEO & performance optimization</li>
                                            <li><span className="icon"><i className="las la-check" /></span> AI chatbot or automation upkeep</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Priority email & phone support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="#contact" className="theme-btn">
                                            Get Started <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Enterprise Retainer */}
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="pricing-header">
                                        <span className="title">Enterprise</span>
                                        <h3 className="price">$5,000<span>/month</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> A dedicated team for large-scale products and platforms.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Up to 50 hrs/month</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Dedicated development team</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Full-stack & AI development</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Weekly strategy calls</li>
                                            <li><span className="icon"><i className="las la-check" /></span> 24/7 priority support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link to="#contact" className="theme-btn">
                                            Let's Talk <img src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;
