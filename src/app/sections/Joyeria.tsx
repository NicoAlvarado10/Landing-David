'use client'
import { motion } from 'framer-motion'
import joyeryImg from '../../../public/assets/joyery.jpg'

export const Joyeria = () => {
  return (
    <section className="py-20 max-md:py-10 ">
      <div className="max-w-11/12  mx-auto px-4 joyeria max-sm:h-full">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-2 justify-between">

          {/* Imagen animada */}
          <div
            className="w-full h-full relative  drop-shadow-img "
          >
            <img
              src={joyeryImg.src}
              className=" mx-auto xl:w-11/12  object-contain"
              alt="Imagen de joyería"
             
            />
          </div>

          {/* Texto animado */}
          <div className="w-full xl:pt-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-quick tracking-widest font-light joyeria-label max-sm:text-sm"
            >
              PRIVADO
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sedan text-5xl max-sm:text-3xl text-primary tracking-widest my-4 joyeria-title"
            >
              Joyería Exclusiva
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sedan tracking-widest text-xl mb-10 leading-10 joyeria-desc max-sm:text-base"
            >
              Brillando en el mundo de la joyería y la exportación de oro y diamantes <br />
              Un negocio basado en confianza, lujo y calidad. <br />
              Exportación de piezas de alto valor y diseño exclusivo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#"
                className="btn border-primary text-lg text-primary joyeria-btn max-sm:text-base relative inline-block  font-sen overflow-hidden group hover:text-white"
              >
               <span className="relative z-10">Llámanos!</span>
               <span className="absolute inset-0 bg-[#d1a57feb] -translate-x-full group-hover:translate-x-0 transition-transform duration-0 ease-in-out"></span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
