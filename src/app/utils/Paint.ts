export type TimelineData = {
    step: string;
    content: {
      blocks: Array<
        | { type: "paragraph"; text: string }
        | { type: "list"; items: string[] }
      >;
    };
  };

export const data: TimelineData[] = [
    {
      step: "Mi Historia",
      content: {
        blocks: [
          {
            type: "paragraph",
            text: "Desde pequeño, entendí que el mundo tenía algo más grande reservado para mí. Crecí viendo a mi familia esforzarse sin descanso, y eso encendió en mí una determinación inquebrantable. No quería vivir con limitaciones, sabía que mi destino dependía de mis decisiones."
          },
          {
            type: "paragraph",
            text: "Mi primer negocio lo inicié a los 14 años, negociando con el rector de mi colegio para pasear los perros de seguridad a cambio de un pago diario. También vendía dulces en la escuela, aprendiendo el valor de la venta y la estrategia. Pero no todo fue aciertos; en mi adolescencia me rodeé de personas que no compartían mis valores, lo que me llevó a tomar decisiones equivocadas. Sin embargo, dentro de mí siempre existió una voz que me recordaba que podía ir más lejos."
          }
        ]
      }
    },
    {
      step: "Primer Negocio, Primeras Lecciones",
      content: {
        blocks: [
          {
            type: "paragraph",
            text: "Trabajé en una pizzería y, con el apoyo de mi padre, abrí mi propio negocio. Al principio, fue un éxito, pero pronto me di cuenta de que la rutina me consumía. Decidí cerrarla y, como consecuencia, mi padre dejó de apoyarme económicamente. Fue un golpe duro, pero una oportunidad para reinventarme."
          },
          {
            type: "paragraph",
            text: "Trabajé en ventas con marcas reconocidas como Diesel y Comercializadora Baldini, lo que me llevó a estudiar Negocios Internacionales, costeando mi primer semestre con mis propios ahorros. Luego, conseguí una oportunidad en una empresa aliada a Scotiabank Colpatria, donde escalé rápidamente hasta ser contratado por el banco. La estabilidad era tentadora, pero el deseo de emprender nunca desapareció."
          }
        ]
      }
    },
    {
      step: "Renuncia, Fracaso y Renacimiento",
      content: {
        blocks: [
          {
            type: "paragraph",
            text: "Fundé una empresa de eventos y logística mientras trabajaba en el banco. Conseguí contratos importantes, incluso con la misma empresa donde trabajaba. Pero llegó un punto en el que tuve que elegir: estabilidad o independencia. Decidí renunciar."
          },
          {
            type: "paragraph",
            text: "Al principio, todo parecía ir bien, pero sin una estructura financiera sólida, terminé gastando más de lo que generaba. Caí en una crisis financiera y emocional, tocando fondo. Solo, sin apoyo familiar y con deudas, enfrenté la peor etapa de mi vida."
          },
          {
            type: "paragraph",
            text: "Pero rendirse nunca fue una opción. Decidí salir del país y empezar de nuevo, con una mentalidad renovada y enfocada en la estrategia."
          }
        ]
      }
    },
    {
      step: "Construyendo un Imperio",
      content: {
        blocks: [
          {
            type: "paragraph",
            text: "Aprendí que el éxito no solo es cuestión de pasión, sino de estrategia, disciplina y visión a largo plazo."
          },
          {
            type: "paragraph",
            text: "Hoy, lidero múltiples negocios:"
          },
          {
            type: "list",
            items: [
              "Una empresa de joyería y exportación de oro y diamantes.",
              "Una barbería premium.",
              "Una agencia digital.",
              "Una compañía de logística y venta de partes de aviones."
            ]
          }
        ]
      }
    }
  ];
  