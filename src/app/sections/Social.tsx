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
      className="h-full bg-center py-10 bg-cover bg-no-repeat mx-auto  flex justify-center items-center"
    >
      <div className=" mx-auto flex flex-row max-xl:flex-col px-4 w-full items-center">
        {/* Slider Swiper */}
        <div className="relative w-1/2 max-xl:w-full mx-auto flex-2 xl:flex-3 ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={0}
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
                <div className="relative group rounded overflow-hidden shadow-md ">
                  <a href="#">
                  <img
                    src={img.src}
                    alt={`Imagen de emprendedor ${index}`}
                    className="object-contain w-10/12 h-full cursor-pointer transition-opacity duration-300 group-hover:opacity-60 "
                  />

                  </a>
                  <a href="#">
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img src={igLogoImg.src} alt="icono de instagram" />
                  </div>

                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         
        </div>

        {/* Texto a la derecha (o abajo en móvil) */}
        <motion.div
          className="p-4 max-md:p-0 max-md:mt-4 flex-1 w-full max-xl:text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-5xl tracking-widest font-sedan max-sm:text-3xl">
            Sígueme!
          </h2>
          <p className="mt-4 mb-8 max-md:pb-0 text-lg max-sm:text-base leading-8 tracking-widest  font-sedan">
            Lo publicamos cada día en nuestra cuenta de Instagram
          </p>
          <a className="btn boton text-primary font-sedan text-lg max-sm:text-base" href="#">
            Síguenos!
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Social
