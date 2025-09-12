import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import StaticLanguage from '../../utils/StaticLanguage'
import { Link } from 'react-router-dom'

const AboutEvent = () => {
    const data = [
        {
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/about-image-box-1.jpg",
            headingEn: "Special Event",
            headingAz: "Xüsusİ Tədbİrlər",
            textEn: "Perfect for all kinds of meetings including business sessions, strategy days and team bonding activities for up to 62. Available in combination with dining packages or on it's own with pastries, coffees and cold drinks to keep the team fueled.",
            textAz: "Biznes görüşləri, strategiya günləri və komanda motivasiya tədbirləri üçün mükəmməl seçim. 62 nəfərə qədər qonaq qəbul edə bilən zalımızı nahar və şam paketləri ilə birləşdirə və ya sadəcə şirniyyat, qəhvə və sərinləşdirici içkilərlə sifariş edə bilərsiniz.",
            buttonEn: "Discover Now",
            buttonAz: "Kəşf Et"
        },
        {
            image: "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/about-image-box-2.jpg",
            headingEn: "Group Booking",
            headingAz: "Qrup Rezervasİyası",
            textEn: "With a capacity for 28 seated guests this option will suit larger gatherings. Smaller parties will benefit from the additional space if drinks reception area is required. Available in combination with dining packages or on its own with pastries, coffees and cold drinks to keep the team fueled.",
            textAz: "28 nəfərə qədər oturacaq tutumu ilə böyük tədbirlər üçün idealdır. Kiçik qruplar da əlavə məkan üstünlüyündən faydalana bilər, xüsusilə içkilərlə qarşılama zonası tələb olunarsa. Nahar və şam paketləri ilə birlikdə və ya sadəcə şirniyyat, qəhvə və sərinləşdirici içkilərlə sifariş mümkündür.",
            buttonEn: "Discover Now",
            buttonAz: "Kəşf Et"
        }
    ]

    return (
        <section className="about-event-section container-fluid">
            <StaticLanguage
                en={data.map((item, index) => (
                    <div key={index} className="about-event" data-aos="fade-up" data-aos-duration="2500">
                        <img src={item.image} alt="" />
                        <div className="about-text-part">
                            <h1>{item.headingEn}</h1>
                            <p>{item.textEn}</p>
                            <Link to='/contactus'>
                                <button className='discover-now-btn'>{item.buttonEn} <HiOutlineArrowLongRight size={20} /></button>
                            </Link>
                        </div>
                    </div>
                ))}

                az={data.map((item, index) => (
                    <div key={index} className="about-event" data-aos="fade-up" data-aos-duration="2500">
                        <img src={item.image} alt="" />
                        <div className="about-text-part">
                            <h1>{item.headingAz}</h1>
                            <p>{item.textAz}</p>
                            <Link to="/contactus">
                                <button className='discover-now-btn'>{item.buttonAz} <HiOutlineArrowLongRight size={20} /></button>
                            </Link>
                        </div>
                    </div>
                ))}
            />
        </section>
    )
}

export default AboutEvent