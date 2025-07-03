import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import sliderImg1 from '../assets/images/sliderImg1.webp'
import sliderImg2 from '../assets/images/sliderImg2.jpg'
import sliderImg3 from '../assets/images/sliderImg3.webp'
import sliderImg4 from '../assets/images/sliderImg4.jpg'
import sliderImg6 from '../assets/images/sliderImg6.jpg'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
                className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]"
            >
                <SwiperSlide>
                    <img
                        src={sliderImg1}
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={sliderImg2}
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={sliderImg3}
                        alt="Slide 6"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={sliderImg4}
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={sliderImg6}
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
