import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import StaticLanguage from '../utils/StaticLanguage'

const OurTeam = () => {
    
    const team = [
        {
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/team-1.jpg",
            name: "Alfred Mason",
            majorEn: "CEO & Founder",
            infoEn: "Alfred has over 20 years of experience in the hospitality industry, leading our team with vision and dedication to excellence.",
            majorAz: "Baş Direktor və Təsisçi",
            infoAz: "Alfred qonaqpərvərlik sahəsində 20 ildən çox təcrübəyə malikdir və komandamızı görmə qabiliyyəti və mükəmməlliyə sadiqliklə idarə edir."
        },
        {
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/team-2.jpg",
            name: "Jordan Harper",
            majorEn: "Master Chef",
            infoEn: "Jordan creates innovative dishes inspired by global flavors, combining traditional techniques with modern culinary artistry.",
            majorAz: "Baş Aşbaz",
            infoAz: "Jordan qlobal tatlardan ilhamlanaraq innovativ yeməklər yaradır və ənənəvi texnikaları müasir kulinariya incəsənəti ilə birləşdirir."
        },
        {
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/team-3.jpg",
            name: "Addie McKinney",
            majorEn: "Pastry Chef",
            infoEn: "Addie specializes in delicate pastries and desserts, crafting visually stunning treats with exquisite flavors.",
            majorAz: "Pasta Aşbazı",
            infoAz: "Addie incə şirniyyatlar və desertlər üzrə ixtisaslaşır, vizual olaraq təsirli və dadlı şirniyyatlar hazırlayır."
        },
        {
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-4.jpg",
            name: "Jordan Tom",
            majorEn: "Master Chef",
            infoEn: "Jordan brings a passion for farm-to-table cuisine, ensuring every dish highlights fresh, locally sourced ingredients.",
            majorAz: "Baş Aşbaz",
            infoAz: "Jordan fermadan masaya mətbəx prinsipi ilə işləyir və hər yeməyin təzə, yerli məhsulları vurğulamasına diqqət yetirir."
        },
        {
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-5.jpg",
            name: "Alfred Mason",
            majorEn: "CEO & Founder",
            infoEn: "With a strong vision for excellence, Alfred oversees our operations, ensuring the team maintains the highest culinary standards.",
            majorAz: "Baş Direktor və Təsisçi",
            infoAz: "Alfred yüksək səviyyədə mükəmməlliyi təmin etmək üçün əməliyyatlarımızı izləyir və komandanın kulinariya standartlarını qorumasını təmin edir."
        },
        {
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-6.jpg",
            name: "Harper Jordan",
            majorEn: "Master Chef",
            infoEn: "Harper is known for creating signature dishes that blend classic flavors with contemporary culinary techniques.",
            majorAz: "Baş Aşbaz",
            infoAz: "Harper klassik tatları müasir kulinariya texnikaları ilə birləşdirən imza yeməklər yaradır."
        },
    ]
    return (
        <main>
            <div className="our-team-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">
                    <StaticLanguage en="Our Team" az="Komandamız"/>
                </h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'><StaticLanguage en="Home" az="Ana Səhifə"/></Link> &gt; <span><StaticLanguage en="Our Team" az="Komandamız"/></span> </h6>
            </div>
            <div className="team-member-container container-fluid">
                <div className="team-member-heading" data-aos="zoom-out" data-aos-duration="2000">
                    <h5>
                        <StaticLanguage en="Amazing Team" az="Möhtəşəm Komanda"/>
                    </h5>
                    <h1>
                        <StaticLanguage en="Meet Our Chef" az="Aşpazlarımızla Tanış Olun"/>
                    </h1>
                </div>
                <div className="team-members">
                    <div className="row">
                        <StaticLanguage
                            en={team.map((item, index) => (
                                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-12 col-12 p-0" key={index}>
                                    <div className="team-member-cards" data-aos="fade-up" data-aos-duration="2500">
                                        <div className="team-member-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>

                                        <div className="card-body">
                                            <h4 className='chef-name'>{item.name}</h4>
                                            <h5 className="card-title">{item.majorEn}</h5>
                                            <p className="card-text">{item.infoEn}</p>
                                        </div>
                                    </div>
                                </div>
                            ))

                            }
                            az={team.map((item, index) => (
                                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-12 col-12 p-0" key={index}>
                                    <div className="team-member-cards" data-aos="fade-up" data-aos-duration="2500">
                                        <div className="team-member-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>

                                        <div className="card-body">
                                            <h4 className='chef-name'>{item.name}</h4>
                                            <h5 className="card-title">{item.majorAz}</h5>
                                            <p className="card-text">{item.infoAz}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OurTeam