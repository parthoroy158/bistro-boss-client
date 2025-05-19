import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle.jsx/SectionTitle';


const Category = () => {
    return (
        <div className='mt-10'>
            <section>
                <SectionTitle
                    subHeading={"From 11.00am to 10.00pm"}
                    heading={"Oder Online"}
                >
                </SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={35}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10"
                >
                    <SwiperSlide>
                        <img src={slide1} />
                        <h3 className='text-center uppercase -mt-30 text-white text-4xl '>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} />
                        <h3 className='text-center uppercase -mt-30 text-white text-4xl '>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} />
                        <h3 className='text-center uppercase -mt-30 text-white text-4xl '>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} />
                        <h3 className='text-center uppercase -mt-30 text-white text-4xl '>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} />
                        <h3 className='text-center uppercase  text-white text-4xl '>Salad</h3>
                    </SwiperSlide>

                </Swiper>
            </section>
        </div>
    );
};

export default Category;