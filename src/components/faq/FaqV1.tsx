import Union from "/assets/images/Union.svg"
import pricingShape1 from "/assets/images/pricing-shape1.png"
import pricingShape2 from "/assets/images/pricing-shape2.png"

const faqs = [
    {
        id: "One",
        number: "I.",
        question: "What services does ESHB Technology offer?",
        answer: "We offer end-to-end digital services including custom web development (React, Next.js), AI solutions (chatbots, automation, LLM integration), UI/UX design, and custom software & SaaS platforms. Whether you need a landing page or a full-scale AI system, we build it."
    },
    {
        id: "Two",
        number: "II.",
        question: "How long does a typical project take?",
        answer: "Timelines depend on the scope. A business landing page typically takes 1–2 weeks. A full web application or AI integration takes 4–10 weeks. Enterprise-level platforms are scoped individually. We always agree on a clear timeline before starting."
    },
    {
        id: "Three",
        number: "III.",
        question: "Do you offer support after the project is delivered?",
        answer: "Yes. Every project includes post-launch support — 30 days for Starter, 60 days for Growth. For ongoing work, our monthly retainer plans keep your product maintained, updated, and growing without interruption."
    },
    {
        id: "Four",
        number: "IV.",
        question: "Can you integrate AI into my existing business?",
        answer: "Absolutely. We specialize in adding AI capabilities to existing products — from intelligent chatbots and automated workflows to LLM-powered features and predictive analytics. We assess your current system and integrate without disrupting what already works."
    },
    {
        id: "Five",
        number: "V.",
        question: "How does pricing work — fixed or hourly?",
        answer: "We offer both. Per-project pricing starts at $2,500 for a landing page and scales based on complexity. For ongoing collaboration, our monthly retainers start at $800/month. Enterprise projects are quoted after a discovery call to understand the full scope."
    },
    {
        id: "Six",
        number: "VI.",
        question: "Where is ESHB Technology based and do you work internationally?",
        answer: "We are based in Durrës, Albania, and work with clients globally. Our team communicates in English and Albanian, operates across time zones, and delivers to international standards — combining European quality with competitive pricing."
    },
    {
        id: "Seven",
        number: "VII.",
        question: "How do I get started?",
        answer: "Simply reach out through our contact form or email us directly. We'll schedule a discovery call to understand your goals, recommend the right solution, and put together a clear proposal — no obligations, no fluff."
    }
];

const FaqV1 = () => {
    return (
        <>
            <div className="faq-sec" id="faq">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <img src={Union} alt="icon" />
                        FAQ
                    </span>
                    <h2 className="section-title section-title2">
                        Got Questions? <span>We Have Answers.</span>
                    </h2>
                    <p className="section-desc">
                        Everything you need to know about working with ESHB Technology.<br />
                        Can't find what you're looking for? Reach out directly.
                    </p>
                </div>

                <div className="accordion faq-lists" id="accordionExample">
                    <div className="shape_img shape_img1">
                        <img src={pricingShape1} alt="shape" />
                    </div>
                    <div className="shape_img shape_img2">
                        <img src={pricingShape2} alt="shape" />
                    </div>

                    {faqs.map((faq, index) => (
                        <div className="accordion-item faq-item" key={faq.id}>
                            <h2 className="accordion-header" id={`heading${faq.id}`}>
                                <button
                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${faq.id}`}
                                    aria-expanded={index === 0 ? "true" : "false"}
                                    aria-controls={`collapse${faq.id}`}
                                >
                                    <span className="number">{faq.number}</span> {faq.question} <span className="plus-icon"><span /><span /></span>
                                </button>
                            </h2>
                            <div
                                id={`collapse${faq.id}`}
                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                aria-labelledby={`heading${faq.id}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FaqV1;
