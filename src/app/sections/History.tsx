'use client'
import  { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function History() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  
  useEffect(() => {

      gsap.registerPlugin(ScrollTrigger);
    
      const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer history py-10 ">


      <div className="content-scroll" ref={triggerRef} >
        <div className="mt-12 max-w-7xl mx-auto">
       <h3 className="font-quick tracking-widest  max-xl:px-4 max-lg:text-center ">
        SOBRE NOSOTROS
       </h3>

      <h2 className="mb-4 mt-12  max-lg:mt-4 text-primary text-xl md:text-5xl max-lg:text-center   max-xl:px-4  tracking-widest font-sedan  mx-auto ">
          Una Vida de Aprendizaje y Superación
        </h2>
        </div>


        <div ref={sectionRef} className="scroll-section-inner mt-40  max-md:mt-0">
        <article className="rounded-2xl  max-w-7xl p-6 max-lg:w-full m-auto flex flex-col gap-6 max-sm:p-0 ">
         
          <p className="text-zinc-300 descp  max-2xl:px-2 tracking-widest leading-8 text-xl max-md:text-sm  break-words font-syne">
            Desde pequeño, entendí que el mundo tenía algo más grande reservado para mí. Crecí viendo a mi familia
            esforzarse sin descanso, y eso encendió en mí una determinación inquebrantable. No quería vivir con
            limitaciones, sabía que mi destino dependía de mis decisiones.
          </p>
          <p className="text-zinc-300 descp  text-xl max-md:text-sm  max-2xl:px-2 tracking-widest leading-8 font-syne">
            Mi primer negocio lo inicié a los 14 años, negociando con el rector de mi colegio para pasear los perros
            de seguridad a cambio de un pago diario. También vendía dulces en la escuela, aprendiendo el valor de la
            venta y la estrategia. Pero no todo fue aciertos; en mi adolescencia me rodeé de personas que no compartían mis valores, lo que me llevó a tomar decisiones equivocadas. Sin embargo, dentro de mí siempre existió una voz que me recordaba que podía ir más lejos.
          </p>
      
        </article>
        <article className=" rounded-2xl  w-6xl p-6 max-lg:w-full m-auto flex flex-col gap-2 max-lg:px-4">
           
            <p className="text-zinc-300 leading-8 tracking-widest mb-2 text-xl max-md:text-sm font-syne ">
            Trabajé en una pizzería y, con el apoyo de mi padre, abrí mi propio negocio. Al principio, fue un éxito, pero pronto me di cuenta de que la rutina me consumía. Decidí cerrarla y, como consecuencia, mi padre dejó de apoyarme económicamente. Fue un golpe duro, pero una oportunidad para reinventarme.
            </p>
            <p className="text-zinc-300 leading-8 tracking-widest font-syne text-xl max-md:text-sm ">
            Trabajé en ventas con marcas reconocidas como Diesel y Comercializadora Baldini, lo que me llevó a estudiar Negocios Internacionales, costeando mi primer semestre con mis propios ahorros. Luego, conseguí una oportunidad en una empresa aliada a Scotiabank Colpatria, donde escalé rápidamente hasta ser contratado por el banco. La estabilidad era tentadora, pero el deseo de emprender nunca desapareció.
            </p>
            
          </article>
          <article className="  rounded-2xl  w-6xl p-6 max-lg:w-full m-auto flex flex-col gap-2 max-lg:px-4">
            
            <p className="text-zinc-300 leading-8 tracking-widest mb-2 text-xl font-syne max-md:text-sm ">
            Fundé una empresa de eventos y logística mientras trabajaba en el banco. Conseguí contratos importantes, incluso con la misma empresa donde trabajaba. Pero llegó un punto en el que tuve que elegir: estabilidad o independencia. Decidí renunciar.
            </p>
            <p className="text-zinc-300 leading-8 tracking-widest text-xl max-md:text-sm font-syne ">
            Al principio, todo parecía ir bien, pero sin una estructura financiera sólida, terminé gastando más de lo que generaba. Caí en una crisis financiera y emocional, tocando fondo. Solo, sin apoyo familiar y con deudas, enfrenté la peor etapa de mi vida.
            </p>
            <p className="text-zinc-300 leading-8 tracking-widest text-xl  max-md:text-sm font-syne">
            Pero rendirse nunca fue una opción. Decidí salir del país y empezar de nuevo, con una mentalidad renovada y enfocada en la estrategia.
            </p>
          </article>
          <article className=" rounded-2xl   w-6xl p-6 max-lg:w-full m-auto flex flex-col gap-4 max-lg:px-4">
           
            <p className="text-zinc-300 leading-8 tracking-widest mb-2 text-xl max-md:text-sm font-syne">
            Aprendí que el éxito no solo es cuestión de pasión, sino de estrategia, disciplina y visión a largo plazo.
            </p>
            <p className="text-zinc-300 leading-8 tracking-widest font-syne text-xl max-md:text-sm">
            Hoy, lidero múltiples negocios:
            </p>
            <ul>
                <li className="lista text-zinc-300 leading-8 text-xl max-md:text-sm tracking-widest font-syne"><span><i className="ri-arrow-right-line"></i> Una empresa de joyería y exportación de oro y diamantes.</span></li>
                <li className="lista font-syne text-zinc-300 leading-8 tracking-widest text-xl max-md:text-sm"><span><i className="ri-arrow-right-line"></i> Una barbería premium.</span></li>
                <li className="lista text-xl font-syne max-md:text-sm text-zinc-300 leading-8 tracking-widest"><span><i className="ri-arrow-right-line"></i>Una agencia digital.</span></li>
                <li className="lista text-xl max-md:text-sm text-zinc-300 leading-8 tracking-widest font-syne"><span><i className="ri-arrow-right-line"></i>Una compañía de logística y venta de partes de aviones.</span></li>
            </ul>
          </article>
          
        </div>
      </div>
    </section>
  );
}

export default History;