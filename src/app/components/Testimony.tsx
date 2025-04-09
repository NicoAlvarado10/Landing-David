import comilla from '../../../public/assets/comilla.svg';

interface TestimonyProps {
  descp: string;
  person: string;
  image: string;
}

export const Testimony: React.FC<TestimonyProps> = ({ descp, person, image }) => {
  return (
    <article className="testimoni max-md:px-3 max-md:py-4 mx-auto px-6 py-8 flex flex-col gap-4 bg-gradient-to-br from-black to-yellow-900 border-[4px] border-primary rounded-[3rem]">
      <img className="w-8 h-8 max-sm:w-6 max-sm:h-6" src={comilla.src} alt="comilla decorativa" />
      <p className="font-sedan  max-sm:text-sm text-center tracking-widest">{descp}</p>
      <img className="flex mx-auto" src={image} alt="imagen de testimonio" />
      <h4 className="text-center tracking-wider max-sm:text-sm">{person}</h4>
    </article>
  );
};


