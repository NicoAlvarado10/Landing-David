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
      <div className="max-w-7xl mx-auto px-4 gap-6 ig-section">
        <div className="grid grid-cols-6 max-xl:grid-cols-2 max-sm:grid-cols-1 items-center gap-2 py-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`relative group w-full mx-auto max-md:w-10/12 img-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={img.src}
                alt="Imagen de emprendedor"
                className="object-cover cursor-pointer w-full h-full transition-opacity duration-300 group-hover:opacity-60 max-md:w-full max-md:h-6/12 max-sm:w-full max-sm:h-1/2 max-sm:mx-auto"
              />
              <div className="absolute inset-0 flex cursor-pointer justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={igLogoImg.src} alt="icono de instagram" />
              </div>
            </motion.div>
          ))}

          <motion.div
            className="p-4 max-md:p-0 max-md:mt-4"
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
      </div>
    </section>
  )
}

export default Social
