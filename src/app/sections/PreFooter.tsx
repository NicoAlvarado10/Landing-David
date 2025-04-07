
import facebookImg from "../../../public/assets/Vector-1.svg";
import instagramImg from "../../../public/assets/Vector.svg";
import logo from "../../../public/assets/logo.webp";
import ctaBg from "../../../public/assets/cta-3.webp";

export default function PreFooter() {
  return (
    <section>
      <div className="max-w-7xl 2xl:px-4 mx-auto gap-16 max-lg:px-4">
        <div
          className="relative circle bg-cover rounded-full mx-auto overflow-visible"
          style={{ backgroundImage: `url(${ctaBg.src})` }}
        >
          <p className="absolute top-[10%] left-[-5%] uppercase text-5xl max-md:text-2xl font-sedan text-center max-sm:w-full max-sm:left-[-2.5%] mx-auto max-sm:text-base">
            Una experiencia <br /> culinaria que superará
            <br /> tus expectativas!
          </p>
          <a
            href="#"
            className="btn absolute top-[80%] left-[25%] max-sm:left-[20%] text-lg border-white text-white max-sm:top-[75%] max-sm:text-base"
          >
            Contactanos!
          </a>
        </div>

        <div className="flex justify-between max-lg:items-center max-md:py-4 max-sm:flex-row max-sm:items-center items-center">
          <a href="#">
            <img
              src={logo.src}
              alt="logo de el toke restaurant"
              className="w-11/12 max-sm:w-4/12 max-md:w-8/12"
            />
          </a>

          <div className="flex items-center gap-4">
            <a href="#">
              <img
                src={instagramImg.src}
                alt="icono de instagram"
                className="w-10/12 max-md:w-8/12 max-sm:w-4/12"
              />
            </a>
            <a href="#">
              <img
                src={facebookImg.src}
                alt="icono de facebook"
                className="w-10/12 max-md:w-8/12 max-sm:w-4/12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
