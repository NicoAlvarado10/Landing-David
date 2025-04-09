'use client'
import { motion } from 'framer-motion'
import starsImg from '../../../public/assets/Layer_1-2.svg'
import heroImg from '../../../public/assets/hero-1.webp'
import ellipseImg from '../../../public/assets/Ellipse-4.webp'

const text = 'DAVID NNAVARRO'
const repeatedText = Array(10).fill(text)
const duplicatedText = [...repeatedText, ...repeatedText]

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${ellipseImg.src})` }}
      className="relative h-screen h max-2xl:h-full mx-auto bg-center bg-cover bg-no-repeat py-12 max-sm:pb-24"
    >
      {/* Scroll horizontal detrás de todo */}
      <div className="scroll-wrapper hidden md:block">
  <div className="scroll-track">
    {duplicatedText.map((word, index) => (
      <span className="scroll-word" key={index}>
        {word}
      </span>
    ))}
  </div>
</div>


      {/* Contenido en la grid por delante */}
      <div className="grid grid-cols-3 max-w-11/12 max-2xl:max-w-full mx-auto grid-rows-1 justify-center items-center px-4 max-md:grid-cols-1 max-md:grid-rows-auto gap-6 max-sm:gap-0 relative z-40">

        {/* Título */}
        <motion.div
          className=" max-md:order-1 max-md:text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl  max-sm:text-2xl tracking-widest flex flex-col gap-12 max-2xl:gap-4">
            De la adversidad <br />
            <span className="text-primary tracking-widest max-sm:text-5xl text-7xl">
              AL ÉXITO
            </span>
          </h1>
        </motion.div>

        {/* Texto con estrellas */}
        <motion.div
          className="col-start-3 max-md:col-auto row-start-1 max-md:row-auto p-4 max-md:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest flex flex-col max-md:flex-col-reverse max-md:gap-4">
            <img
              src={starsImg.src}
              alt="imagen de Estrellas"
              className="w-8 mb-4"
            />
            De trabajador en una pizzería a fundador de múltiples negocios exitosos. Descubre cómo convertí mis fracasos en mi mayor fortaleza. <br />
            <span className="font-bold text-center pt-4 tracking-widest">
              Mi historia de transformación y crecimiento
            </span>
          </p>
        </motion.div>

        {/* Imagen del héroe */}
        <motion.div
          className="relative z-40 col-start-2 max-md:col-auto row-start-2 max-md:row-auto p-4 max-md:order-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src={heroImg.src}
            alt="Imagen de David Navarro"
            className="object-cover max-md:w-8/12 max-sm:w-10/12 w-full mx-auto"
          />
        </motion.div>

        {/* Lista 1 */}
        <motion.div
          className="row-start-2 max-md:row-auto pt-56 max-md:pt-0 max-md:order-4 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ul className="max-sm:text-center">
            <li className="lista li tracking-widest text-sm">
              Laocoön and His Sons, also known as the <br />
              Laocoön Group
            </li>
          </ul>
        </motion.div>

        {/* Lista 2 */}
        <motion.div
          className="col-start-3 max-md:col-auto row-start-2 pt-96 max-md:pt-0 max-md:row-auto max-md:order-5 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <ul className="max-sm:text-center">
            <li className="lista li tracking-widest text-sm">
              A Marble Head of Zeus, Roman Imperial,<br />
              late 1st/2nd Century A.D
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
