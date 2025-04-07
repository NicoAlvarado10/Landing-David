// app/fonts.js
import { Antonio, Quicksand, Sen, Syne, Archivo_Black, Poppins, Sedan } from 'next/font/google'

export const antonio = Antonio({
  subsets: ['latin'],
  weight: ['400', '700'], // agregá los pesos que necesites
  variable: '--font-antonio',
  display: 'swap',
})

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
})

export const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sen',
  display: 'swap',
})

export const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
})

export const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-archivo-black',
  display: 'swap',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const sedan = Sedan({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sedan',
  display: 'swap',
})
