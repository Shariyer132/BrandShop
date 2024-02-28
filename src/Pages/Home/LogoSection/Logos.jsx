import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';



const Logos = () => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        axios.get('logo.json')
            .then(data => {
                setLogos(data.data)
            })
    }, [logos])

    return (
        <>
            <div className="pb-20">
                <Swiper
                    breakpoints={{
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        },
                        630: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        425: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }}
                    style={{
                        '--swiper-navigation-color': '#F0F0F0',
                      }}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        logos.map((logo, idx) => <SwiperSlide key={idx}><div className="flex justify-center items-center"><img src={logo.image} alt="" /></div></SwiperSlide>)
                    }

                </Swiper>
            </div>
        </>
    );
};

export default Logos;