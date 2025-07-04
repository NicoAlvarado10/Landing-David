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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={3}
        >
          <p className="font-sen text-center tracking-wider text-zinc-200 max-sm:text-xs">
            Copyright © Oliver James. Todos los derechos reservados.
            Sitio web creado por{" "}
            <motion.a
              href="https://nico-freelance.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline italic inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Nicolás Alvarado
            </motion.a>
          </p>
        </motion.div>

      </div>
    </footer>
  );
};
