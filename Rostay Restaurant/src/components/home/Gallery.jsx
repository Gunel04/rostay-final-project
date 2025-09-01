import StaticLanguage from '../../utils/StaticLanguage'

const Gallery = () => {
    return (
        <>
            <div className="home-gallery-section container-fluid" >
                <h1 data-aos='zoom-in-up' data-aos-duration='2000'>
                    <StaticLanguage en="Gallery" az="Qalereya" />
                </h1>
                <div className="home-gallery-photos-con" data-aos='zoom-in-up' data-aos-duration='2000'>
                    <div className="home-gallery-photo-1">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-gallery6.jpg" alt="" />
                    </div>
                    <div className="home-gallery-photo-2">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-gallery5.jpg" alt="" />
                    </div>
                    <div className="home-gallery-photo-3">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-gallery4.jpg" alt="" />
                    </div>
                    <div className="home-gallery-photo-4">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-gallery1.jpg" alt="" />
                    </div>
                    <div className="home-gallery-photo-5">
                        <h2 className='grid-heading-one'>
                            <StaticLanguage en="Our Rostay" az="Bizim Rostay" />
                        </h2>
                    </div>
                    <div className="home-gallery-photo-6">
                        <h2 className='grid-heading-two'>
                            <StaticLanguage en="Gallery" az="Qalereya" />
                        </h2>
                    </div>
                    <div className="home-gallery-photo-7">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-gallery2.jpg" alt="" />
                    </div>
                    <div className="home-gallery-photo-8">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-gallery3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
