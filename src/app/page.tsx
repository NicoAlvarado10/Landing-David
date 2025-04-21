'use client'
import Hero from "@components/app/sections/Hero"
import Social from "@components/app/sections/Social";
import { Barber } from "@components/app/sections/Barber";
import { Joyeria } from "@components/app/sections/Joyeria";
import { Filosophy } from "@components/app/sections/Filosophy";
import Testimonials from "@components/app/sections/Testimonials";
import Contact from "@components/app/sections/Contact";
import PreFooter from "@components/app/sections/PreFooter";
import { Footer } from "@components/app/sections/Footer";
import { ScrollSection } from "@components/app/sections/ScrollSection";
import { History } from "./sections/History";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Empezamos en `true` para mostrar el preloader desde el inicio.

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Finaliza el loading después de 2 segundos.
      document.body.style.cursor = 'default'; // Cambia el cursor a su valor por defecto.
      window.scrollTo(0, 0); // Vuelve al principio de la página al cargar.
    }, 2000);

    return () => clearTimeout(timer); // Limpieza del `setTimeout` si el componente se desmonta antes de completarse.
  }, []); // Este `useEffect` solo se ejecuta una vez al montar el componente.

  return (
    <>
    <AnimatePresence>
      {isLoading && <Preloader />} {/* Muestra el preloader mientras `isLoading` sea `true` */}
    </AnimatePresence>
    
      <Hero />
      <History />
      <ScrollSection />
      <Social />
      <Barber />
      <Joyeria />
      <Filosophy />
      <Testimonials />
      <Contact />
      <PreFooter />
      <Footer />
    </>
  );
}
