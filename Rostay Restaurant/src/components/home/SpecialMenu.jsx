import Aos from 'aos'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import StaticLanguage from '../../utils/StaticLanguage';
import { Link } from 'react-router-dom';

const SpecialMenu = () => {
    Aos.init();
    return (
        <section className='special-menu-section container-fluid'>
            <h5 data-aos="zoom-in" data-aos-duration="1500">
                <StaticLanguage en="Our Special Menu" az="Xüsusİ menyumuz" />
            </h5>
            <ul data-aos="zoom-in" data-aos-duration="1500" >
                <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-10.jpg" alt="" />
                    <p>
                        <StaticLanguage en="Main Dishes" az="Əsas Yeməklər" />
                    </p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-gallery1.jpg" alt="" />
                </li>
                <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/category-menu-1.jpg" alt="" />
                    <p>
                        <StaticLanguage en="Appetizers" az="Qəlyanaltılar" />
                    </p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/category-menu-2.jpg" alt="" />
                </li>
                <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-9.jpg" alt="" />
                    <p>
                        <StaticLanguage en="Desserts" az="Şİrnİyyatlar" />
                    </p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-8.jpg" alt="" />
                </li>
                <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-2.jpg" alt="" />
                    <p>
                        <StaticLanguage en="Salads" az="Salatlar" />
                    </p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-1.jpg" alt="" />
                </li>
                <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/category-menu-3.jpg" alt="" />
                    <p>
                        <StaticLanguage en="Drinks" az="İçkİlər" />
                    </p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-3.jpg" alt="" />
                </li>
            </ul>
            <Link to='/shop'>
                <button data-aos="zoom-in" data-aos-duration="2000" className='menu-btn'>
                    <StaticLanguage en="View All Menu" az="Bütün menyuya bax" /> <HiOutlineArrowLongRight size={20} />
                </button>
            </Link>
        </section>
    )
}

export default SpecialMenu