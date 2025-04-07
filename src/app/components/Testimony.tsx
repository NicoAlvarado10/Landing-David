import comilla from '../../../public/assets/comilla.svg';

interface TestimonyProps {
  descp: string;
  person: string;
  image: string;
}

export const Testimony: React.FC<TestimonyProps> = ({ descp, person, image }) => {
  return (
    <article className="testimoni mx-auto px-6 py-8 flex flex-col gap-4 bg-gradient-to-br from-black to-yellow-900 border-[4px] border-primary rounded-[3rem]">
      <img className="w-8 h-8 max-sm:w-4 max-sm:h-4" src={comilla.src} alt="comilla decorativa" />
      <p className="font-sedan text-lg max-sm:text-base text-center tracking-widest">{descp}</p>
      <img className="flex mx-auto" src={image} alt="imagen de testimonio" />
      <h3 className="text-center tracking-wider max-sm:text-sm">{person}</h3>
    </article>
  );
};


