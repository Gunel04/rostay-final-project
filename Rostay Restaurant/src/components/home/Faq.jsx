import React from 'react'

const Faq = () => {
    const faqs = [
        {
            question: "Do you take reservations?",
            answer: "Yes, we accept reservations both online through our website and by phone. Making a reservation is highly recommended, especially during weekends and holidays, as we tend to get fully booked quickly. Walk-ins are always welcome, but we cannot guarantee immediate seating during peak hours."
        },
        {
            question: "What are your opening hours?",
            answer: "We are open every day of the week, from 10:00 AM until 11:00 PM. On special occasions and holidays, our hours may vary slightly, so we encourage guests to check our website or social media for updates before visiting."
        },
        {
            question: "Do you offer delivery or takeout?",
            answer: "Yes, we provide both delivery and takeout services to make it convenient for our guests to enjoy our food at home. Orders can be placed directly on our website or through our partnered delivery apps. Takeout orders are usually ready within 20–30 minutes, depending on the size of your order."
        },
        {
            question: "Can I host private events or parties at your restaurant?",
            answer: "Yes, we have dedicated spaces for private events such as birthday parties, family gatherings, and corporate dinners. Our team can help customize the menu and arrange seating to suit your event. To ensure availability, we recommend booking your private event at least one week in advance."
        },
        {
            question: "Is parking available??",
            answer: "Yes, we provide free parking for all our guests in the lot adjacent to the restaurant. During busy times, additional parking can be found on the nearby street or at a partner lot within walking distance."
        },
        {
            question: "Is the restaurant kid-friendly?",
            answer: "Of course! We are a family-friendly restaurant and provide a special kids’ menu with smaller portions and child-approved favorites. High chairs and booster seats are available, and our staff is always happy to assist families with children."
        },
        {
            question: "Do you offer gift cards?",
            answer: "Yes, gift cards are available for purchase both in-store and online. They make a perfect present for birthdays, anniversaries, or special occasions. Gift cards can be used for dine-in, takeout, or even online orders."
        },

    ]
    return (
        <>
            <main className="faq-section container-fluid">
                <div className="faq-section-headings" data-aos='fade-up' data-aos-duration='2000'>
                    <h6>Need Help</h6>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="faq-questions-part" data-aos='fade-up' data-aos-duration='2000'>
                    <div className="left-questions-part">
                        <div className="accordion faq-accordion" id="accordionExample">
                            {faqs.map((item, index) => {
                                const headingId = `heading${index}`;
                                const collapseId = `collapse${index}`;
                                return (
                                    <div className="accordion-item faq-accordion-item" key={index}>
                                        <h2 className="accordion-header faq-accordion-header" id={headingId}>
                                            <button className={`accordion-button ${index !== 0 ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded={index === 0 ? "true" : "false"}
                                                aria-controls={collapseId}>
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div id={collapseId}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                            aria-labelledby={headingId}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                )


                            })}

                        </div>
                    </div>

                    <div className="right-image-part">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/image-faq.jpg" alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Faq
