'use client'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import igLogoImg from '../../../public/assets/Vector.svg'
import igImg1 from '../../../public/assets/ig-1.webp'
import igImg2 from '../../../public/assets/ig-2.webp'
import igImg3 from '../../../public/assets/ig-3.webp'
import igImg4 from '../../../public/assets/ig-4.webp'
import igImg5 from '../../../public/assets/ig-5.webp'
import bgIgImg from '../../../public/assets/bg-ig.webp'

const Social = () => {
  const images = [igImg1, igImg2, igImg3, igImg4, igImg5]
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section
      style={{ backgroundImage: `url(${bgIgImg.src})` }}
      className="h-full bg-center py-10 bg-cover bg-no-repeat mx-auto flex justify-center items-center"
    >
      <div className="max-w-11/12 flex flex-row max-md:flex-col px-4 w-full items-center">
        {/* Slider Swiper */}
        <div className="relative w-1/2 max-xl:w-11/12 flex-1">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={5}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {[...images, ...images].map((img, index) => (
              <SwiperSlide key={index} className="p-2">
                <div className="relative group rounded overflow-hidden shadow-md">
                  <img
                    src={img.src}
                    alt={`Imagen de emprendedor ${index}`}
                    className="object-contain w-full h-full cursor-pointer transition-opacity duration-300 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img src={igLogoImg.src} alt="icono de instagram" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones personalizados */}
          <style jsx global>{`
            .swiper-button-prev,
            .swiper-button-next {
              color: white !important;
              background-color: rgba(0, 0, 0, 0.3);
              padding: 10px;
              border-radius: 9999px;
              transition: background-color 0.3s ease;
            }
            .swiper-button-prev:hover,
            .swiper-button-next:hover {
              background-color: rgba(0, 0, 0, 0.6);
            }
          `}</style>
        </div>

        {/* Texto a la derecha (o abajo en móvil) */}
        <motion.div
          className="p-4 max-md:p-0 max-md:mt-4 flex-1 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-5xl tracking-widest font-sedan max-sm:text-3xl">
            ¡Sígueme!
          </h2>
          <p className="mt-4 mb-8 text-lg max-sm:text-base leading-8 tracking-widest font-sedan">
            Lo publicamos cada día en nuestra cuenta de Instagram
          </p>
          <a className="btn text-primary font-sedan text-lg max-sm:text-base" href="#">
            ¡Síguenos!
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Social
