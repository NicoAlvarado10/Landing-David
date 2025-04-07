
import facebookImg from "../../../public/assets/Vector-1.svg";
import instagramImg from "../../../public/assets/Vector.svg";
import logo from "../../../public/assets/logo.webp";
import ctaBg from "../../../public/assets/cta-3.webp";

export default function PreFooter() {
  return (
    <section className="h-full">
    <div className="max-w-10/12 max-xl:max-w-11/12 2xl:px-4 mx-auto gap-16 max-lg:px-4">
      <div
        className="relative aspect-square w-5/12 max-sm:w-9/12 bg-cover rounded-full mx-auto"
        style={{ backgroundImage: `url(${ctaBg.src})` }}
      >

<p
  className="absolute top-10 left-1/2 transform -translate-x-1/2 uppercase text-center font-sedan w-full"
  style={{ fontSize: 'clamp(15px, 2.5vw, 4rem)' }}
>
  Una experiencia <br /> culinaria que superará <br /> tus expectativas!
</p>

<a
  href="#"
  className="px-6 py-2 md:px-12 md:py-3 border rounded-full border-white text-white absolute top-[70%] left-[50%] transform -translate-x-1/2"
  style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}
>
  ¡Contáctanos!
</a>
      </div>
  
      <div className="flex justify-between items-center py-4 max-sm:flex-row gap-4">
        <a href="#">
          <img
            src={logo.src}
            alt="logo de el toke restaurant"
            className="w-8/12 max-sm:w-4/12"
          />
        </a>
  
        <div className="flex items-center gap-2">
          <a href="#">
            <img
              src={instagramImg.src}
              alt="icono de instagram"
              className="w-8 max-sm:w-6"
            />
          </a>
          <a href="#">
            <img
              src={facebookImg.src}
              alt="icono de facebook"
              className="w-8 max-sm:w-6"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
