import Aos from 'aos'
import StaticLanguage from '../../utils/StaticLanguage';

const Experience = () => {
    Aos.init();
    const experience = [
        {
            headingOneEn: "Ambience",
            headingOneAz: "Ab-hava",
            headingTwoEn: "Unique Atmosphere",
            headingTwoAz: "Unikal Atmosfer",
            textEn: "Rostay Restaurant offers the perfect combination of sublime food, seamless service and an atmosphere of casual elegance",
            textAz: "Rostay Restoranı əvəzsiz yeməklər, qüsursuz xidmət və zərif rahatlıq ab-havasının mükəmməl birləşməsini təqdim edir",
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-exclusive-1.jpg"
        },
        {
            headingOneEn: "Food & Wines",
            headingOneAz: "Yemək və İçkilər",
            headingTwoEn: "Selected Quality",
            headingTwoAz: "Seçilmiş Keyfiyyət",
            textEn: "We offer a carefully prepared selection of culinary delights in favor of exquisite freshness and the highest standards",
            textAz: "Biz təzəliyi və ən yüksək standartları ön planda saxlayan incəliklə hazırlanmış kulinariya ləzzətlərini təqdim edirik",
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-exclusive-2.jpg"

        },
        {
            headingOneEn: "The Cooking",
            headingOneAz: "Mətbəx",
            headingTwoEn: "The Chef Secrets",
            headingTwoAz: "Şefin Sirləri",
            textEn: "Rostay Restaurant offers the perfect combination of sublime food, seamless service and an atmosphere of casual elegance",
            textAz: "Rostay Restoranı əvəzsiz yeməklər, qüsursuz xidmət və zərif rahatlıq ab-havasının mükəmməl birləşməsini təqdim edir",
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-exclusive-3.jpg"

        },
    ]
    return (
        <section className="experience-section container-fluid">
            <div className="experience-text" data-aos="fade-up" data-aos-duration="1500">
                <h5>
                    <StaticLanguage en="Experience" az="Təcrübə" />
                </h5>
                <h1>
                    <StaticLanguage en="Exclusive Rostay Experiences" az="Eksklüziv Rostay Təcrübələri" />
                </h1>
            </div>
            <StaticLanguage
                en={<div className="row">
                    {experience.map((item, index) => (
                        <div className="col-md-4 col-lg-4 col-xl-4" key={index}>
                            <div className="experience-cards" data-aos="zoom-in-up" data-aos-duration="1500">
                                <div className="experience-card-img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="experience-card-info">
                                    <h1>{item.headingOneEn}</h1>
                                    <h3>{item.headingTwoEn}</h3>
                                    <p>{item.textEn}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>}
                az={<div className="row">
                    {experience.map((item, index) => (
                        <div className="col-md-4 col-lg-4 col-xl-4" key={index}>
                            <div className="experience-cards" data-aos="zoom-in-up" data-aos-duration="1500">
                                <div className="experience-card-img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="experience-card-info">
                                    <h1>{item.headingOneAz}</h1>
                                    <h3>{item.headingTwoAz}</h3>
                                    <p>{item.textAz}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>}
            />
        </section>
    )
}

export default Experience