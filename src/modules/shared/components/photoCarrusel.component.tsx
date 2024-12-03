import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";



export default function PhotoCarousel() {
    return (
        <div className="w-full h-[400px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >

                <SwiperSlide className="grid justify-items-center">
                    <img src="./src/assets/images/Estilo1.jpg" className="w-[400px] h-full object-cover rounded-xl" alt="Imagen de estilo 1" />
                </SwiperSlide>
                <SwiperSlide className="grid justify-items-center">
                    <img src="./src/assets/images/Estilo2.jpg" className="w-[400px] h-full object-cover rounded-xl" alt="Imagen de estilo 2" />
                </SwiperSlide>
                <SwiperSlide className="grid justify-items-center">
                    <img src="./src/assets/images/Estilo3.jpg" className="w-[400px] h-full object-cover rounded-xl" alt="Imagen de estilo 3" />
                </SwiperSlide>
                <SwiperSlide className="grid justify-items-center">
                    <img src="./src/assets/images/Estilo4.jpg" className="w-[400px] h-full object-cover rounded-xl" alt="Imagen de estilo 4" />
                </SwiperSlide>
                <SwiperSlide className="grid justify-items-center">
                    <img src="./src/assets/images/Estilo5.jpg" className="w-[400px] h-full object-cover rounded-xl" alt="Imagen de estilo 5" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}