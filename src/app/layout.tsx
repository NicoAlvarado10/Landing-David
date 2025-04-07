import type { Metadata } from "next";

import "./globals.css";


import {
  antonio,
  quicksand,
  sen,
  syne,
  archivoBlack,
  poppins,
  sedan,
} from '@components/app/Fonts'


export const metadata: Metadata = {
  title: "David Navarro | De la Adversidad al Éxito",
  description: "Descubre la inspiradora historia de David Navarro: de trabajar en una pizzería a convertirse en un exitoso emprendedor con múltiples negocios.",
  keywords: ["David Navarro", "emprendimiento", "historia de éxito", "negocios", "superación personal", "liderazgo"],
  authors: [{ name: "David Navarro" }],
  creator: "Wow Web Group",
  openGraph: {
    title: "David Navarro | De la Adversidad al Éxito",
    description: "Conoce la trayectoria de David Navarro y cómo transformó sus fracasos en grandes oportunidades.",// pon tu dominio real acá
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
         className={`${antonio.variable} ${quicksand.variable} ${sen.variable} ${syne.variable} ${archivoBlack.variable} ${poppins.variable} ${sedan.variable} bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
