import React from 'react'

export const Footer = () => {
  return (
    <footer className="py-10 w-full max-md:px-4 max-md:py-5">
    <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex items-center max-sm:flex-col max-md:items-center max-md:gap-4 justify-center gap-20">
            <a href="#" className="font-sen tracking-wider max-md:text-sm">Condiciones de uso y privacidad</a>
            <a href="#" className="font-sen tracking-wider max-md:text-sm">Política de cookies</a>
        </div>
        <div>
            <p className="font-sen text-center tracking-wider max-sm:text-xs">Copyright © El Toke Restaurant. Todos los derechos reservados.  Sitio web creado por <a href="#" className="hover:underline italic">Wow Web Group</a></p>
        </div>

    </div>
</footer>

  )
}
