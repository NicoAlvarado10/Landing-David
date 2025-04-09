'use client'
import { motion } from "framer-motion";
import facebookImg from "../../../public/assets/Vector-1.svg";
import instagramImg from "../../../public/assets/Vector.svg";
import logo from "../../../public/assets/logo.webp";
import ctaBg from "../../../public/assets/cta-3.webp";

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function PreFooter() {
  return (
    <section className="h-full">
      <div className="max-w-10/12 max-xl:max-w-11/12 2xl:px-4 mx-auto gap-16 max-lg:px-4">
        
        {/* Círculo con fondo */}
        <motion.div
          className="relative aspect-square w-5/12 max-sm:w-9/12 bg-cover rounded-full mx-auto"
          style={{ backgroundImage: `url(${ctaBg.src})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleUp}
        >
          {/* Texto dentro del círculo */}
          <motion.p
            className="absolute top-10 left-1/2 transform -translate-x-1/2 uppercase text-center font-sedan w-full"
            style={{ fontSize: 'clamp(15px, 2.5vw, 4rem)' }}
            variants={fadeDown}
          >
            Una experiencia <br /> culinaria que superará <br /> tus expectativas!
          </motion.p>

          {/* Botón */}
          <motion.a
            href="#"
            className="px-6 py-2  md:px-12 md:py-3 border rounded-full border-white text-white absolute top-[70%] left-[50%] transform -translate-x-1/2"
            style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}
            variants={scaleUp}
          >
            ¡Contáctanos!
          </motion.a>
        </motion.div>

        {/* Logo + iconos */}
        <motion.div
          className="flex justify-between items-center py-4 max-sm:flex-row gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a href="#" variants={fadeUp} custom={1}>
            <img
              src={logo.src}
              alt="logo de el toke restaurant"
              className="w-8/12 xl:w-11/12 max-sm:w-4/12"
            />
          </motion.a>

          <div className="flex items-center gap-2">
            <motion.a href="#" variants={fadeUp} custom={2}>
              <img
                src={instagramImg.src}
                alt="icono de instagram"
                className="w-8 xl:w-16 max-sm:w-6"
              />
            </motion.a>
            <motion.a href="#" variants={fadeUp} custom={3}>
              <img
                src={facebookImg.src}
                alt="icono de facebook"
                className="w-8 xl:w-16 max-sm:w-6"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
