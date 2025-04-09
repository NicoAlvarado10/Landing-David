'use client'
import { motion } from 'framer-motion'
import user from '../../../public/assets/testimony.webp'
import { Testimony } from '@components/app/components/Testimony'

export default function Testimonials() {
  return (
    <section className="flex flex-col xl:justify-center min-h-[90vh] max-sm:h-full py-10 max-w-9/12 max-xl:max-w-11/12 mx-auto testimonios">
      <motion.h2
        className="text-center font-quick tracking-widest font-extralight mb-6 uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nuestros Clientes
      </motion.h2>

      <motion.div
        className="flex items-center justify-center mb-30 max-md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="h-px bg-primary w-24 md:w-24"></div>
        <h3 className="text-primary text-3xl md:text-5xl font-sedan tracking-widest px-4 mx-2">Opinan</h3>
        <div className="h-px bg-primary w-24 md:w-24"></div>
      </motion.div>

      <div className="grid grid-cols-3  max-xl:grid-cols-2 max-md:grid-cols-1 max-sm:w-10/12  justify-center items-center gap-24 max-sm:gap-6 max-md:w-8/12 mx-auto">
        {[0.4, 0.6, 0.8].map((delay, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
          >
            <Testimony
              descp="Sitio muy acogedor y el personal muy agradable. Comida rica y buenos precios. Salimos encantados, impecable la limpieza. Sin duda repetiremos"
              person="Jhon Smith"
              image={user.src}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
