import Aos from 'aos'
import { GiCheckMark } from 'react-icons/gi'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import StaticLanguage from '../../utils/StaticLanguage'

const WhyChooseUs = () => {
    Aos.init();
    return (
        <section className='container-fluid choose-us-section'>
            <div className="choose-us-image" data-aos="fade-right" data-aos-duration="1500">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-banner04.jpg" alt="" />
            </div>
            <div className="choose-us-info" data-aos="fade-up" data-aos-duration="1500">
                <h5>
                    <StaticLanguage en="Why Choose Us" az="Nİyə bİzİ seçməlİsİnİz" />
                </h5>
                <h1>
                    <StaticLanguage en="Enjoying the beautiful things" az="Gözəllİklərİn dadını çıxarın" />

                </h1>
                <p className='p-1'>
                    <StaticLanguage en="We are the perfect place to come for a special occasion dinner or a casual meal with friends." az="Xüsusi günləriniz üçün nahar, yaxud dostlarla səmimi bir yemək üçün ideal məkanıq." />
                </p>
                <p className='p-2'>
                    <StaticLanguage en="Whether you're hosting a corporate event, cocktail party, luncheon, dinner, meeting, shower, wedding reception, bat/bar mitzvah or rehearsal dinner, we know we can offer you and your guests a truly memorable event. We have a variety of private event spaces that can accommodate up to 180 guests." az="Korporativ tədbir, kokteyl partisi, işgüzar nahar, axşam yeməyi, iclas, şənlik, toy mərasimi və ya məşq ziyafəti – nə olursa olsun, biz sizə və qonaqlarınıza unudulmaz bir təcrübə təqdim edəcəyimizə əminik. Özəl tədbirlər üçün 180 nəfərə qədər qonağı qəbul edə biləcək müxtəlif məkanlarımız mövcuddur." />

                </p>
                <ul>
                    <li><GiCheckMark color='#f2b612' />
                        <StaticLanguage en=" Carefully checked" az=" Diqqətlə yoxlanılır" />
                    </li>
                    <li><GiCheckMark color='#f2b612' />
                        <StaticLanguage en=" Expertly tested for safety" az=" Təhlükəsizlik üçün sınaqdan keçirilir" />
                    </li>
                    <li><GiCheckMark color='#f2b612' />
                        <StaticLanguage en=" Refund if found dirty food" az=" Yemək çirkli olarsa, ödəniş geri qaytarılır" />
                    </li>
                    <li><GiCheckMark color='#f2b612' />
                        <StaticLanguage en=" Meat & vegetables are always fresh" az=" Ət və tərəvəzlər həmişə təzədi" />
                    </li>
                </ul>
                <Link to='/about'>
                    <button>
                        <StaticLanguage en="Get Started" az="Ətraflı bax" /> <HiOutlineArrowLongRight size={20} /></button>
                </Link>
            </div>
        </section>
    )
}

export default WhyChooseUs