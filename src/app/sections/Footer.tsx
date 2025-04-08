'use client'
import { motion } from "framer-motion";

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

export const Footer = () => {
  return (
    <footer className="py-10 w-full max-md:px-4 max-md:py-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        <motion.div
          className="flex items-center max-sm:flex-col max-md:items-center max-md:gap-4 justify-center gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href="#"
            className="font-sen tracking-wider max-md:text-sm"
            variants={fadeUp}
            custom={1}
          >
            Condiciones de uso y privacidad
          </motion.a>
          <motion.a
            href="#"
            className="font-sen tracking-wider max-md:text-sm"
            variants={fadeUp}
            custom={2}
          >
            Política de cookies
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={3}
        >
          <p className="font-sen text-center tracking-wider max-sm:text-xs">
            Copyright © El Toke Restaurant. Todos los derechos reservados.
            Sitio web creado por{" "}
            <motion.a
              href="#"
              className="hover:underline italic inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Wow Web Group
            </motion.a>
          </p>
        </motion.div>

      </div>
    </footer>
  );
};
