import Aos from 'aos'
import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { useSelector } from 'react-redux';

const SpecialMenu = () => {
    Aos.init();
    const categories = useSelector(p => p.category);
    return (
        <section className='special-menu-section container-fluid'>
            <h5 data-aos="zoom-in" data-aos-duration="1500">Our Special Menu</h5>
            <ul data-aos="zoom-in" data-aos-duration="1500" >
                {categories.map((item, index) => (
                    <li key={index}>
                        <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-10.jpg" alt="" />
                        <p>{item.categoryName}</p>
                        <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-gallery1.jpg" alt="" />
                    </li>
                ))}

                {/* <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/category-menu-1.jpg" alt="" />
                    <p>Main dishes</p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/category-menu-2.jpg" alt="" />
                </li>
                <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-9.jpg" alt="" />
                    <p>Desserts</p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-8.jpg" alt="" />
                </li>
                <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-2.jpg" alt="" />
                    <p>Coffee</p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-1.jpg" alt="" />
                </li>
                <li>
                    <img className='img-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/category-menu-3.jpg" alt="" />
                    <p>Cold Drinks</p>
                    <img className='img-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-3.jpg" alt="" />
                </li> */}
            </ul>
            <button data-aos="zoom-in" data-aos-duration="2000">View All Menu <HiOutlineArrowLongRight size={20} /></button>

        </section>
    )
}

export default SpecialMenu