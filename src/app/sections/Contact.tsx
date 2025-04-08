'use client'
import { motion } from 'framer-motion'
import barberImg from '../../../public/assets/barber.webp';

export default function Contact() {
  return (
    <section className="contact py-16">
      <div className=" mx-auto flex max-md:flex-col max-xl:max-w-full  max-lg:grid-cols-1">

        {/* Texto y datos */}
        <div className="gradiente basis-6/12 flex flex-col justify-center px-32 max-lg:px-20 py-24 max-sm:py-12 gap-2">

          <motion.h2
            className="text-5xl max-md:text-5xl max-sm:text-3xl font-sedan tracking-widest max-lg:text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contacto y Reservas
          </motion.h2>

          <div className="mt-6 ">
            <motion.h3
              className="mb-6 text-3xl max-sm:text-2xl font-sedan tracking-widest"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Telefono: <br />
              <span className="font-archivo font-bold tracking-normal">912108960</span>
            </motion.h3>

            <motion.h3
              className="mb-8 text-3xl max-sm:text-2xl font-sedan tracking-widest"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Email: <br />
              <span className="font-archivo font-bold tracking-normal">info@eltoke.com</span>
            </motion.h3>

            <motion.a
              href="#"
              className="btn text-white border-white text-lg "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              ¡Contáctanos!
            </motion.a>
          </div>
        </div>

        {/* Imagen */}
        <div className='basis-6/12'>
          <img 
            src={barberImg.src} 
            alt="Imagen de Barbería"
            className="gradiente-barber object-cover mx-auto max-sm:h-8/12 max-sm:w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
