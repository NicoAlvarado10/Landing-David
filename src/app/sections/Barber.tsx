'use client'
import { motion } from 'framer-motion'
import barberImg from '../../../public/assets/barbery.webp'

export const Barber = () => {
  return (
    <section className="py-20 max-md:py-10" id="barber-section">
      <div className="max-w-10/12 max-xl:max-w-11/12 mx-auto px-4 barberia">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-6 justify-between">
          
          {/* Texto con animación */}
          <div
            className="w-full max-md:order-2 "
           
          >
            <motion.h3
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
            className="font-quick tracking-widest max-sm:text-base font-light barberia-label">
              PRIVADO
            </motion.h3>
            <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay:0.2 }}
            className="font-sedan text-5xl text-primary tracking-widest my-4 barberia-title max-sm:text-3xl">
              The Empire Barbershop
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="font-sedan tracking-widest text-xl mb-10 leading-10 barberia-desc max-sm:text-base">
              Un espacio premium diseñado para quienes buscan más que un simple corte de cabello. 
              Servicio de barbería de alto nivel con barberos expertos. 
              Ambiente exclusivo con una experiencia completa de lujo.
            </motion.p>
            <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
            >
            <a href="#" className="btn border-primary text-primary text-lg max-sm:text-base barberia-btn">
              Llámanos!
            </a>

            </motion.div>
          </div>

          {/* Imagen con animación */}
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src={barberImg.src}
              className="h-full drop-shadow-img mx-auto   object-cover barberia-img"
              alt="Imagen de barbería"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
