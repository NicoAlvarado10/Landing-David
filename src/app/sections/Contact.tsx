'use client'
import { motion } from 'framer-motion'
import barberImg from '../../../public/assets/barber.jpg';

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
              <span className="font-archivo font-bold tracking-normal">918473655</span>
            </motion.h3>

            <motion.h3
              className="mb-8 text-3xl max-sm:text-2xl font-sedan tracking-widest"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Email: <br />
              <span className="font-archivo font-bold tracking-normal">info@oliverjames.com</span>
            </motion.h3>

            <motion.a
              href="#"
              className="btn relative inline-block text-white  text-lg font-sen overflow-hidden group hover:text-white border-white hover:border-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
             
              <span className="relative z-10"> Contactanos!</span>
              <span className="absolute inset-0 bg-[#d1a57feb] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </motion.a>
          </div>
        </div>

        {/* Imagen */}
        <div className='basis-6/12'>
          <img 
          loading='lazy'
            src={barberImg.src} 
            alt="Imagen de Barbería"
            className="gradiente-barber object-cover mx-auto max-sm:h-8/12 max-sm:w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
