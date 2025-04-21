import type { Metadata } from "next";

import "./globals.css";


import { Quicksand, Sen, Syne, Archivo_Black, Poppins, Sedan, Antonio } from 'next/font/google';

 const antonio = Antonio({ subsets: ['latin'], variable: '--font-antonio' });
 const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', weight: ['400', '700'] });
 const sen = Sen({ subsets: ['latin'], variable: '--font-sen', weight: ['400', '700'] });
 const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['400', '700'] });
 const archivoBlack = Archivo_Black({ subsets: ['latin'], variable: '--font-archivo-black', weight: '400' });
 const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400', '600', '700'] });
 const sedan = Sedan({ subsets: ['latin'], variable: '--font-sedan', weight: '400' });

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
