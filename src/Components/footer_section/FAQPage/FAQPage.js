import React, { useState } from 'react';
import './FAQPage.css';

const faqs = [
    { question: "What is SyncUp?", answer: "SyncUp is a modern collaboration platform built to simplify teamwork, manage projects, track habits, and share resources seamlessly." },
    { question: "How can I create a team?", answer: "You can create a team by navigating to the Collaboration Hub, clicking 'Create Team', and inviting members via email or username." },
    { question: "Can I showcase my projects?", answer: "Yes! Use the Project Showcase feature to upload your work, research papers, or innovative solutions to get recognition and connect with peers." },
    { question: "Are virtual events supported?", answer: "Absolutely! The Virtual Events Space allows hosting and attending seminars, workshops, and interactive sessions with experts worldwide." },
    { question: "Is SyncUp free to use?", answer: "Yes, SyncUp provides a free plan with essential features for students. Premium features may be available in future updates." }
];

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-page">
            <div className="faq-intro">
                <h1>Frequently Asked Questions</h1>
                <p>Have questions about using SyncUp? Explore our FAQs to understand how you can collaborate, showcase projects, and engage effectively on the platform.</p>
            </div>

            <div className="faq-cards">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="faq-question">
                            <h3>{faq.question}</h3>
                            <span className={`faq-arrow ${activeIndex === index ? 'rotate' : ''}`}>▼</span>
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQPage;
