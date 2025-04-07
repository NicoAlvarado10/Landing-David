'use client'
import { motion } from 'framer-motion'
import igLogoImg from '../../../public/assets/Vector.svg'
import igImg1 from '../../../public/assets/ig-1.webp'
import igImg2 from '../../../public/assets/ig-2.webp'
import igImg3 from '../../../public/assets/ig-3.webp'
import igImg4 from '../../../public/assets/ig-4.webp'
import igImg5 from '../../../public/assets/ig-5.webp'
import bgIgImg from '../../../public/assets/bg-ig.webp'

const Social = () => {
  const images = [igImg1, igImg2, igImg3, igImg4, igImg5]

  return (
    <section
      style={{ backgroundImage: `url(${bgIgImg.src})` }}
      className="h-full bg-center py-10 bg-cover bg-no-repeat mx-auto flex justify-center items-center"
    >
      <div className="max-w-full mx-auto flex flex-row max-md:flex-col px-4 gap-6 ig-section w-full items-center">
        
        {/* Carrusel Scroll Horizontal */}
        <div className="relative  w-full overflow-hidden py-6 flex-[2]">
          <motion.div
            className="flex gap-4 w-max"
            animate={{
              x: ['0%', '-70%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="relative group min-w-[250px] max-md:max-h-[150px] max-h-[250px] flex-shrink-0"
              >
                <img
                  src={img.src}
                  alt={`Imagen de emprendedor ${index}`}
                  className="object-cover w-full h-full cursor-pointer  transition-opacity duration-300 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src={igLogoImg.src} alt="icono de instagram" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Texto a la derecha (o abajo en móvil) */}
        <motion.div
          className="p-4 max-md:p-0 max-md:mt-4 flex-[1] w-full"
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
