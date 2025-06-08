import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle.jsx/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-server-orcin-two.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            >
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide>
                        <div className='flex flex-col items-center p-15' >
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p ><FaQuoteLeft className='h-[60px] w-[100px]' /></p>
                            <p>{review.details}</p>
                            <h2 className='text-amber-600 text-[32px] uppercase '>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </div>
    );
};

export default Testimonials;