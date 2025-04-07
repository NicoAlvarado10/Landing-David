'use client'
import { motion } from 'framer-motion'
import menImg from '../../../public/assets/filosophy.webp'

export const Filosophy = () => {
  return (
    <section className="py-20 max-md:py-10 filosofia">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex max-md:flex-col-reverse gap-12 max-md:gap-4 justify-between">

          {/* Texto animado */}
          <div className="w-full basis-6/12 flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-sedan text-5xl text-primary tracking-widest my-4 filosofia-title max-sm:text-3xl"
            >
              El éxito no es cuestión de suerte, es cuestión de decisión.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-sedan tracking-widest text-xl mb-10 leading-10 filosofia-desc max-sm:text-base"
            >
              He recorrido un camino lleno de desafíos y aprendizajes, y ahora quiero compartir mis estrategias contigo
            </motion.p>
          </div>

          {/* Imagen animada */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={menImg.src}
              className="h-full drop-shadow-img mx-auto object-cover filosofia-img"
              alt="Imagen de barbería"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}


