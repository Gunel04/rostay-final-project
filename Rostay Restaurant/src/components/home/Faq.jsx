import StaticLanguage from '../../utils/StaticLanguage';

const Faq = () => {
    const faqs = [
        {
            questionEn: "Do you take reservations?",
            questionAz: "Rezervasiya qəbul edirsiniz?",
            answerEn: "Yes, we accept reservations both online through our website and by phone. Making a reservation is highly recommended, especially during weekends and holidays, as we tend to get fully booked quickly. Walk-ins are always welcome, but we cannot guarantee immediate seating during peak hours.",
            answerAz: "Bəli, həm vebsaytımız vasitəsilə, həm də telefonla rezervasiya qəbul edirik. Xüsusilə həftəsonları və bayram günlərində rezervasiya etməyiniz tövsiyə olunur, çünki tezliklə dolu ola bilərik. Səyyar qonaqlar da hər zaman xoş gəlmiş sayılır, lakin sıx saatlarda dərhal oturmağınızı təmin edə bilmərik."
        },
        {
            questionEn: "What are your opening hours?",
            questionAz: "İş saatlarınız nədir?",
            answerEn: "We are open every day of the week, from 10:00 AM until 11:00 PM. On special occasions and holidays, our hours may vary slightly, so we encourage guests to check our website or social media for updates before visiting.",
            answerAz: "Həftənin hər günü 10:00-dan 23:00-a qədər açığıq. Xüsusi günlər və bayramlarda iş saatlarımız bir qədər fərqlənə bilər, ona görə də ziyarət etməzdən əvvəl vebsaytımıza və ya sosial media hesablarımıza baxmağı tövsiyə edirik."
        },
        {
            questionEn: "Do you offer delivery or takeout?",
            questionAz: "Çatdırılma və ya paket xidmətiniz var?",
            answerEn: "Yes, we provide both delivery and takeout services to make it convenient for our guests to enjoy our food at home. Orders can be placed directly on our website or through our partnered delivery apps. Takeout orders are usually ready within 20–30 minutes, depending on the size of your order.",
            answerAz: "Bəli, qonaqlarımızın yeməklərimizi evdə də dadması üçün həm çatdırılma, həm də paket xidmətləri təklif edirik. Sifarişləri birbaşa vebsaytımızdan və ya tərəfdaş çatdırılma tətbiqlərindən verə bilərsiniz. Paket sifarişlər adətən 20–30 dəqiqə ərzində hazır olur, sifarişin həcminə görə dəyişə bilər."
        },
        {
            questionEn: "Can I host private events or parties at your restaurant?",
            questionAz: "Restoranınızda xüsusi tədbir və ya ziyafət təşkil etmək mümkündür?",
            answerEn: "Yes, we have dedicated spaces for private events such as birthday parties, family gatherings, and corporate dinners. Our team can help customize the menu and arrange seating to suit your event. To ensure availability, we recommend booking your private event at least one week in advance.",
            answerAz: "Bəli, ad günü, ailə toplaşmaları və korporativ naharlar kimi xüsusi tədbirlər üçün ayrılmış məkanlarımız var. Komandamız menyunu tədbirinizə uyğunlaşdırmağa və oturma düzülüşünü təşkil etməyə kömək edə bilər. Mövcudluğu təmin etmək üçün tədbirinizi ən azı bir həftə əvvəl rezervasiya etməyinizi tövsiyə edirik."
        },
        {
            questionEn: "Is parking available?",
            questionAz: "Park yeri mövcuddurmu?",
            answerEn: "Yes, we provide free parking for all our guests in the lot adjacent to the restaurant. During busy times, additional parking can be found on the nearby street or at a partner lot within walking distance.",
            answerAz: "Bəli, restoranın yanında bütün qonaqlar üçün pulsuz park yeri mövcuddur. Sıx vaxtlarda yaxın küçədə və ya yaxın məsafədə tərəfdaş park yerlərində əlavə park imkanları da mövcuddur."
        },
        {
            questionEn: "Is the restaurant kid-friendly?",
            questionAz: "Restoran uşaqlar üçün uyğundurmu?",
            answerEn: "Of course! We are a family-friendly restaurant and provide a special kids’ menu with smaller portions and child-approved favorites. High chairs and booster seats are available, and our staff is always happy to assist families with children.",
            answerAz: "Əlbəttə! Biz ailə dostu restorana malikik və uşaqlar üçün xüsusi menyu təqdim edirik; porsiyalar kiçik və uşaqların sevdiyi yeməklərdən ibarətdir. Uşaq stulları mövcuddur və personalımız həmişə uşaqlı ailələrə kömək etməyə hazırdır."
        },
        {
            questionEn: "Do you offer gift cards?",
            questionAz: "Hədiyyə kartlarınız varmı?",
            answerEn: "Yes, gift cards are available for purchase both in-store and online. They make a perfect present for birthdays, anniversaries, or special occasions. Gift cards can be used for dine-in, takeout, or even online orders.",
            answerAz: "Bəli, hədiyyə kartları həm mağazada, həm də onlayn olaraq mövcuddur. Onlar ad günü, yubiley və ya xüsusi günlər üçün mükəmməl hədiyyədir. Hədiyyə kartları həm restoran daxilində, həm paket, həm də onlayn sifarişlərdə istifadə edilə bilər."
        },

    ]
    return (
        <>
            {/* <main className="faq-section container-fluid"> */}
                <div className="faq-section-headings" data-aos='fade-up' data-aos-duration='2000'>
                    <h6>
                        <StaticLanguage en="Need Help" az="Kömək Lazımdır?" />
                    </h6>
                    <h1>
                        <StaticLanguage en="Frequently Asked Questions" az="Tez-tez verilən suallar" />
                    </h1>
                </div>
                <div className="faq-questions-part" data-aos='fade-up' data-aos-duration='2000'>
                    <div className="left-questions-part">
                        <StaticLanguage
                            en={<div className="accordion faq-accordion" id="accordionExample">
                                {faqs.map((item, index) => {
                                    const headingId = `heading${index}`;
                                    const collapseId = `collapse${index}`;
                                    return (
                                        <div className="accordion-item faq-accordion-item" key={index}>
                                            <h2 className="accordion-header faq-accordion-header" id={headingId}>
                                                <button className={`accordion-button ${index !== 0 ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded={index === 0 ? "true" : "false"}
                                                    aria-controls={collapseId}>
                                                    {item.questionEn}
                                                </button>
                                            </h2>
                                            <div id={collapseId}
                                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""} faq-answer`}
                                                aria-labelledby={headingId}
                                                data-bs-parent="#accordionExample"
                                                
                                                >
                                                <div className="accordion-body">
                                                    {item.answerEn}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}

                            az={<div className="accordion faq-accordion" id="accordionExample">
                                {faqs.map((item, index) => {
                                    const headingId = `heading${index}`;
                                    const collapseId = `collapse${index}`;
                                    return (
                                        <div className="accordion-item faq-accordion-item" key={index}>
                                            <h2 className="accordion-header faq-accordion-header" id={headingId}>
                                                <button className={`accordion-button ${index !== 0 ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded={index === 0 ? "true" : "false"}
                                                    aria-controls={collapseId}>
                                                    {item.questionAz}
                                                </button>
                                            </h2>
                                            <div id={collapseId}
                                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                                aria-labelledby={headingId}
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    {item.answerAz}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                        />
                    </div>

                    <div className="right-image-part">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/image-faq.jpg" alt="" />
                    </div>
                </div>
            {/* </main> */}
        </>
    )
}

export default Faq
