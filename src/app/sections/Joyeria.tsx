'use client'
import { motion } from 'framer-motion'
import joyeryImg from '../../../public/assets/joyery-2.webp'

export const Joyeria = () => {
  return (
    <section className="py-20 max-md:py-10">
      <div className="max-w-11/12  mx-auto px-4 joyeria">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-6 justify-between">

          {/* Imagen animada */}
          <motion.div
            className="w-full h-full "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={joyeryImg.src}
              className="h-full drop-shadow-img mx-auto xl:w-11/12 object-cover joyeria-img"
              alt="Imagen de joyería"
            />
          </motion.div>

          {/* Texto animado */}
          <div className="w-full xl:pt-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-quick tracking-widest font-light joyeria-label max-sm:text-sm"
            >
              PRIVADO
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-sedan text-5xl max-sm:text-3xl text-primary tracking-widest my-4 joyeria-title"
            >
              Joyería Exclusiva
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="btn border-primary text-lg text-primary joyeria-btn max-sm:text-base"
              >
                Llámanos!
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
